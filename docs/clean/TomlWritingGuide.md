# Rumour TOML Writing Guide: Naming & Reserved Keywords

To get the most out of Rumour—especially its **Self-Healing** and **Autonomous Discovery** features—you should follow specific naming conventions and avoid reserved keywords. This guide ensures your test suites are clean, predictable, and fully compatible with the Rumour engine.

---

## 1. Reserved Keywords (Variables)

The following keywords are used by Rumour's internal logic. Avoid using them as keys in your `[variables]` block or as variable names in your API responses unless you intend to trigger their specific system behavior.

### System Built-ins
| Keyword | Function |
| :--- | :--- |
| `random` | **Reserved.** Generates a unique 6-digit random suffix. Use as `{{random}}`. |
| `vault.*` | **Reserved Prefix.** Any variable starting with `vault.` is pulled from the Rumour Vault. |

### Authentication & Context
| Keyword | Function |
| :--- | :--- |
| `accessToken` | **System Primary.** The default variable Rumour looks for to inject into Auth headers. |
| `adminaccessToken` | **System Admin.** Specifically used to override the standard token in Admin contexts. |
| `admin_accessToken` | **Alias.** An alternative name for `adminaccessToken`. |
| `Bootstrapped` | **Reserved Role.** An internal identity name used by the healer during recovery. |

---

## 2. Naming Conventions for Files

Rumour's **Hard Healing** engine scans your filesystem to "guess" which file can fix a failure. To help it "read your mind," follow these naming rules:

### A. The "Creator" Prefix
Nodes that create resources should use descriptive keywords in their filenames.
- **Identity Creators**: Use `login`, `auth`, or `session`. (e.g., `user_login.toml`)
- **Resource Creators**: Use `register`, `create`, `add`, `post`, or `signup`. (e.g., `register_account.toml`)

### B. The Numeric Ordering (Recommended)
While Rumour builds a graph based on variables, using numeric prefixes helps humans and the engine understand the logical flow:
- `0_register_user.toml`
- `1_login_user.toml`
- `2_create_profile.toml`

### C. Admin Context Detection
If a filename contains the word **`admin`**, Rumour automatically attempts to use the `adminaccessToken` for that request, even if it wasn't explicitly told to do so.

---

## 3. Rules for Resource Naming (Healer Optimization)

To get the **best output from the Healer**, follow these "Best Practice" rules when choosing names for variables and files:

### Rule 1: Match Variable Names to Creator Files
The Healer is smartest when your variable names match the files that create them.
- **Bad**: Variable `id` created by `step1.toml`.
- **Good**: Variable `account_id` created by `create_account.toml`.
> *Why? If `account_id` is missing, Rumour scans for a file containing `account` and `create`.*

### Rule 2: Namespace your Tokens
Don't just use `token` for everything.
- Use `user_token` for general endpoints.
- Use `adminaccessToken` for admin-only endpoints.
> *Why? This prevents the healer from trying to fix an Admin permission error using a standard User login.*

### Rule 3: Use Descriptive IDs
When extracting values from JSON, use names that reflect the resource type.
- **Extraction**: `new_user_email = "user.email"`
- **Consumption**: `email = "{{new_user_email}}"`
> *Why? If the email is missing, Rumour knows exactly which "User" resource it needs to reconstruct.*

---

## 4. Patterns to Avoid

1.  **Generic Filenames**: Avoid `test1.toml`, `req.toml`, or `final.toml`. These provide no hints to the Healer.
2.  **Shadowing `random`**: Never define a variable named `random` in your `.env.toml`. It will break the built-in randomizer.
3.  **Circular References**: Don't name a file such that it appears to create itself (e.g., `login_fix.toml` for a login request). This can cause healing loops.

---

*By following these rules, you enable Rumour to act as a truly autonomous agent, fixing your test suite before you even notice it was broken.*