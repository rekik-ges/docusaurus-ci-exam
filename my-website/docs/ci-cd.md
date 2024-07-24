# Configuration de l'Intégration Continue (CI) avec GitHub Actions

mkdir -p .github/workflows
New-Item -Path .github/workflows/ci.yml -ItemType File


mettre ç jour ci.yml:

name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '14'

    - name: Install dependencies
      run: npm install

    - name: Build
      run: npm run build

    - name: Deploy
      if: github.ref == 'refs/heads/main'
      run: npm run deploy