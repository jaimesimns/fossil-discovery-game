#!/usr/bin/env node

import { unlinkSync, existsSync } from 'fs';

console.log('🧹 Cleaning up duplicate files...');

// Remove duplicate App.tsx in root (keep the one in src/)
if (existsSync('App.tsx')) {
  unlinkSync('App.tsx');
  console.log('✅ Removed duplicate App.tsx from root');
}

// Remove duplicate globals.css in styles/ (keep the one in src/)
if (existsSync('styles/globals.css')) {
  unlinkSync('styles/globals.css');
  console.log('✅ Removed duplicate globals.css from styles/');
}

console.log('🎉 Cleanup complete!');