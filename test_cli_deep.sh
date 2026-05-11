#!/bin/bash

# Rumour CLI Deep Testing Script
# This script executes the Rumour CLI against the master suite with multiple flag combinations.

EXECUTABLE="./rumour/target/debug/rumour"
MASTER_SUITE="data/master_suite"
REPORT_FILE="cli_test_report.md"

echo "# Rumour CLI Deep Test Analysis Report" > $REPORT_FILE
echo "Generated on: $(date)" >> $REPORT_FILE
echo "" >> $REPORT_FILE

run_test() {
    local target=$1
    local flags=$2
    local label=$3
    
    echo "### Testing $target [$label]" >> $REPORT_FILE
    echo "Command: \`rumour run $target $flags\`" >> $REPORT_FILE
    
    start_time=$(date +%s%N)
    output=$($EXECUTABLE run "$target" $flags 2>&1)
    exit_code=$?
    end_time=$(date +%s%N)
    duration=$(( (end_time - start_time) / 1000000 ))
    
    if [ $exit_code -eq 0 ]; then
        echo "Status: **PASS**" >> $REPORT_FILE
    else
        echo "Status: **FAIL** (Exit Code: $exit_code)" >> $REPORT_FILE
    fi
    
    echo "Duration: ${duration}ms" >> $REPORT_FILE
    echo "" >> $REPORT_FILE
    echo "**Terminal Output Snapshot:**" >> $REPORT_FILE
    echo "\`\`\`" >> $REPORT_FILE
    # Only keep the first 10 and last 10 lines to keep the report readable
    echo "$output" | head -n 10 >> $REPORT_FILE
    echo "..." >> $REPORT_FILE
    echo "$output" | tail -n 10 >> $REPORT_FILE
    echo "\`\`\`" >> $REPORT_FILE
    echo "" >> $REPORT_FILE
    
    # Analyze output for common issues
    if echo "$output" | grep -q "Schema validation failed"; then
        echo "**Analysis**: Schema validation failure detected. This is a *Good Failure* if the test intended to break the contract." >> $REPORT_FILE
    elif echo "$output" | grep -q "Variable resolution failed"; then
        echo "**Analysis**: Variable resolution failure. Potential environment configuration issue." >> $REPORT_FILE
    elif echo "$output" | grep -q "Connection refused"; then
        echo "**Analysis**: Network error. Server might be down." >> $REPORT_FILE
    fi
    echo "---" >> $REPORT_FILE
}

# 1. Full Suite Runs
echo "## Phase 1: Full Suite Execution" >> $REPORT_FILE
run_test "$MASTER_SUITE" "" "Standard"
run_test "$MASTER_SUITE" "-p -q" "Parallel & Quiet"
run_test "$MASTER_SUITE" "-H -C" "Heal & Cleanup"

# 2. Individual Collection Runs (Sampling top 5 to keep runtime reasonable for this turn, or all if quick)
echo "## Phase 2: Individual Collection Execution" >> $REPORT_FILE
for coll in $(find "$MASTER_SUITE" -maxdepth 1 -type d | grep -v "\.rumour" | grep -v "^$MASTER_SUITE$"); do
    run_test "$coll" "-v" "Verbose"
done

# 3. Individual Request Runs
echo "## Phase 3: Individual Request Execution" >> $REPORT_FILE
for req in $(find "$MASTER_SUITE" -name "*.toml" | grep -v "\.env\.toml" | grep -v "collection\.toml"); do
    run_test "$req" "-t" "Trace Mode"
done

echo "Deep Test Completed."
