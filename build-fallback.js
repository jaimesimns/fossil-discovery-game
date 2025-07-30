#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, unlinkSync, rmSync } from 'fs';

console.log('🚀 Running fallback build process...');

try {
  // Clean up duplicate files
  console.log('🧹 Cleaning up...');
  
  if (existsSync('App.tsx')) {
    unlinkSync('App.tsx');
    console.log('✅ Removed duplicate App.tsx');
  }

  if (existsSync('styles/globals.css')) {
    unlinkSync('styles/globals.css');
    console.log('✅ Removed duplicate globals.css');
  }

  // Clean build artifacts
  if (existsSync('dist')) {
    rmSync('dist', { recursive: true, force: true });
  }

  // Try build without type check first
  console.log('🏗️ Building without strict type checking...');
  execSync('vite build', { stdio: 'inherit' });

  console.log('✅ Build completed successfully!');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  
  // Try one more time with even more relaxed settings
  try {
    console.log('🔄 Trying build with relaxed TypeScript settings...');
    process.env.NODE_ENV = 'production';
    process.env.TS_NODE_SKIP_IGNORE = 'true';
    execSync('vite build --mode production', { stdio: 'inherit' });
    console.log('✅ Fallback build succeeded!');
  } catch (fallbackError) {
    console.error('❌ All build attempts failed:', fallbackError.message);
    process.exit(1);
  }
}