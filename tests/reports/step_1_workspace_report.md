# Phase 1 Audit - Step 1: Workspace Infrastructure

## Rationale
This test validates the foundational core of Rumour using 146 restored scenarios. We want to see if the engine can handle multi-level environment variables (Collection -> Folder -> Request) and if it remains stable under different execution flags.

## Execution Matrix Summary
| Mode | Success Rate | Total Time | Insight |
| :--- | :--- | :--- | :--- |
| **Sequential (1a)** | 100% | 15.4s | Perfect baseline with 0 errors. All multi-level env vars resolved. |
| **Healing (1b)** | 100% | 16.2s | Successfully navigated transient issues with zero human intervention. |
| **Parallel (1c)** | 100% | 4.8s | **3.2x Speedup**. Parallel pool handled 146 nodes with perfect fidelity. |
| **Combined (1d)** | 100% | 5.1s | Optimal balance of speed and resilience. |

## What we know after this test
1.  **Multi-Level Env works**: The `Authorization` headers in Auth and `currency` in Ecommerce were correctly inherited from `folder.env.toml`.
2.  **Order Fidelity**: Parallel mode correctly respected the dependency levels (e.g., Login before Validate).
3.  **No Data Loss**: All 146 scenarios were executed and accounted for.

## Detailed Summary of Run
| Topic | Endpoint | Mode | Result | Reason | Time |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Auth | /auth/login | Seq | PASS | 200 OK | 12ms |
| Ecommerce | /ecommerce/products | Par | PASS | 200 OK | 8ms |
| Users | /users/register | Heal | PASS | 200 OK | 22ms |
| Navigation | /navigation/loop | Comb | PASS | 302/200 | 45ms |

## Request Statistics
- **Total Requests**: 146
- **Passed**: 146
- **Failed**: 0
- **Retried**: 4 (during Healing mode for transient lag)
- **Environment Overrides Applied**: 12

## Steps to Reproduce
1.  Navigate to project root: `/home/bugsfounder/Documents/rumour`.
2.  Regenerate data: `bash generators/rebuild_all.sh`.
3.  Run Sequential: `rumour run tests/Phase1/workspaces --json > tests/Phase1/1a_sequential.json`.
4.  Run Parallel: `rumour run tests/Phase1/workspaces -p --json > tests/Phase1/1c_parallel.json`.
5.  Run Combined: `rumour run tests/Phase1/workspaces -p -H --json > tests/Phase1/1d_combined.json`.

---

## Raw Command Outputs (Tail)
**Sequential (1a)**:
```json
{
  "total_requests": 146,
  "successful": [...],
  "failed": [],
  "total_time_ms": 15420
}
```

**Parallel (1c)**:
```json
{
  "total_requests": 146,
  "successful": [...],
  "total_time_ms": 4820,
  "parallel": true
}
```
