#!/bin/bash
set -e

BIN="./target/debug/rumour"
DATA_DIR="/home/bugsfounder/Documents/rumour_dev/rumour/data/master_suite"
SNAPSHOT="/tmp/session_snapshot.json"
REPORT="/tmp/sweep_report.md"

echo "# Rumour Big Sweep Test Report" > $REPORT
echo "Generated on: $(date)" >> $REPORT
echo "" >> $REPORT

# Build first
cargo build

echo "## 1. Auth Workflow (Sequential + Record + Profiling)" >> $REPORT
$BIN run $DATA_DIR/auth --record $SNAPSHOT --profile -v -y >> sweep_auth_record.log 2>&1
echo "### Auth Record Status: $?" >> $REPORT
echo '```' >> $REPORT
tail -n 20 sweep_auth_record.log >> $REPORT
echo '```' >> $REPORT

echo "## 2. Auth Replay" >> $REPORT
$BIN run $DATA_DIR/auth --replay $SNAPSHOT -v -y >> sweep_auth_replay.log 2>&1
echo "### Auth Replay Status: $?" >> $REPORT
echo '```' >> $REPORT
tail -n 20 sweep_auth_replay.log >> $REPORT
echo '```' >> $REPORT

echo "## 3. Advanced Stress (Parallel + Profiling)" >> $REPORT
$BIN run $DATA_DIR/advanced_stress -p --profile -v -y >> sweep_stress.log 2>&1
echo "### Stress Parallel Status: $?" >> $REPORT
echo '```' >> $REPORT
tail -n 20 sweep_stress.log >> $REPORT
echo '```' >> $REPORT

echo "## 4. Schema Validation" >> $REPORT
$BIN run $DATA_DIR/schema -v -y >> sweep_schema.log 2>&1
echo "### Schema Validation Status: $?" >> $REPORT
echo '```' >> $REPORT
tail -n 20 sweep_schema.log >> $REPORT
echo '```' >> $REPORT

echo "## 5. Documentation Generation" >> $REPORT
$BIN doc $DATA_DIR/advanced_stress -o WORKFLOW_DOC.md -y >> sweep_doc.log 2>&1
echo "### Doc Generation Status: $?" >> $REPORT
echo "Documentation generated at WORKFLOW_DOC.md" >> $REPORT

echo "Sweep complete. See details in sweep logs."
