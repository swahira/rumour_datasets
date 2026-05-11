# Rumour Testing Roadmap & QA Plan

This document outlines the strategy for testing the Rumour API client (both CLI and UI) to ensure stability, feature parity, and correctness before the final release.

## 1. Feature Inventory

### 💻 CLI Features
- [ ] **Request Execution** (`rumour run`)
    - [ ] Single `.toml` request execution.
    - [ ] Directory-based workspace execution.
    - [ ] Parallel execution (`-p, --parallel`) - dependency level validation.
    - [ ] Self-Healing (`-H, --heal`) - automatic recovery from 4xx/5xx errors.
    - [ ] Hard Healing (`-X, --hard-heal`) - reconstruction of 404 resources.
    - [ ] Execution Resumption (`-r, --resume`) - starting from the last failed state.
    - [ ] Resource Cleanup (`-C, --auto-cleanup`) - deleting created resources post-run.
    - [ ] JSON Output (`--json`) - schema validation for CI/CD.
- [ ] **Collection Management**
    - [ ] Postman Import (`--format postman`).
    - [ ] Bruno Import (`--format bruno`).
    - [ ] Workspace Export (`rumour export`).
- [ ] **Environment Engine**
    - [ ] Variable merging (Workspace -> Folder -> Request).
    - [ ] Precedence rules validation.
    - [ ] Dynamic variable resolution in headers, body, and URL.

### 🎨 UI Features
- [ ] **Workspace Navigation**
    - [ ] Sidebar directory tree rendering.
    - [ ] File/Folder CRUD operations (create, rename, delete).
    - [ ] Search/Filter functionality.
- [ ] **Request Editor (RequestBuilder)**
    - [ ] Method selection (GET, POST, PUT, DELETE, etc.).
    - [ ] URL input with Smart Highlighting.
    - [ ] Headers & Query Params (Key-Value Table).
    - [ ] Body Editor (JSON, Raw, Form-Data).
    - [ ] Variable Tooltips on hover.
- [ ] **Response View**
    - [ ] Status code and duration display.
    - [ ] Pretty-printed JSON response.
    - [ ] Headers viewer.
    - [ ] Panel resizing (vertical drag).
- [ ] **Execution & Reporting**
    - [ ] Run button (single request).
    - [ ] Run Workflow (full workspace).
    - [ ] Workflow Report visualization (DAG levels, nodes, status).
    - [ ] Real-time logs/output.
- [ ] **Settings & Customization**
    - [ ] Theme Toggle (Dark/Light/Glassmorphism).
    - [ ] Keyboard Shortcuts (Save, Run, Close Tab, etc.).
    - [ ] Environment Manager (Global vs Local variables).

## 2. Testing Requirements (Datasets)

To ensure the "Smart" features work, we need complex datasets that represent real-world scenarios.

### 📦 Dataset Sourcing
- **Postman Samples**: 
    - [ ] Simple Echo Collection (basic GET/POST).
    - [ ] Auth Flow (OAuth2, Bearer, API Key).
    - [ ] Dependent Requests (Login -> Create User -> Update User).
    - [ ] Multi-level Folders with inheritance.
- **Bruno Samples**:
    - [ ] Git-friendly folder structures.
    - [ ] Script-heavy requests (Pre-request/Post-response).
    - [ ] Multi-environment setup.

### 🧪 Integration Scenarios
1. **The "Broken Chain"**:
    - **Goal**: Test Self-Healing.
    - **Setup**: A chain of 5 requests where the 3rd one fails due to a missing dependency.
    - **Success**: Rumour identifies the missing link, re-runs the creator, and continues.
2. **The "Parallel Race"**:
    - **Goal**: Test Parallelism.
    - **Setup**: 10 independent requests.
    - **Success**: Total execution time is significantly lower than sequential run.
3. **The "Import Stress"**:
    - **Goal**: Test Parser Robustness.
    - **Setup**: Import a Postman collection with 100+ requests and nested folders.
    - **Success**: All requests are converted to `.toml` with zero data loss.

## 3. Structured TODO List

| Phase | Task | Description | Status |
| :--- | :--- | :--- | :--- |
| **Phase 1: Environment** | Mock Server Setup | Ensure `node server.js` is stable and covers all CRUD cases. | [ ] |
| **Phase 1: Environment** | Dataset Collection | Download and organize Postman/Bruno samples in `tests/samples`. | [ ] |
| **Phase 2: CLI Validation** | Import/Export Audit | Verify `rumour import` creates valid TOML for all sample formats. | [ ] |
| **Phase 2: CLI Validation** | Core Run Tests | Execute single and directory runs against mock server. | [ ] |
| **Phase 2: CLI Validation** | Smart Feature Stress | Validate Parallel, Heal, and Hard-Heal in complex DAGs. | [ ] |
| **Phase 3: UI Validation** | Visual Audit | Check responsiveness, glassmorphism, and theme consistency. | [ ] |
| **Phase 3: UI Validation** | Interaction Tests | Validate keyboard shortcuts, tooltips, and editor behavior. | [ ] |
| **Phase 3: UI Validation** | Workflow Sync | Ensure UI execution correctly reflects backend status (Real-time). | [ ] |
| **Phase 4: Finalization** | Bug Fixing | Address all issues found in Phases 2 & 3. | [ ] |
| **Phase 4: Finalization** | Documentation | Update `README.md` and `docs/` with final usage instructions. | [ ] |
| **Phase 4: Finalization** | Release Build | Run `npm run build` and `cargo build --release` for final binaries. | [ ] |

## 4. How to Report Results

For every test run, we should document:
- **Input**: The collection/request used.
- **Environment**: CLI vs UI.
- **Expected Outcome**: What should happen.
- **Actual Outcome**: What actually happened.
- **Status**: PASS / FAIL.
