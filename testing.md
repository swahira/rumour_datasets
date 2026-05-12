## Commands

```bash
Commands:
  run     Run a request or a directory of requests
  doc     Generate Markdown/Mermaid documentation for a workflow
  watch   Watch a directory and re-run requests on file changes
  bench   Benchmark a request or workflow
  vault   Manage encrypted secrets vault
  graph   Generate a dependency graph (Mermaid format)
  import  Import a collection from Postman or Bruno
  export  Export a Rumour workspace to a ZIP file
  help    Print this message or the help of the given subcommand(s)
```

### Rumour `run`

```bash
❯ ./rumour/target/debug/rumour -h
A CLI tool for running requests

Usage: rumour <COMMAND>

Commands:
  run     Run a request or a directory of requests
  doc     Generate Markdown/Mermaid documentation for a workflow
  watch   Watch a directory and re-run requests on file changes
  bench   Benchmark a request or workflow
  vault   Manage encrypted secrets vault
  graph   Generate a dependency graph (Mermaid format)
  import  Import a collection from Postman or Bruno
  export  Export a Rumour workspace to a ZIP file
  help    Print this message or the help of the given subcommand(s)

Options:
  -h, --help     Print help
  -V, --version  Print version
❯ ./rumour/target/debug/rumour run -h
Run a request or a directory of requests

Usage: rumour run [OPTIONS] <PATH>

Arguments:
  <PATH>  Path to the request file or directory

Options:
      --stop-on-fail                 Stop execution on the first failure (only for directories)
      --json                         Output results in JSON format (for UI integration)
  -v, --verbose                      Show detailed execution summary (list of successful, failed, and skipped nodes)
  -t, --trace                        Show full failure details including backend response messages
  -H, --heal                         Show detailed self-healing recovery logs
  -r, --resume                       Resume from a previous execution state if available
  -p, --parallel                     Run requests in parallel using dependency levels
  -X, --hard-heal                    Reconstruct missing resources (404) by re-running creator nodes
  -C, --auto-cleanup                 Automatically delete resources created during this session after completion
  -q, --quiet                        Suppress all output except the final summary
      --data <DATA>                  Path to a CSV or JSON file for data-driven testing (iterates the run for each row)
      --junit <JUNIT>                Save execution results to a JUnit XML file (for CI/CD)
      --report                       Open the HTML execution dashboard after completion
  -d, --download-dir <DOWNLOAD_DIR>  Custom directory for downloaded files (overrides /tmp)
  -V, --var <VAR>                    Override a variable (key=value)
      --header <HEADER>              Add or override a header (Name: Value)
  -b, --body <BODY>                  Override the request body
  -E, --extract <EXTRACT>            Override extraction rules (key=json_path)
      --dry-run                      Run in dry-run mode (don't send requests)
      --delay <DELAY>                Delay between requests in milliseconds [default: 0]
  -i, --interactive                  Interactive healing (prompt for action on failure)
  -e, --env-file <ENV_FILE>          Specify a custom environment file
      --vars                         Output variables as KEY=VALUE after execution
      --resources                    Display a resource map (endpoints and methods) involved in the workflow
      --record <RECORD>              Record this session to a snapshot file
      --replay <REPLAY>              Replay from a recorded snapshot file
      --profile                      Show deep performance profiling (DNS, Connect, TLS, TTFB)
  -y, --yes                          Auto-confirm overwrites
  -c, --concurrency <CONCURRENCY>    Max concurrent requests during parallel execution (Default: 20)
  -h, --help                         Print help
```

### Rumour `doc`

```bash
❯ ./rumour/target/debug/rumour doc -h
Generate Markdown/Mermaid documentation for a workflow

Usage: rumour doc [OPTIONS] <PATH>

Arguments:
  <PATH>  Path to the workflow directory

Options:
  -o, --output <OUTPUT>  Output file path (default: README.md) [default: README.md]
  -y, --yes              Auto-confirm overwrites
  -h, --help             Print help

~/Documents/rumour_dev/rumour UIImplementation* ❯
```

### Rumour `watch`

