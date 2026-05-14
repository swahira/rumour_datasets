# Rumour Self-Healing Showcase: Authentication & Lifecycle

This dataset is designed to demonstrate Rumour's advanced self-healing capabilities in a production-like environment.

## Healing Modes Demonstrated

### 1. Persona Switch (Soft Healing)

- **Node:** `5_admin_action.toml`
- **Scenario:** The request requires Admin privileges, but the current session (from `1_login.toml`) only has User privileges.
- **Healing:** Rumour identifies the `403 Forbidden` error, searches for an Admin login node (`1_admin_login.toml`), executes it, and retries the action with the fresh Admin token.

### 2. Smart Mutation

- **Node:** `6_smart_mutation.toml`
- **Scenario:** The request payload contains a `null` value that the server rejects with a `400 Validation Error`.
- **Healing:** Rumour automatically omits the problematic `null` field from the JSON body and retries the request.

### 3. State Promotion & Hard Healing

- **Node:** `1_login.toml` (in isolation) or `8_fetch_key.toml`
- **Scenario:** A resource is missing or the server returns a `404 Not Found`.
- **Healing:** Rumour uses **Autonomous Discovery** to find the creator node (like `0_register.toml` or `8_create_key.toml`), executes it to build the state, and retries.

### Healing & Autonomy Documentation

This suite is a live demonstration of Rumour's **Self-Healing** engine.

> [!TIP]
> To understand the rules and best practices for building your own self-healing suites, see the [Architect's Guide to Rumour Healing](../healer_guide.md).

## How to Run

1. **Start the mock server**:

   ```bash
   cd rumour_datasets/mock-server && node server.js
   ```

2. **Run the showcase suite** with Healing (`-H`) and Hard Healing (`-X`) enabled:
   ```bash
   rumour run data/master_suite/auth/ -HX -v -t
   ```

## Expected Results

You should see nodes marked as **HEALED** or **RECONSTRUCTED** in the execution report.

- `5_admin_action.toml` -> HEALED (Persona Switch)
- `6_smart_mutation.toml` -> HEALED (Smart Mutation)
- `1_login.toml` -> RECONSTRUCTED (Hard Heal via `0_register.toml`)
- `8_fetch_key.toml` -> RECONSTRUCTED (Hard Heal via `8_create_key.toml`)
