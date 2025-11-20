# Lookscout Project – Gulp Build System

This project implements a full Gulp-based build system as required in the lab assignment.
The goal was to automate the workflow for a standard HTML/CSS/JavaScript project and optimize
performance using Gulp tasks.

## Why Gulp?

Gulp was selected because the project uses:

- Standard JavaScript files (no ES6 import/export)
- Simple static structure (HTML + CSS + JS)
- A need for clean automation (concatenation, minification, file copying)
- Gulp is ideal for small and medium projects due to its fast, stream-based architecture

## Setup & Installation

1. Initialize the Project:
   npm init -y
2. Install Gulp:
   npm install -g gulp-cli
   npm install gulp --save-dev
3. Install Build Dependencies:
   npm install gulp-concat gulp-terser gulp-clean-css --save-dev

## Gulpfile Configuration

Tasks include:

- js ® concatenation + minification
- css ® concatenation + minification
- html ® copying HTML files to dist
- images ® copying image assets
- default ® runs all tasks in parallel

## Running the Build

Execute:
gulp

## Performance Optimizations

- Lazy Loading for Images

## Project Structure

Lookscout/
nnn src/
n nnn css/
n nnn js/
n nnn images/
n nnn index.html
nnn dist/
nnn gulpfile.js
nnn package.json
nnn README.md
