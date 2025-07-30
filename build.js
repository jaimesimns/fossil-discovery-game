#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync } from 'fs';

console.log('🦴 Starting Fossil Discovery build process...');

try {
  // Check if node_modules exists
  if (!existsSync('node_modules')) {
    console.log('📦 Installing dependencies...');
    execSync('npm ci', { stdio: 'inherit' });
  }

  console.log('🔧 Running type check...');
  execSync('npx tsc --noEmit', { stdio: 'inherit' });

  console.log('🏗️ Building application...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('✅ Build completed successfully!');
  console.log('🚀 Ready for deployment to Netlify');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}