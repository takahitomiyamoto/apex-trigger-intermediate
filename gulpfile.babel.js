/**
 * @name gulpfile.babel.js
 * @description gulpfile
 */
import { series } from 'gulp';

// init
import upgradeDependencies from './scripts/gulp/init/upgrade-dependencies';
import cleanCache from './scripts/gulp/init/clean-cache';

// gulp tasks
exports.init = series(cleanCache, upgradeDependencies);