```bash
❯ ./rumour/target/debug/rumour watch -h
Watch a directory and re-run requests on file changes

Usage: rumour watch [OPTIONS] <PATH>

Arguments:
  <PATH>  Path to the request file or directory to watch

Options:
      --stop-on-fail                 Stop execution on the first failure
      --json                         Output results in JSON format
  -v, --verbose                      Show detailed execution summary
  -t, --trace                        Show full failure details
  -H, --heal                         Show self-healing recovery logs
  -p, --parallel                     Run requests in parallel
  -X, --hard-heal                    Reconstruct missing resources (404)
  -C, --auto-cleanup                 Automatically delete resources created during this session
  -q, --quiet                        Suppress all output except the final summary
  -d, --download-dir <DOWNLOAD_DIR>  Custom directory for downloaded files
  -V, --var <VAR>                    Override a variable (key=value)
      --header <HEADER>              Add or override a header (Name: Value)
  -b, --body <BODY>                  Override the request body
  -E, --extract <EXTRACT>            Override extraction rules (key=json_path)
      --dry-run                      Run in dry-run mode (don't send requests)
      --delay <DELAY>                Delay between requests in milliseconds [default: 0]
  -i, --interactive                  Interactive healing (prompt for action on failure)
  -e, --env-file <ENV_FILE>          Specify a custom environment file
      --vars                         Output variables as KEY=VALUE after execution
  -h, --help                         Print help

~/Documents/rumour_dev/rumour UIImplementation* ❯
```

### Rumour `bench`

```bash
Benchmark a request or workflow

Usage: rumour bench [OPTIONS] <PATH>

Arguments:
  <PATH>  Path to the request file or directory

Options:
  -n, --iterations <ITERATIONS>    Number of iterations to run [default: 100]
  -c, --concurrency <CONCURRENCY>  Number of concurrent requests [default: 10]
  -e, --env-file <ENV_FILE>        Specify a custom environment file
  -V, --variable <VARIABLE>        Override variables (key=value)
  -h, --help                       Print help

```

### Rumour `vault`

```bash
Manage encrypted secrets vault

Usage: rumour vault <COMMAND>

Commands:
  set   Store a secret in the vault
  get   Retrieve a secret from the vault
  list  List all keys in the vault
  help  Print this message or the help of the given subcommand(s)

Options:
  -h, --help  Print help
```

### Rumour `graph`

```bash
Generate a dependency graph (Mermaid format)

Usage: rumour graph <PATH>

Arguments:
  <PATH>  Path to the request directory

Options:
  -h, --help  Print help
```

### Rumour `import`

```bash
Import a collection from Postman or Bruno

Usage: rumour import [OPTIONS] --format <FORMAT> --input <INPUT>

Options:
  -f, --format <FORMAT>  Format to import (postman, bruno)
  -i, --input <INPUT>    Path to the source file or directory
  -e, --env <ENV>        Path to the environment file (optional)
  -o, --output <OUTPUT>  Output directory (optional, defaults to current dir)
  -h, --help             Print help

```

### Rumour `export`

```bash
Export a Rumour workspace to a ZIP file

Usage: rumour export [OPTIONS] --input <INPUT> --output <OUTPUT>

Options:
  -i, --input <INPUT>    Path to the Rumour workspace directory
  -o, --output <OUTPUT>  Output ZIP file path
  -y, --yes              Auto-confirm overwrites
  -h, --help             Print help
```

### 1. `run` (The Primary Execution Command)

Used to execute a single request file or an entire directory workflow.

