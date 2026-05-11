#!/bin/bash

echo "🚀 Initializing Master Test Suite Generation..."

# Ensure generators are executable
chmod +x generators/*.sh

# Run all generators
for script in generators/gen_*.sh; do
    echo "🛠️ Running $(basename $script)..."
    bash "$script"
done

echo ""
echo "✨ MASTER SUITE READY ✨"
echo "Location: data/master_suite/"
echo "Total Topics Generated: $(ls data/master_suite/ | wc -l)"
