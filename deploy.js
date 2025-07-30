#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, unlinkSync, rmSync, readFileSync } from 'fs';

console.log('🚀 Starting Netlify deployment process...');

try {
  // Step 1: Clean environment
  console.log('🧹 Step 1: Cleaning environment...');
  
  // Remove duplicate files
  if (existsSync('App.tsx')) {
    unlinkSync('App.tsx');
    console.log('✅ Removed duplicate App.tsx');
  }

  if (existsSync('styles/globals.css')) {
    unlinkSync('styles/globals.css');
    console.log('✅ Removed duplicate globals.css');
  }

  // Clean build cache
  if (existsSync('dist')) {
    rmSync('dist', { recursive: true, force: true });
  }
  
  if (existsSync('node_modules/.vite')) {
    rmSync('node_modules/.vite', { recursive: true, force: true });
  }

  // Step 2: Verify project structure
  console.log('🔍 Step 2: Verifying project structure...');
  
  const criticalFiles = [
    'src/App.tsx',
    'src/main.tsx',
    'src/globals.css',
    'package.json',
    'vite.config.ts',
    'index.html'
  ];

  for (const file of criticalFiles) {
    if (!existsSync(file)) {
      throw new Error(`Critical file missing: ${file}`);
    }
  }

  console.log('✅ All critical files found');

  // Step 3: Install dependencies
  console.log('📦 Step 3: Installing dependencies...');
  execSync('npm ci --prefer-offline --no-audit --no-fund', { stdio: 'inherit' });

  // Step 4: Build the project
  console.log('🏗️ Step 4: Building project...');
  try {
    execSync('vite build', { stdio: 'inherit' });
  } catch (buildError) {
    console.warn('⚠️ Regular build failed, trying fallback...');
    execSync('vite build --mode production', { stdio: 'inherit' });
  }

  // Step 5: Verify build output
  console.log('✅ Step 5: Verifying build output...');
  if (!existsSync('dist/index.html')) {
    throw new Error('Build failed: dist/index.html not found');
  }

  console.log('🎉 Deployment build completed successfully!');
  console.log('📂 Build output available in: dist/');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}