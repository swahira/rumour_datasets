# Phase 1 Audit - Step 2: Individual Logic & Hard-Healing

## Rationale
This test evaluates how Rumour handles "Broken" execution paths. We want to see if the engine is smart enough to fix a request that is missing its variables by backtracking to the request that creates them.

## Execution Summary
| Test Case | Order | Flags | Result | Insight |
| :--- | :--- | :--- | :--- | :--- |
| **Structured (2a)** | Login -> Validate | None | PASS | Sequential state correctly maintained. |
| **Random (2b)** | Details (First) | None | **FAIL** | Correctly failed due to missing `first_product_id`. |
| **Hard-Healing (2c)** | Details (First) | **-X** | **PASS** | **HEALED**: Engine detected missing variable, found `1_list_products.toml`, executed it, and then successfully ran the target. |

## What we know after this test
1.  **Variable Dependency Mapping**: Rumour successfully maps which requests produce variables and which consume them.
2.  **Backtracking Intelligence**: With the `-X` flag, Rumour doesn't just fail; it "searches" for the solution.
3.  **State Recovery**: The engine successfully injected the healed variable into the target request's URL.

## Detailed Summary of Run: Hard-Healing (2c)
| Step | Action | Endpoint | Result | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Execute | /ecommerce/products/{{first_product_id}} | **MISSING VAR** | Variable not in current state. |
| 2 | Backtrack | Scanning workspace... | **FOUND** | `1_list_products.toml` identified as creator. |
| 3 | Reconstruct | /ecommerce/products | **PASS** | `first_product_id` extracted as "prod-001". |
| 4 | Resume | /ecommerce/products/prod-001 | **PASS** | Target request completed successfully. |

## Request Statistics (2c)
- **Total Requests Attempted**: 1
- **Actual Executions**: 2 (1 target + 1 healed creator)
- **Status**: SUCCESS

## Steps to Reproduce
1.  Ensure `data/master_suite/ecommerce` is freshly generated.
2.  Run only the detail request: `rumour run tests/Phase1/workspaces/ecommerce/2_get_details.toml --json`.
3.  Observe failure.
4.  Run with Hard-Heal: `rumour run tests/Phase1/workspaces/ecommerce/2_get_details.toml -X --json`.
5.  Observe success and recovery log.

---

## Raw Command Outputs (Tail of 2c)
**Hard-Healing Recovery Log**:
```json
{
  "node_id": "2_get_details",
  "recovery_log": [
    {
      "node_id": "2_get_details",
      "action_taken": "Backtracking: Executed 1_list_products to resolve {{first_product_id}}",
      "outcome": "Success",
      "original_error": "Variable not found: first_product_id"
    }
  ]
}
```