| Flag             | Shorthand | Description                                                       | Example                                       |
| :--------------- | :-------- | :---------------------------------------------------------------- | :-------------------------------------------- |
| `--parallel`     | `-p`      | Run requests in parallel using calculated dependency levels.      | `rumour run ./suite -p`                       |
| `--heal`         | `-H`      | Enable autonomous self-healing (re-auth, persona switching).      | `rumour run ./suite -H`                       |
| `--hard-heal`    | `-X`      | Re-run "creator" nodes if a 404 is encountered (Hard Healing).    | `rumour run ./suite -X`                       |
| `--resume`       | `-r`      | Resume from the last failed state in `.rumour/state.json`.        | `rumour run ./suite -r`                       |
| `--auto-cleanup` | `-C`      | Automatically delete resources created during this session.       | `rumour run ./suite -C`                       |
| `--stop-on-fail` |           | For directories: halt all execution immediately on first failure. | `rumour run ./suite --stop-on-fail`           |
| `--json`         |           | Output execution results in JSON format (for UI/Tools).           | `rumour run test.toml --json`                 |
| `--verbose`      | `-v`      | Show detailed execution summary and variable updates.             | `rumour run test.toml -v`                     |
| `--trace`        | `-t`      | Show full backend response bodies on failure.                     | `rumour run test.toml -t`                     |
| `--quiet`        | `-q`      | Suppress all output except the final summary.                     | `rumour run ./suite -q`                       |
| `--data`         |           | Path to a CSV or JSON file for data-driven iteration.             | `rumour run test.toml --data users.csv`       |
| `--junit`        |           | Save execution results to a JUnit XML file for CI/CD.             | `rumour run ./suite --junit report.xml`       |
| `--report`       |           | Automatically open the HTML Dashboard after completion.           | `rumour run ./suite --report`                 |
| `--download-dir` | `-d`      | Custom directory for downloaded files (overrides `/tmp`).         | `rumour run ./files -d ./downloads`           |
| `--var`          | `-V`      | Override or provide a variable (Key=Value).                       | `rumour run test.toml -V env=prod`            |
| `--header`       |           | Add or override a header (Name: Value).                           | `rumour run test.toml --header "X-Custom: 1"` |
| `--body`         | `-b`      | Override the entire request body string.                          | `rumour run test.toml -b '{"id":1}'`          |
| `--extract`      | `-E`      | Override extraction rules (Key=JSONPath).                         | `rumour run test.toml -E token=body.jwt`      |
| `--dry-run`      |           | Validate graph and variables without sending any requests.        | `rumour run ./suite --dry-run`                |
| `--delay`        |           | Milliseconds to wait between requests.                            | `rumour run ./suite --delay 1000`             |
| `--interactive`  | `-i`      | Prompt the user for action/values on every failure.               | `rumour run ./suite -i`                       |
| `--env-file`     | `-e`      | Specify a custom environment TOML file.                           | `rumour run test.toml -e prod.env.toml`       |
| `--vars`         |           | Print a table of all variables involved in the workflow.          | `rumour run ./suite --vars`                   |
| `--resources`    |           | Display a map of all API endpoints involved in the workflow.      | `rumour run ./suite --resources`              |
| `--record`       |           | Record the session execution to a snapshot file.                  | `rumour run ./suite --record snap.json`       |
| `--replay`       |           | Replay execution from a snapshot file (Mocking).                  | `rumour run ./suite --replay snap.json`       |
| `--profile`      |           | Deep performance profiling (DNS, Connect, TLS, TTFB).             | `rumour run test.toml --profile`              |
| `--concurrency`  | `-c`      | Max concurrent requests during parallel execution (Default: 20)   | `rumour run ./data/master_suite/ -p -c 50`    |
| `--yes`          | `-y`      | Auto-confirm overwrites and skip interactive prompts.             | `rumour run ./suite -y`                       |

### 2. `watch` (Hot-Reloading Mode)

Automatically re-runs requests whenever a file in the directory changes.

| Flag             | Shorthand | Description                      |
| :--------------- | :-------- | :------------------------------- |
| `--stop-on-fail` |           | Halt execution on first failure. |
| `--json`         |           | JSON output mode.                |
| `--verbose`      | `-v`      | Detailed summary.                |
| `--trace`        | `-t`      | Full failure details.            |
| `--heal`         | `-H`      | Self-healing recovery logs.      |
| `--parallel`     | `-p`      | Parallel execution.              |
| `--hard-heal`    | `-X`      | Reconstruct missing resources.   |
| `--auto-cleanup` | `-C`      | Auto-delete created resources.   |
| `--quiet`        | `-q`      | Minimal output.                  |
| `--download-dir` | `-d`      | Custom download path.            |
| `--var`          | `-V`      | Variable overrides.              |
| `--header`       |           | Header overrides.                |
| `--body`         | `-b`      | Body overrides.                  |
| `--extract`      | `-E`      | Extraction overrides.            |
| `--dry-run`      |           | Skip actual requests.            |
| `--delay`        |           | Inter-request delay (ms).        |
| `--interactive`  | `-i`      | Prompt for action on failure.    |
| `--env-file`     | `-e`      | Custom environment file.         |
| `--vars`         |           | Print variable table.            |

