# 🛡️ Rumour Production Readiness Checklist

This checklist tracks the final verification of all Rumour features. Follow the [Comprehensive Handbook](allFeaturesGuide.md) for detailed parameter explanations.

## 1. Core Execution & Commands
- [ ] **Single Request**: Run a single `.toml` file.
- [ ] **Directory Run**: Run an entire folder of requests.
- [ ] **Watch Mode**: `rumour watch` re-runs on file save.
- [ ] **Benchmarking**: `rumour bench` with `-n` and `-c` flags.

## 2. Elite TUI & Observability
- [ ] **Global Ticker**: Verify Success/Fail/Skip counts update in real-time.
- [ ] **Success Rate**: Verify the `%` calculation in the ticker.
- [ ] **Data Throughput**: Verify `↑` (Sent) and `↓` (Received) metrics.
- [ ] **Sparklines**: Observe the `▂▃▅` latency heatmap during execution.
- [ ] **Path Tracing**: Verify `B ← [A]` indicators in the active spinner.
- [ ] **Live Retries**: Observe the spinner transforming into a retry countdown.
- [ ] **Boxed Summary**: Confirm the final ASCII table report.
- [ ] **Intelligent Tips**: Trigger a tip (e.g., fail a test to see the `-H` tip).

## 3. Orchestration & Automation
- [ ] **Parallel Execution**: Run a suite with `-p` and verify concurrency.
- [ ] **Data-Driven (CSV)**: Run a workflow using `--data users.csv`.
- [ ] **Data-Driven (JSON)**: Run a workflow using `--data users.json`.
- [ ] **JUnit Export**: Verify `--junit report.xml` generates valid XML.
- [ ] **Stop-On-Fail**: Verify execution halts immediately on first error.

## 4. Resilience & Self-Healing
- [ ] **Soft Healing (-H)**: Missing variable triggers discovery of producer node.
- [ ] **Hard Healing (-X)**: 404/Fail triggers re-run of upstream creator node.
- [ ] **Session Resume (-r)**: Stop a run mid-way and resume from the failed node.

## 5. Analysis & Debugging
- [ ] **Verbose Mode (-v)**: Verify the detailed success/fail list.
- [ ] **Trace Mode (-t)**: Verify full response bodies and **JSON Highlighting**.
- [ ] **Graph Generation**: `rumour graph ./` generates a Mermaid diagram.
- [ ] **Variable Inspection**: `--vars` prints the final state of all placeholders.
- [ ] **Dry Run**: Verify logic validation without sending HTTP traffic.

## 6. Security & Vault
- [ ] **Vault Storage**: `vault set` / `vault get` / `vault list`.
- [ ] **Secret Masking**: Verify vault secrets are `[MASKED]` in all TUI logs.
- [ ] **Password Protection**: Verify `RUMOUR_VAULT_PASS` is required for access.

## 7. Variables & Environments
- [ ] **Cascading Envs**: Verify `.env.toml` hierarchy (Root -> Folder).
- [ ] **Shared Configs**: Verify `*.config.toml` applies to all sibling requests.
- [ ] **CLI Overrides**: `-V key=value` correctly overwrites environment vars.
- [ ] **Header Injection**: `--header "Key: Value"` applies to all requests.

## 8. Ecosystem
- [ ] **Importer**: Successfully import a Postman or Bruno collection.
- [ ] **Exporter**: Successfully package a workspace into a ZIP file.
- [ ] **Auto-Cleanup**: Verify "Cleanup" nodes run even after failure.

---
**Current Audit Status**: 0% Complete
