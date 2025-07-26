const base64 = 'aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZE5wTFRDaDg4UmZLckZGR0YzemJvZ1NZZEtMRHZ0azJaempGbGp4SkZLVVZ2cUp3L2Zvcm1SZXNwb25zZQ==';
const hexArray = base64.split('').map(c => '"0x' + c.charCodeAt(0).toString(16) + '"');
console.log('[' + hexArray.join(',') + ']');
