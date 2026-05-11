#!/bin/bash
find data/master_suite -name "*.toml" | grep -v "_collection.toml" | grep -v ".env.toml" | sort | while read -r file; do
    rel_path=${file#data/master_suite/}
    echo ""
    echo "## $rel_path"
    echo ""
    echo "### File Content"
    echo ""
    echo '```toml'
    cat "$file"
    echo '```'
    echo ""
    echo "### Execution Log"
    echo ""
    echo '```bash'
    echo "❯ ./rumour/target/debug/rumour run $file"
    ./rumour/target/debug/rumour run "$file" | grep -v "::NODE_"
    echo '```'
    echo ""
    echo "---"
done
