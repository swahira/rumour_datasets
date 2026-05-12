Listed directory rumour
Listed directory rumour
Ran command: `find . -name "server.js"`
Listed directory src
Listed directory models
Viewed toml_request.rs:1-81
Viewed lib.rs:1-730
Viewed main.rs:1-800
Listed directory scripting
Viewed engine.rs:1-129
Listed directory workflow
Viewed graph.rs:1-605
Viewed executor.rs:1-800
Listed directory importer
Viewed exporter.rs:1-54
Listed directory extractor
Viewed registry.rs:1-114
Listed directory inference
Viewed semantics.rs:1-80

I have completed a comprehensive analysis of the Rumour backend. This tool is a highly sophisticated API orchestration and testing engine designed for "power users" who need to manage complex, inter-dependent API workflows.

Below is the exhaustive list of features I've identified from the Rust backend, CLI, and internal modules.

### 1. Core Request & Execution Engine

- **Full HTTP Method Support**: Native support for GET, POST, PUT, PATCH, DELETE, and custom methods.
- **Variable-Aware URL & Headers**: Dynamic resolution of variables using `{{var}}` syntax in URLs, headers, and query parameters.
- **Rich Body Support**:
  - `json`: Automatic serialization and header management.
  - `raw`: For binary or unstructured data.
  - `multipart/form-data`: Handled via standard HTTP semantics.
- **Multi-Layered Assertions**:
  - **Status Code**: Exact match validation.
  - **Body Content**: Substring searches.
  - **JSON Path Assertions**: Deep validation of response fields using `Equal`, `NotEqual`, `Contains`, `Exists`, `GreaterThan`, `LessThan`, and `Regex`.
  - **Header Assertions**: Validation of specific response headers.
  - **Latency/Duration Check**: Max acceptable response time in milliseconds.
  - **JSON Schema Validation**: Validation against local or remote schema files.
- **Automated Variable Extraction**:
  - Manual extraction using JSON Path or header lookups.
  - Namespaced extraction (e.g., `login.token`).
- **Retry System**: Built-in exponential backoff retries with configurable attempt counts.

### 2. Intelligent Workflow Orchestration

- **Dynamic Dependency Graph**: Automatically builds an execution graph by analyzing which requests produce and consume variables.
- **Fuzzy Variable Matching**: Uses Levenshtein distance and normalization to link requests even if variable names aren't identical (e.g., `user_id` matches `userId`).
- **Workspace-Wide Discovery**: If a variable is missing, Rumour automatically scans the entire workspace to find a "producer" request that can provide it.
- **Parallel Execution**: Level-based parallel execution with a configurable concurrency semaphore (defaults to 20).
- **Ordered Nodes**: Ability to force specific nodes to run sequentially within a parallel level (useful for state-sensitive operations).
- **Shared State Serialization**: Detects when multiple nodes modify the same variable and serializes them to prevent race conditions.
- **Priority Heuristics**: Automatically schedules "Cleanup", "Delete", and "Logout" nodes at the very end of the workflow.

### 3. Variable & Environment Management

- **Cascading Environments**: Automatic loading of `.env.toml` files from the current, parent, and workspace root directories.
- **Folder-Level Collections**: `collection.toml` files allow sharing headers, parameters, and variables across all requests in a directory.
- **Precedence Logic**: Local variables < Collection variables < Global/Env variables < CLI/UI Overrides.
- **Namespaced Resolution**: Support for `node_name.variable` to disambiguate variables from different requests.
- **Vault Integration**: Encrypted storage for sensitive secrets (passwords, API keys) managed via `RUMOUR_VAULT_PASS`.

### 4. Self-Healing & Autonomous Recovery

- **401/403 Persona Switching**: Automatically detects auth failures and attempts to switch to an admin or alternative persona to recover.
- **404 Creator Recovery (Hard Heal)**: If a resource is missing, Rumour identifies the request that originally created it and re-runs it on the fly.
- **Dynamic Payload Mutation**: Automatically fixes common server rejections (e.g., removing `null` fields from JSON) during recovery.
- **Interactive Healing**: CLI prompts the user for missing variables or decisions when a failure occurs.
- **State Persistence**: Saves the current execution state to `.rumour/state.json`, allowing the engine to resume from the point of failure.

### 5. Advanced Logic & Scripting

- **Rhai Scripting Engine**: Full support for pre-request and post-request logic using the Rhai language.
  - **Pre-request**: Modify headers, body, or variables before sending.
  - **Post-request**: Access response status, headers, and body to perform complex extractions or conditional logic.
- **CRUD Semantic Inference**:
  - Infers `POST /users` creates a `user.id`.
  - Infers `POST /login` produces an `accessToken`.
  - Recognizes admin routes and automatically prioritizes admin tokens.

### 6. CLI & Developer Experience

- **Live Interactive Dashboard**: CLI provides a real-time "Ticker" showing success rate, transfer speeds (up/down), and average latency.
- **Latency Sparklines**: Visualizes response time trends directly in the terminal.
- **Hot Reloading (Watch Mode)**: Re-runs specific requests or workflows automatically when files are saved.
- **Benchmarking Engine**: High-concurrency performance testing with configurable iterations and concurrency levels.
- **Data-Driven Testing**: Iterates workflows using external CSV or JSON data sources.
- **Dry Run Mode**: Validates the dependency graph and variable resolution without sending actual HTTP requests.

### 7. Reporting & Interoperability

- **Multi-Format Export**:
  - **Markdown/Mermaid**: Generates visual documentation of the workflow graph.
  - **JUnit XML**: Native support for CI/CD integration (Jenkins, GitHub Actions).
  - **HTML Dashboard**: Generates a self-contained `.html` report for every run.
- **ZIP Workspace Export**: Packages an entire Rumour environment for sharing.
- **Import support**:
  - **Postman**: Full collection import.
  - **Bruno**: Import for folder-based collections.

### 8. Response Handling & Infrastructure

- **Intelligent Disk Spooling**: Automatically saves large (>2MB) or binary responses to disk to prevent memory bloating.
- **MIME Type Inference**: Automatically identifies file types for responses missing the `Content-Type` header.
- **Performance Profiling**: Deep breakdown of DNS Lookup, TCP Connect, TLS Handshake, and TTFB (Time to First Byte).
- **Auto-Cleanup**: Tracks resources created during a session and triggers `DELETE` requests for them upon completion.

### 9. Rumour Mock Server (External Ecosystem)

- **Swagger/OpenAPI Docs**: Hosted at `http://localhost:3000/docs`.
- **Persistent CRUD**: Built-in endpoints for `/items` with persistent JSON storage.
- **File Assets**: Dedicated endpoints for file upload and download testing.