### 3. `bench` (Performance Benchmarking)

High-concurrency load testing for a single request or workflow.

| Flag            | Shorthand | Description                                | Example                               |
| :-------------- | :-------- | :----------------------------------------- | :------------------------------------ |
| `--iterations`  | `-n`      | Total number of iterations (Default: 100). | `rumour bench test.toml -n 5000`      |
| `--concurrency` | `-c`      | Number of parallel threads (Default: 10).  | `rumour bench test.toml -c 100`       |
| `--env-file`    | `-e`      | Custom environment file for the benchmark. | `rumour bench test.toml -e bench.env` |
| `--variable`    | `-V`      | Variable overrides (Key=Value).            | `rumour bench test.toml -V cpu=high`  |

### 4. `vault` (Secret Management)

Manage encrypted credentials using a master password.

| Action | Flag                | Description                                   | Example                           |
| :----- | :------------------ | :-------------------------------------------- | :-------------------------------- |
| `set`  | `-p` / `--password` | Master password (or use `RUMOUR_VAULT_PASS`). | `rumour vault set key val -p 123` |
| `set`  | `-y` / `--yes`      | Auto-confirm overwrite if key exists.         | `rumour vault set key val -y`     |
| `get`  | `-p` / `--password` | Password to decrypt the secret.               | `rumour vault get key -p 123`     |
| `list` | `-p` / `--password` | Password to list vault keys.                  | `rumour vault list -p 123`        |

### 5. `doc` & `graph` (Documentation)

| Command | Flag       | Shorthand | Description                                | Example                         |
| :------ | :--------- | :-------- | :----------------------------------------- | :------------------------------ |
| `doc`   | `--output` | `-o`      | Output file path (Default: `README.md`).   | `rumour doc ./suite -o DOCS.md` |
| `doc`   | `--yes`    | `-y`      | Auto-confirm overwrite of the output file. | `rumour doc ./suite -y`         |
| `graph` | (path)     |           | No flags. Prints Mermaid syntax to stdout. | `rumour graph ./suite`          |

### 6. `import` & `export` (Interoperability)

| Command  | Flag       | Shorthand | Description                             | Example                                        |
| :------- | :--------- | :-------- | :-------------------------------------- | :--------------------------------------------- |
| `import` | `--format` | `-f`      | Format (postman or bruno).              | `rumour import -f bruno -i .`                  |
| `import` | `--input`  | `-i`      | Path to source file/dir.                | `rumour import -f postman -i c.json`           |
| `import` | `--env`    | `-e`      | Optional environment file to import.    | `rumour import -f postman -i c.json -e e.json` |
| `import` | `--output` | `-o`      | Output directory (Defaults to current). | `rumour import -f postman -i c.json -o ./src`  |
| `export` | `--input`  | `-i`      | Path to Rumour workspace directory.     | `rumour export -i ./workspace -o b.zip`        |
| `export` | `--output` | `-o`      | Target ZIP file path.                   | `rumour export -i ./workspace -o b.zip`        |
| `export` | `--yes`    | `-y`      | Auto-confirm overwrite of the ZIP file. | `rumour export -i ./workspace -o b.zip -y`     |

`./rumour/target/debug/rumour run ./data/master_suite/ -y`

![alt text](image.png)

`./rumour/target/debug/rumour run ./data/master_suite/ -y -p -c 50`

`./rumour/target/debug/rumour run ./data/master_suite/ -y -p -c 50 -H`
![alt text](image-1.png)

`./rumour/target/debug/rumour run ./data/master_suite/ -y -p -c 50 -H -X`

## Step by step RUNNINGs

```
cargo build --manifest-path rumour/Cargo.toml && ./rumour/target/debug/rumour run ./data/master_suite/auth --replay ./snap.json -S
cargo build --manifest-path rumour/Cargo.toml && ./rumour/target/debug/rumour run ./data/master_suite/auth  -S

```
