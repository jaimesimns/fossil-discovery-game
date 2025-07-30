#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, unlinkSync, rmSync } from 'fs';

console.log('🔧 Running pre-build cleanup and checks...');

try {
  // Clean up duplicate files first
  console.log('🧹 Cleaning up duplicate files...');
  
  if (existsSync('App.tsx')) {
    unlinkSync('App.tsx');
    console.log('✅ Removed duplicate App.tsx from root');
  }

  if (existsSync('styles/globals.css')) {
    unlinkSync('styles/globals.css');
    console.log('✅ Removed duplicate globals.css from styles/');
  }

  // Clean previous build artifacts
  if (existsSync('dist')) {
    rmSync('dist', { recursive: true, force: true });
    console.log('✅ Cleaned previous build artifacts');
  }

  if (existsSync('node_modules/.vite')) {
    rmSync('node_modules/.vite', { recursive: true, force: true });
    console.log('✅ Cleaned Vite cache');
  }

  // Verify required files exist
  console.log('🔍 Verifying required files...');
  const requiredFiles = [
    'src/App.tsx',
    'src/main.tsx', 
    'src/globals.css',
    'index.html',
    'package.json',
    'vite.config.ts',
    'components/FossilCard.tsx',
    'components/FossilGallery.tsx',
    'components/PaleontologyBackground.tsx',
    'data/fossils.ts'
  ];

  for (const file of requiredFiles) {
    if (!existsSync(file)) {
      throw new Error(`Required file missing: ${file}`);
    }
  }

  console.log('✅ All required files present');

  // Check if key UI components exist
  const uiComponents = [
    'components/ui/button.tsx',
    'components/ui/input.tsx',
    'components/ui/badge.tsx'
  ];

  for (const component of uiComponents) {
    if (!existsSync(component)) {
      console.warn(`⚠️  Warning: UI component missing: ${component}`);
    }
  }

  console.log('🎉 Pre-build cleanup completed successfully!');

} catch (error) {
  console.error('❌ Pre-build failed:', error.message);
  process.exit(1);
}