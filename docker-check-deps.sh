#!/bin/bash

# Script to check Node.js dependencies in Docker container

echo "Checking Node.js version and dependencies..."

# Build a temporary container to check dependencies
docker build -t rayonweb-deps-check --target builder .

# Run dependency checks
docker run --rm rayonweb-deps-check sh -c "
  echo '=== Node.js Version ===' && 
  node -v &&
  echo '=== NPM Version ===' &&
  npm -v &&
  echo '=== Dependency Check ===' &&
  npm ls &&
  echo '=== Outdated Packages ===' &&
  npm outdated || true
"

echo "Dependency check complete!"
