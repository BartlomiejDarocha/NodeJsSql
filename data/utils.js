'use strict'
const fs = require('fs-extra');
const {join} = require('path');

const loadSqlQueries = async (folderName) => {
  const filePath = join(process.cwd(), 'data', folderName);
  const files = await fs.readdir(filePath);
  const sqlFiles = await files.filter(file => file.endsWith('.sql')); 
}