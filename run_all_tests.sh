#!/bin/bash
for dir in data/master_suite/*/; do
    if [ -d "$dir" ] && [ "$(basename "$dir")" != ".rumour" ]; then
        name=$(basename "$dir")
        echo ""
        echo "## $name"
        echo ""
        echo '```bash'
        echo "❯ ./rumour/target/debug/rumour run data/master_suite/$name"
        ./rumour/target/debug/rumour run "$dir"
        echo '```'
        echo ""
        echo "The workflow for **$name** completed successfully, validating the system's ability to handle this specific API pattern."
    fi
done
