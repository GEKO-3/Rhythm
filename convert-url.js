// Convert Base64 to hex array format for config.js
const base64String = 'aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZE5wTFRDaDg4UmZLckZGR0YzemJvZ1NZZEtMRHZ0azJaempGbGp4SkZLVVZ2cUp3L2Zvcm1SZXNwb25zZQ==';

// Convert each character to hex
const hexArray = [];
for (let i = 0; i < base64String.length; i++) {
    const charCode = base64String.charCodeAt(i);
    const hex = '0x' + charCode.toString(16);
    hexArray.push(hex);
}

console.log('New hex array for correct Google Form URL:');
console.log(JSON.stringify(hexArray));
console.log('\nFormatted for config.js:');
console.log('[' + hexArray.map(h => `"${h}"`).join(',') + ']');
