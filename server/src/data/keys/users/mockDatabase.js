// mockDatabase.js
const fs = require('fs');
const path = require('path');
const mockDBPath = path.join(__dirname, '/users.json');

const readMockDatabase = () => {
    return JSON.parse(fs.readFileSync(mockDBPath, 'utf-8'));
};

const writeMockDatabase = (data) => {
    fs.writeFileSync(mockDBPath, JSON.stringify(data, null, 2), 'utf-8');
};

module.exports = { readMockDatabase, writeMockDatabase };
