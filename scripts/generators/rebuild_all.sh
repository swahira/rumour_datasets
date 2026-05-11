#!/bin/bash

echo "🚀 Initializing Master Test Suite Generation..."

# Ensure generators are executable
chmod +x ./*.sh

# Run all generators
for script in ./gen_*.sh; do
    if [ "$(basename "$script")" != "rebuild_all.sh" ]; then
        echo "🛠️ Running $(basename "$script")..."
        bash "$script"
    fi
done

echo ""
echo "✨ MASTER SUITE READY ✨"
echo "Location: ../../master_suite/"
echo "Total Topics Generated: $(ls ../../master_suite/ 2>/dev/null | wc -l)"
