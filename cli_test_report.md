# Rumour CLI Deep Test Analysis Report
Generated on: Sun May 10 10:33:02 IST 2026

## Phase 1: Full Suite Execution
### Testing data/master_suite [Standard]
Command: `rumour run data/master_suite `
Status: **FAIL** (Exit Code: 127)
Duration: 8ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite [Parallel & Quiet]
Command: `rumour run data/master_suite -p -q`
Status: **FAIL** (Exit Code: 127)
Duration: 7ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite [Heal & Cleanup]
Command: `rumour run data/master_suite -H -C`
Status: **FAIL** (Exit Code: 127)
Duration: 7ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
## Phase 2: Individual Collection Execution
### Testing data/master_suite/resilience [Verbose]
Command: `rumour run data/master_suite/resilience -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion [Verbose]
Command: `rumour run data/master_suite/exhaustion -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/advanced_stress [Verbose]
Command: `rumour run data/master_suite/advanced_stress -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/async [Verbose]
Command: `rumour run data/master_suite/async -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/cache [Verbose]
Command: `rumour run data/master_suite/cache -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing [Verbose]
Command: `rumour run data/master_suite/fuzzing -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/batch [Verbose]
Command: `rumour run data/master_suite/batch -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/graphql_sub [Verbose]
Command: `rumour run data/master_suite/graphql_sub -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/binary_deep [Verbose]
Command: `rumour run data/master_suite/binary_deep -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/jwt_advanced [Verbose]
Command: `rumour run data/master_suite/jwt_advanced -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/security [Verbose]
Command: `rumour run data/master_suite/security -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/data_diff [Verbose]
Command: `rumour run data/master_suite/data_diff -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/schema [Verbose]
Command: `rumour run data/master_suite/schema -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/docs_master [Verbose]
Command: `rumour run data/master_suite/docs_master -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/multipart [Verbose]
Command: `rumour run data/master_suite/multipart -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/compatibility [Verbose]
Command: `rumour run data/master_suite/compatibility -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/playback [Verbose]
Command: `rumour run data/master_suite/playback -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos [Verbose]
Command: `rumour run data/master_suite/chaos -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/files [Verbose]
Command: `rumour run data/master_suite/files -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/hang [Verbose]
Command: `rumour run data/master_suite/hang -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/recursive [Verbose]
Command: `rumour run data/master_suite/recursive -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/proxy_mtls [Verbose]
Command: `rumour run data/master_suite/proxy_mtls -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/security_adv [Verbose]
Command: `rumour run data/master_suite/security_adv -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/cors [Verbose]
Command: `rumour run data/master_suite/cors -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/binary_merge [Verbose]
Command: `rumour run data/master_suite/binary_merge -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/serialization [Verbose]
Command: `rumour run data/master_suite/serialization -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/iam [Verbose]
Command: `rumour run data/master_suite/iam -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/data_adv [Verbose]
Command: `rumour run data/master_suite/data_adv -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/docs [Verbose]
Command: `rumour run data/master_suite/docs -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/formats_adv [Verbose]
Command: `rumour run data/master_suite/formats_adv -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/failover [Verbose]
Command: `rumour run data/master_suite/failover -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/transmission_adv [Verbose]
Command: `rumour run data/master_suite/transmission_adv -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/binary_adv [Verbose]
Command: `rumour run data/master_suite/binary_adv -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/datetime [Verbose]
Command: `rumour run data/master_suite/datetime -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/auth [Verbose]
Command: `rumour run data/master_suite/auth -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/signing [Verbose]
Command: `rumour run data/master_suite/signing -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/transform [Verbose]
Command: `rumour run data/master_suite/transform -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/scripting [Verbose]
Command: `rumour run data/master_suite/scripting -v`
Status: **FAIL** (Exit Code: 127)
Duration: 7ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/transmission_ext [Verbose]
Command: `rumour run data/master_suite/transmission_ext -v`
Status: **FAIL** (Exit Code: 127)
Duration: 7ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/localization [Verbose]
Command: `rumour run data/master_suite/localization -v`
Status: **FAIL** (Exit Code: 127)
Duration: 7ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/realtime [Verbose]
Command: `rumour run data/master_suite/realtime -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/traffic [Verbose]
Command: `rumour run data/master_suite/traffic -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/streaming_in [Verbose]
Command: `rumour run data/master_suite/streaming_in -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/cookies [Verbose]
Command: `rumour run data/master_suite/cookies -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/realtime_adv [Verbose]
Command: `rumour run data/master_suite/realtime_adv -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/blocking [Verbose]
Command: `rumour run data/master_suite/blocking -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/trust [Verbose]
Command: `rumour run data/master_suite/trust -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/environment [Verbose]
Command: `rumour run data/master_suite/environment -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/stateful [Verbose]
Command: `rumour run data/master_suite/stateful -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/protocols_adv [Verbose]
Command: `rumour run data/master_suite/protocols_adv -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/maintenance [Verbose]
Command: `rumour run data/master_suite/maintenance -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/matrix [Verbose]
Command: `rumour run data/master_suite/matrix -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/grpc_web [Verbose]
Command: `rumour run data/master_suite/grpc_web -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/webhooks [Verbose]
Command: `rumour run data/master_suite/webhooks -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/streaming_out [Verbose]
Command: `rumour run data/master_suite/streaming_out -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/ecommerce [Verbose]
Command: `rumour run data/master_suite/ecommerce -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/legacy [Verbose]
Command: `rumour run data/master_suite/legacy -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/graphql [Verbose]
Command: `rumour run data/master_suite/graphql -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/network [Verbose]
Command: `rumour run data/master_suite/network -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/idempotency [Verbose]
Command: `rumour run data/master_suite/idempotency -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/operations [Verbose]
Command: `rumour run data/master_suite/operations -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/patch [Verbose]
Command: `rumour run data/master_suite/patch -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/users [Verbose]
Command: `rumour run data/master_suite/users -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/transmission [Verbose]
Command: `rumour run data/master_suite/transmission -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/orchestration [Verbose]
Command: `rumour run data/master_suite/orchestration -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/massive [Verbose]
Command: `rumour run data/master_suite/massive -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/patch_adv [Verbose]
Command: `rumour run data/master_suite/patch_adv -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/navigation [Verbose]
Command: `rumour run data/master_suite/navigation -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/global [Verbose]
Command: `rumour run data/master_suite/global -v`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/wire [Verbose]
Command: `rumour run data/master_suite/wire -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/performance [Verbose]
Command: `rumour run data/master_suite/performance -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/webdav [Verbose]
Command: `rumour run data/master_suite/webdav -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/lifecycle [Verbose]
Command: `rumour run data/master_suite/lifecycle -v`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
## Phase 3: Individual Request Execution
### Testing data/master_suite/resilience/1_burst_node_7.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/1_burst_node_7.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/resilience/1_burst_node_10.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/1_burst_node_10.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/resilience/1_burst_node_1.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/1_burst_node_1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/resilience/2_trip_node_1.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/2_trip_node_1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/resilience/2_trip_node_3.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/2_trip_node_3.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/resilience/1_burst_node_5.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/1_burst_node_5.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/resilience/1_burst_node_9.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/1_burst_node_9.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/resilience/2_trip_node_4.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/2_trip_node_4.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/resilience/2_trip_node_2.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/2_trip_node_2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/resilience/1_burst_node_8.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/1_burst_node_8.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/resilience/1_burst_node_12.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/1_burst_node_12.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/resilience/1_burst_node_2.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/1_burst_node_2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/resilience/1_burst_node_11.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/1_burst_node_11.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/resilience/1_burst_node_4.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/1_burst_node_4.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/resilience/1_burst_node_3.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/1_burst_node_3.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/resilience/1_burst_node_6.toml [Trace Mode]
Command: `rumour run data/master_suite/resilience/1_burst_node_6.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion/1_load_node_4.toml [Trace Mode]
Command: `rumour run data/master_suite/exhaustion/1_load_node_4.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion/1_load_node_3.toml [Trace Mode]
Command: `rumour run data/master_suite/exhaustion/1_load_node_3.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion/1_load_node_1.toml [Trace Mode]
Command: `rumour run data/master_suite/exhaustion/1_load_node_1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion/2_spike_node_5.toml [Trace Mode]
Command: `rumour run data/master_suite/exhaustion/2_spike_node_5.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion/2_spike_node_4.toml [Trace Mode]
Command: `rumour run data/master_suite/exhaustion/2_spike_node_4.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion/1_load_node_8.toml [Trace Mode]
Command: `rumour run data/master_suite/exhaustion/1_load_node_8.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion/1_load_node_9.toml [Trace Mode]
Command: `rumour run data/master_suite/exhaustion/1_load_node_9.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion/1_load_node_10.toml [Trace Mode]
Command: `rumour run data/master_suite/exhaustion/1_load_node_10.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion/1_load_node_6.toml [Trace Mode]
Command: `rumour run data/master_suite/exhaustion/1_load_node_6.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion/2_spike_node_2.toml [Trace Mode]
Command: `rumour run data/master_suite/exhaustion/2_spike_node_2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion/2_spike_node_1.toml [Trace Mode]
Command: `rumour run data/master_suite/exhaustion/2_spike_node_1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion/2_spike_node_3.toml [Trace Mode]
Command: `rumour run data/master_suite/exhaustion/2_spike_node_3.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion/1_load_node_7.toml [Trace Mode]
Command: `rumour run data/master_suite/exhaustion/1_load_node_7.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion/1_load_node_5.toml [Trace Mode]
Command: `rumour run data/master_suite/exhaustion/1_load_node_5.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/exhaustion/1_load_node_2.toml [Trace Mode]
Command: `rumour run data/master_suite/exhaustion/1_load_node_2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/advanced_stress/1_race_node_2.toml [Trace Mode]
Command: `rumour run data/master_suite/advanced_stress/1_race_node_2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/advanced_stress/2_backoff_node_2.toml [Trace Mode]
Command: `rumour run data/master_suite/advanced_stress/2_backoff_node_2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/advanced_stress/3_quota_node_2.toml [Trace Mode]
Command: `rumour run data/master_suite/advanced_stress/3_quota_node_2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/advanced_stress/2_backoff_node_1.toml [Trace Mode]
Command: `rumour run data/master_suite/advanced_stress/2_backoff_node_1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/advanced_stress/3_quota_node_5.toml [Trace Mode]
Command: `rumour run data/master_suite/advanced_stress/3_quota_node_5.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/advanced_stress/1_race_node_1.toml [Trace Mode]
Command: `rumour run data/master_suite/advanced_stress/1_race_node_1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/advanced_stress/3_quota_node_1.toml [Trace Mode]
Command: `rumour run data/master_suite/advanced_stress/3_quota_node_1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/advanced_stress/3_quota_node_6.toml [Trace Mode]
Command: `rumour run data/master_suite/advanced_stress/3_quota_node_6.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/advanced_stress/3_quota_node_4.toml [Trace Mode]
Command: `rumour run data/master_suite/advanced_stress/3_quota_node_4.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/advanced_stress/2_backoff_node_3.toml [Trace Mode]
Command: `rumour run data/master_suite/advanced_stress/2_backoff_node_3.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/advanced_stress/3_quota_node_3.toml [Trace Mode]
Command: `rumour run data/master_suite/advanced_stress/3_quota_node_3.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/async/2_poll_status.toml [Trace Mode]
Command: `rumour run data/master_suite/async/2_poll_status.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/async/1_start_task.toml [Trace Mode]
Command: `rumour run data/master_suite/async/1_start_task.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/cache/2_conditional_fetch.toml [Trace Mode]
Command: `rumour run data/master_suite/cache/2_conditional_fetch.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/cache/1_initial_fetch.toml [Trace Mode]
Command: `rumour run data/master_suite/cache/1_initial_fetch.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 7ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/1_fetch_synthetic.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/1_fetch_synthetic.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/2_spike_node_14.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/2_spike_node_14.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/2_spike_node_10.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/2_spike_node_10.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/2_spike_node_6.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/2_spike_node_6.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/2_spike_node_9.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/2_spike_node_9.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/2_spike_node_13.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/2_spike_node_13.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/2_spike_node_7.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/2_spike_node_7.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/3_fuzz_node.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/3_fuzz_node.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/2_spike_node_8.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/2_spike_node_8.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/2_spike_node_11.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/2_spike_node_11.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/2_spike_node_15.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/2_spike_node_15.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/2_spike_node_5.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/2_spike_node_5.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/2_spike_node_4.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/2_spike_node_4.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/2_spike_node_2.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/2_spike_node_2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/2_spike_node_1.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/2_spike_node_1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/2_spike_node_3.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/2_spike_node_3.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/fuzzing/2_spike_node_12.toml [Trace Mode]
Command: `rumour run data/master_suite/fuzzing/2_spike_node_12.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/batch/1_bulk_operations.toml [Trace Mode]
Command: `rumour run data/master_suite/batch/1_bulk_operations.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/graphql_sub/1_fetch_updates.toml [Trace Mode]
Command: `rumour run data/master_suite/graphql_sub/1_fetch_updates.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/binary_deep/1_fetch_pdf.toml [Trace Mode]
Command: `rumour run data/master_suite/binary_deep/1_fetch_pdf.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/binary_deep/2_fetch_image.toml [Trace Mode]
Command: `rumour run data/master_suite/binary_deep/2_fetch_image.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/jwt_advanced/2_verify_strict.toml [Trace Mode]
Command: `rumour run data/master_suite/jwt_advanced/2_verify_strict.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/jwt_advanced/1_issue_token.toml [Trace Mode]
Command: `rumour run data/master_suite/jwt_advanced/1_issue_token.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/security/2_get_secure_data.toml [Trace Mode]
Command: `rumour run data/master_suite/security/2_get_secure_data.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/security/4_hmac_tampered.toml [Trace Mode]
Command: `rumour run data/master_suite/security/4_hmac_tampered.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/security/3_hmac_valid.toml [Trace Mode]
Command: `rumour run data/master_suite/security/3_hmac_valid.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/security/1_oauth_token.toml [Trace Mode]
Command: `rumour run data/master_suite/security/1_oauth_token.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/data_diff/1_fetch_suffix.toml [Trace Mode]
Command: `rumour run data/master_suite/data_diff/1_fetch_suffix.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/data_diff/2_fetch_delta.toml [Trace Mode]
Command: `rumour run data/master_suite/data_diff/2_fetch_delta.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/schema/2_invalid_schema.toml [Trace Mode]
Command: `rumour run data/master_suite/schema/2_invalid_schema.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/schema/1_valid_schema.toml [Trace Mode]
Command: `rumour run data/master_suite/schema/1_valid_schema.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/docs_master/1_fetch_dynamic_spec.toml [Trace Mode]
Command: `rumour run data/master_suite/docs_master/1_fetch_dynamic_spec.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 7ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/docs_master/2_verify_ui.toml [Trace Mode]
Command: `rumour run data/master_suite/docs_master/2_verify_ui.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/multipart/1_batch_upload.toml [Trace Mode]
Command: `rumour run data/master_suite/multipart/1_batch_upload.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/compatibility/1_postman_test.toml [Trace Mode]
Command: `rumour run data/master_suite/compatibility/1_postman_test.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/compatibility/2_bruno_test.toml [Trace Mode]
Command: `rumour run data/master_suite/compatibility/2_bruno_test.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/playback/3_replay_event.toml [Trace Mode]
Command: `rumour run data/master_suite/playback/3_replay_event.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/playback/2_replay_user_2.toml [Trace Mode]
Command: `rumour run data/master_suite/playback/2_replay_user_2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/playback/1_replay_user_1.toml [Trace Mode]
Command: `rumour run data/master_suite/playback/1_replay_user_1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/2_timeout.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/2_timeout.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/3_flakey_3.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/3_flakey_3.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/1_chaos_node_10.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/1_chaos_node_10.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/1_chaos_node_4.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/1_chaos_node_4.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/1_rate_limit.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/1_rate_limit.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/3_flakey_1.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/3_flakey_1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/1_chaos_node_2.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/1_chaos_node_2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/4_binary.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/4_binary.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/1_chaos_node_5.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/1_chaos_node_5.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/1_chaos_node_8.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/1_chaos_node_8.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/5_bloat.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/5_bloat.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/1_chaos_node_7.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/1_chaos_node_7.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/3_flakey_5.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/3_flakey_5.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/1_chaos_node_1.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/1_chaos_node_1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/1_chaos_node_3.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/1_chaos_node_3.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/3_flakey_4.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/3_flakey_4.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/1_chaos_node_9.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/1_chaos_node_9.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/3_flakey_2.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/3_flakey_2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/chaos/1_chaos_node_6.toml [Trace Mode]
Command: `rumour run data/master_suite/chaos/1_chaos_node_6.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/files/1_upload_file.toml [Trace Mode]
Command: `rumour run data/master_suite/files/1_upload_file.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/files/2_binary_raw.toml [Trace Mode]
Command: `rumour run data/master_suite/files/2_binary_raw.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/files/3_download_asset.toml [Trace Mode]
Command: `rumour run data/master_suite/files/3_download_asset.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/hang/1_blackhole_request.toml [Trace Mode]
Command: `rumour run data/master_suite/hang/1_blackhole_request.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/recursive/1_linked_list.toml [Trace Mode]
Command: `rumour run data/master_suite/recursive/1_linked_list.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/recursive/2_tree_structure.toml [Trace Mode]
Command: `rumour run data/master_suite/recursive/2_tree_structure.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/proxy_mtls/1_proxy_handshake.toml [Trace Mode]
Command: `rumour run data/master_suite/proxy_mtls/1_proxy_handshake.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/proxy_mtls/2_mtls_request.toml [Trace Mode]
Command: `rumour run data/master_suite/proxy_mtls/2_mtls_request.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/security_adv/1_get_csrf.toml [Trace Mode]
Command: `rumour run data/master_suite/security_adv/1_get_csrf.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/security_adv/3_reflection_test.toml [Trace Mode]
Command: `rumour run data/master_suite/security_adv/3_reflection_test.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/security_adv/2_post_protected.toml [Trace Mode]
Command: `rumour run data/master_suite/security_adv/2_post_protected.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/cors/1_cors_preflight.toml [Trace Mode]
Command: `rumour run data/master_suite/cors/1_cors_preflight.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/cors/2_cors_valid.toml [Trace Mode]
Command: `rumour run data/master_suite/cors/2_cors_valid.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/cors/3_cors_violation.toml [Trace Mode]
Command: `rumour run data/master_suite/cors/3_cors_violation.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/binary_merge/1_fetch_composite.toml [Trace Mode]
Command: `rumour run data/master_suite/binary_merge/1_fetch_composite.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/serialization/2_fetch_pipe.toml [Trace Mode]
Command: `rumour run data/master_suite/serialization/2_fetch_pipe.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/serialization/1_fetch_yaml.toml [Trace Mode]
Command: `rumour run data/master_suite/serialization/1_fetch_yaml.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/iam/1_oauth_authorize.toml [Trace Mode]
Command: `rumour run data/master_suite/iam/1_oauth_authorize.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/iam/2_oauth_token.toml [Trace Mode]
Command: `rumour run data/master_suite/iam/2_oauth_token.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/iam/3_oidc_userinfo.toml [Trace Mode]
Command: `rumour run data/master_suite/iam/3_oidc_userinfo.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/data_adv/1_fetch_geo.toml [Trace Mode]
Command: `rumour run data/master_suite/data_adv/1_fetch_geo.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/data_adv/2_fetch_msgpack.toml [Trace Mode]
Command: `rumour run data/master_suite/data_adv/2_fetch_msgpack.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/docs/1_fetch_swagger.toml [Trace Mode]
Command: `rumour run data/master_suite/docs/1_fetch_swagger.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/docs/2_validate_schema.toml [Trace Mode]
Command: `rumour run data/master_suite/docs/2_validate_schema.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/formats_adv/2_fetch_bson.toml [Trace Mode]
Command: `rumour run data/master_suite/formats_adv/2_fetch_bson.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/formats_adv/3_fetch_secure.toml [Trace Mode]
Command: `rumour run data/master_suite/formats_adv/3_fetch_secure.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/formats_adv/1_fetch_cbor.toml [Trace Mode]
Command: `rumour run data/master_suite/formats_adv/1_fetch_cbor.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/failover/1_trigger_failover.toml [Trace Mode]
Command: `rumour run data/master_suite/failover/1_trigger_failover.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/failover/2_fetch_multiplexed.toml [Trace Mode]
Command: `rumour run data/master_suite/failover/2_fetch_multiplexed.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/transmission_adv/1_fetch_brotli.toml [Trace Mode]
Command: `rumour run data/master_suite/transmission_adv/1_fetch_brotli.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/binary_adv/2_fetch_related.toml [Trace Mode]
Command: `rumour run data/master_suite/binary_adv/2_fetch_related.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/binary_adv/1_fetch_framed.toml [Trace Mode]
Command: `rumour run data/master_suite/binary_adv/1_fetch_framed.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/datetime/1_get_timestamps.toml [Trace Mode]
Command: `rumour run data/master_suite/datetime/1_get_timestamps.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/datetime/2_validate_date.toml [Trace Mode]
Command: `rumour run data/master_suite/datetime/2_validate_date.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/auth/1_admin_login.toml [Trace Mode]
Command: `rumour run data/master_suite/auth/1_admin_login.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/auth/3_fail_login.toml [Trace Mode]
Command: `rumour run data/master_suite/auth/3_fail_login.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/auth/1_login.toml [Trace Mode]
Command: `rumour run data/master_suite/auth/1_login.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/auth/4_expired_test.toml [Trace Mode]
Command: `rumour run data/master_suite/auth/4_expired_test.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/auth/2_validate.toml [Trace Mode]
Command: `rumour run data/master_suite/auth/2_validate.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/signing/1_secure_post.toml [Trace Mode]
Command: `rumour run data/master_suite/signing/1_secure_post.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/transform/1_fetch_json.toml [Trace Mode]
Command: `rumour run data/master_suite/transform/1_fetch_json.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/transform/2_fetch_csv.toml [Trace Mode]
Command: `rumour run data/master_suite/transform/2_fetch_csv.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/scripting/3_get_global.toml [Trace Mode]
Command: `rumour run data/master_suite/scripting/3_get_global.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/scripting/2_set_global.toml [Trace Mode]
Command: `rumour run data/master_suite/scripting/2_set_global.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/scripting/1_pre_script.toml [Trace Mode]
Command: `rumour run data/master_suite/scripting/1_pre_script.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/transmission_ext/2_fetch_multi_range.toml [Trace Mode]
Command: `rumour run data/master_suite/transmission_ext/2_fetch_multi_range.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/transmission_ext/1_fetch_brotli_stream.toml [Trace Mode]
Command: `rumour run data/master_suite/transmission_ext/1_fetch_brotli_stream.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/localization/2_check_spanish.toml [Trace Mode]
Command: `rumour run data/master_suite/localization/2_check_spanish.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/localization/1_fetch_unicode.toml [Trace Mode]
Command: `rumour run data/master_suite/localization/1_fetch_unicode.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/realtime/1_ws_handshake.toml [Trace Mode]
Command: `rumour run data/master_suite/realtime/1_ws_handshake.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/realtime/2_fail_handshake.toml [Trace Mode]
Command: `rumour run data/master_suite/realtime/2_fail_handshake.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/traffic/2_burst_node_2.toml [Trace Mode]
Command: `rumour run data/master_suite/traffic/2_burst_node_2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/traffic/2_burst_node_1.toml [Trace Mode]
Command: `rumour run data/master_suite/traffic/2_burst_node_1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/traffic/1_throttle_node_3.toml [Trace Mode]
Command: `rumour run data/master_suite/traffic/1_throttle_node_3.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/traffic/1_throttle_node_2.toml [Trace Mode]
Command: `rumour run data/master_suite/traffic/1_throttle_node_2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/traffic/1_throttle_node_1.toml [Trace Mode]
Command: `rumour run data/master_suite/traffic/1_throttle_node_1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/traffic/2_burst_node_4.toml [Trace Mode]
Command: `rumour run data/master_suite/traffic/2_burst_node_4.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/traffic/1_throttle_node_4.toml [Trace Mode]
Command: `rumour run data/master_suite/traffic/1_throttle_node_4.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/traffic/2_burst_node_3.toml [Trace Mode]
Command: `rumour run data/master_suite/traffic/2_burst_node_3.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/traffic/2_burst_node_5.toml [Trace Mode]
Command: `rumour run data/master_suite/traffic/2_burst_node_5.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/traffic/1_throttle_node_5.toml [Trace Mode]
Command: `rumour run data/master_suite/traffic/1_throttle_node_5.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/streaming_in/1_post_stream.toml [Trace Mode]
Command: `rumour run data/master_suite/streaming_in/1_post_stream.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/cookies/3_logout.toml [Trace Mode]
Command: `rumour run data/master_suite/cookies/3_logout.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/cookies/1_login_cookie.toml [Trace Mode]
Command: `rumour run data/master_suite/cookies/1_login_cookie.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/cookies/2_check_profile.toml [Trace Mode]
Command: `rumour run data/master_suite/cookies/2_check_profile.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/realtime_adv/3_mqtt_binary.toml [Trace Mode]
Command: `rumour run data/master_suite/realtime_adv/3_mqtt_binary.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/realtime_adv/1_sse_heartbeat.toml [Trace Mode]
Command: `rumour run data/master_suite/realtime_adv/1_sse_heartbeat.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 7ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/realtime_adv/2_long_polling.toml [Trace Mode]
Command: `rumour run data/master_suite/realtime_adv/2_long_polling.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/blocking/1_start_heavy_work.toml [Trace Mode]
Command: `rumour run data/master_suite/blocking/1_start_heavy_work.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 7ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/blocking/2_check_lock.toml [Trace Mode]
Command: `rumour run data/master_suite/blocking/2_check_lock.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/trust/2_rotated_key_success.toml [Trace Mode]
Command: `rumour run data/master_suite/trust/2_rotated_key_success.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/trust/1_internal_portal.toml [Trace Mode]
Command: `rumour run data/master_suite/trust/1_internal_portal.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/trust/3_saml_acs.toml [Trace Mode]
Command: `rumour run data/master_suite/trust/3_saml_acs.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/environment/3_tenant_check.toml [Trace Mode]
Command: `rumour run data/master_suite/environment/3_tenant_check.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/environment/1_fetch_vault_secret.toml [Trace Mode]
Command: `rumour run data/master_suite/environment/1_fetch_vault_secret.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/environment/2_validate_vault.toml [Trace Mode]
Command: `rumour run data/master_suite/environment/2_validate_vault.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/stateful/3_verify_resume.toml [Trace Mode]
Command: `rumour run data/master_suite/stateful/3_verify_resume.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/stateful/1_step_1.toml [Trace Mode]
Command: `rumour run data/master_suite/stateful/1_step_1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/stateful/2_step_2.toml [Trace Mode]
Command: `rumour run data/master_suite/stateful/2_step_2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/stateful/0_reset.toml [Trace Mode]
Command: `rumour run data/master_suite/stateful/0_reset.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/protocols_adv/2_detect_push.toml [Trace Mode]
Command: `rumour run data/master_suite/protocols_adv/2_detect_push.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/protocols_adv/1_websub_subscribe.toml [Trace Mode]
Command: `rumour run data/master_suite/protocols_adv/1_websub_subscribe.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/protocols_adv/3_quic_discovery.toml [Trace Mode]
Command: `rumour run data/master_suite/protocols_adv/3_quic_discovery.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 7ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/maintenance/3_protocol_success.toml [Trace Mode]
Command: `rumour run data/master_suite/maintenance/3_protocol_success.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/maintenance/2_protocol_failure.toml [Trace Mode]
Command: `rumour run data/master_suite/maintenance/2_protocol_failure.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/maintenance/1_fetch_drain.toml [Trace Mode]
Command: `rumour run data/master_suite/maintenance/1_fetch_drain.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/matrix/1_fetch_v3_0.toml [Trace Mode]
Command: `rumour run data/master_suite/matrix/1_fetch_v3_0.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/matrix/1_fetch_v1_0.toml [Trace Mode]
Command: `rumour run data/master_suite/matrix/1_fetch_v1_0.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/matrix/1_fetch_v2_0.toml [Trace Mode]
Command: `rumour run data/master_suite/matrix/1_fetch_v2_0.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/matrix/2_fetch_summary.toml [Trace Mode]
Command: `rumour run data/master_suite/matrix/2_fetch_summary.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/grpc_web/1_service_call.toml [Trace Mode]
Command: `rumour run data/master_suite/grpc_web/1_service_call.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/webhooks/2_trigger_event.toml [Trace Mode]
Command: `rumour run data/master_suite/webhooks/2_trigger_event.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/webhooks/1_register_webhook.toml [Trace Mode]
Command: `rumour run data/master_suite/webhooks/1_register_webhook.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/streaming_out/2_fetch_range.toml [Trace Mode]
Command: `rumour run data/master_suite/streaming_out/2_fetch_range.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/streaming_out/1_fetch_sse.toml [Trace Mode]
Command: `rumour run data/master_suite/streaming_out/1_fetch_sse.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/ecommerce/1_list_products.toml [Trace Mode]
Command: `rumour run data/master_suite/ecommerce/1_list_products.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/ecommerce/4_invalid_data.toml [Trace Mode]
Command: `rumour run data/master_suite/ecommerce/4_invalid_data.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/ecommerce/2_create_product.toml [Trace Mode]
Command: `rumour run data/master_suite/ecommerce/2_create_product.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/ecommerce/3_place_order.toml [Trace Mode]
Command: `rumour run data/master_suite/ecommerce/3_place_order.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/legacy/1_get_xml_user.toml [Trace Mode]
Command: `rumour run data/master_suite/legacy/1_get_xml_user.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/legacy/2_soap_request.toml [Trace Mode]
Command: `rumour run data/master_suite/legacy/2_soap_request.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/graphql/2_create_post.toml [Trace Mode]
Command: `rumour run data/master_suite/graphql/2_create_post.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/graphql/1_get_user.toml [Trace Mode]
Command: `rumour run data/master_suite/graphql/1_get_user.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/network/1_slow_read.toml [Trace Mode]
Command: `rumour run data/master_suite/network/1_slow_read.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/network/2_proxy_test.toml [Trace Mode]
Command: `rumour run data/master_suite/network/2_proxy_test.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/idempotency/1_initial_charge.toml [Trace Mode]
Command: `rumour run data/master_suite/idempotency/1_initial_charge.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/idempotency/2_retry_charge.toml [Trace Mode]
Command: `rumour run data/master_suite/idempotency/2_retry_charge.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/operations/1_delete_item_2.toml [Trace Mode]
Command: `rumour run data/master_suite/operations/1_delete_item_2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/operations/1_delete_item_1.toml [Trace Mode]
Command: `rumour run data/master_suite/operations/1_delete_item_1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/operations/3_cascade_dept.toml [Trace Mode]
Command: `rumour run data/master_suite/operations/3_cascade_dept.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/operations/2_bulk_update.toml [Trace Mode]
Command: `rumour run data/master_suite/operations/2_bulk_update.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/patch/1_apply_patch.toml [Trace Mode]
Command: `rumour run data/master_suite/patch/1_apply_patch.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/users/2_register_user.toml [Trace Mode]
Command: `rumour run data/master_suite/users/2_register_user.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/users/3_create_new.toml [Trace Mode]
Command: `rumour run data/master_suite/users/3_create_new.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/users/1_search_users.toml [Trace Mode]
Command: `rumour run data/master_suite/users/1_search_users.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/transmission/1_gzip_fetch.toml [Trace Mode]
Command: `rumour run data/master_suite/transmission/1_gzip_fetch.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/transmission/2_stream_fetch.toml [Trace Mode]
Command: `rumour run data/master_suite/transmission/2_stream_fetch.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/orchestration/3_assemble_car.toml [Trace Mode]
Command: `rumour run data/master_suite/orchestration/3_assemble_car.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/orchestration/2_create_chassis.toml [Trace Mode]
Command: `rumour run data/master_suite/orchestration/2_create_chassis.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/orchestration/1_create_engine.toml [Trace Mode]
Command: `rumour run data/master_suite/orchestration/1_create_engine.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/massive/1_massive_standard.toml [Trace Mode]
Command: `rumour run data/master_suite/massive/1_massive_standard.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/massive/2_massive_heavy.toml [Trace Mode]
Command: `rumour run data/master_suite/massive/2_massive_heavy.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/patch_adv/1_restructure_data.toml [Trace Mode]
Command: `rumour run data/master_suite/patch_adv/1_restructure_data.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/navigation/1_redirect_check.toml [Trace Mode]
Command: `rumour run data/master_suite/navigation/1_redirect_check.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/navigation/4_loop_test.toml [Trace Mode]
Command: `rumour run data/master_suite/navigation/4_loop_test.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/navigation/2_version_v1.toml [Trace Mode]
Command: `rumour run data/master_suite/navigation/2_version_v1.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/navigation/3_version_v2.toml [Trace Mode]
Command: `rumour run data/master_suite/navigation/3_version_v2.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/global/1_finance_us.toml [Trace Mode]
Command: `rumour run data/master_suite/global/1_finance_us.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/global/2_finance_de.toml [Trace Mode]
Command: `rumour run data/master_suite/global/2_finance_de.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/global/3_rtl_meta.toml [Trace Mode]
Command: `rumour run data/master_suite/global/3_rtl_meta.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/wire/1_post_proto.toml [Trace Mode]
Command: `rumour run data/master_suite/wire/1_post_proto.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/performance/1_retry_test.toml [Trace Mode]
Command: `rumour run data/master_suite/performance/1_retry_test.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/performance/2_assertion_test.toml [Trace Mode]
Command: `rumour run data/master_suite/performance/2_assertion_test.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/webdav/1_propfind_resource.toml [Trace Mode]
Command: `rumour run data/master_suite/webdav/1_propfind_resource.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/webdav/2_mkcol_folder.toml [Trace Mode]
Command: `rumour run data/master_suite/webdav/2_mkcol_folder.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/lifecycle/2_cors_preflight.toml [Trace Mode]
Command: `rumour run data/master_suite/lifecycle/2_cors_preflight.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 6ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
### Testing data/master_suite/lifecycle/1_deprecated_api.toml [Trace Mode]
Command: `rumour run data/master_suite/lifecycle/1_deprecated_api.toml -t`
Status: **FAIL** (Exit Code: 127)
Duration: 5ms

**Terminal Output Snapshot:**
```
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
...
./test_cli_deep.sh: line 23: ./rumour/target/debug/rumour: No such file or directory
```

---
