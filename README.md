# Rumour Datasets & Testing Suites

![Rumour Datasets Header](/home/bugsfounder/.gemini/antigravity/brain/90ba593c-75e2-49e4-bc22-ba5dfaba03e2/rumour_datasets_header_1778506597614.png)

## Overview

Welcome to the **Rumour Datasets** repository. This is the official collection of testing suites, mock environments, and workflow datasets for the [Rumour API Orchestration Engine](https://github.com/rumour-dev/rumour).

This repository is designed to provide comprehensive testing coverage for all Rumour features, including parallel execution, self-healing, deep variable resolution, and real-time streaming.

##  Repository Structure

The project is organized into logical categories to ensure easy navigation and specialized testing:

###  Suites (`/suites`)
*   **[Core](/suites/core)**: Basic CRUD operations and standard workflow benchmarks.
*   **[Smart Features](/suites/smart)**: Specialized tests for Rumour's advanced capabilities.
    *   `healing/`: Scenarios for Self-Healing and Hard-Healing.
    *   `parallelism/`: Contention and dependency-level validation.
    *   `stress/`: High-load and massive workflow execution.
*   **[Logic](/suites/logic)**: Deep variable resolution, complex environment merging, and nested scopes.
*   **[Specialized](/suites/specialized)**:
    *   `ai/`: AI-driven testing and healing demos.
    *   `streaming/`: Real-time streaming and long-polling validation.
    *   `vault/`: Security, auth flows, and secret management.

###  Mock Server (`/mock-server`)
A robust Node.js environment that simulates various API behaviors, including failures, delays, and dynamic resource creation.
*   **API Docs (Swagger)**: [http://localhost:3000/api-docs](http://localhost:3000/api-docs) (when running locally)
*   **Features**: CRUD simulation, auth simulation, streaming endpoints.

###  Assets (`/assets`)
*   **Samples**: Postman collections, Bruno exports, and Rumour native samples.
*   **Demo**: Ready-to-run demo datasets for presentation.

###  Scripts (`/scripts`)
*   **Generators**: Scripts to programmatically generate massive test datasets.
*   **Runners**: Utility scripts to execute specific test suites.

##  Master Test Suite

For full-scale stress testing and comprehensive feature coverage, you can generate the **Master Test Suite**. This suite contains **over 72 unique topics** and thousands of requests.

> [!NOTE]
> The `master_suite/` directory is ignored by Git to keep the repository lightweight. You must generate it locally.

### How to Generate
```bash
cd scripts/generators
bash rebuild_all.sh
```
This will populate the `master_suite/` directory at the root of the project.

##  Getting Started

### 1. Prerequisites
*   [Rumour CLI](https://github.com/rumour-dev/rumour/releases) installed.
*   Node.js (for the mock server).

### 2. Launch the Mock Server
```bash
cd mock-server
npm install
npm start
```

### 3. Run a Test Suite
```bash
# Run the basic flow
rumour run suites/core/basic_flow

# Run a healing demo
rumour run suites/smart/healing --heal
```

##  Tooling & Generators

We provide a massive collection of generators in `scripts/generators/` to create custom testing environments:
*   `gen_advanced_stress.sh`: Generate 10,000+ requests for stress testing.
*   `gen_auth.sh`: Setup complex OAuth2/JWT auth flows.
*   `gen_graphql.sh`: Generate GraphQL-specific workflows.

##  Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to add new datasets or test scenarios.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

