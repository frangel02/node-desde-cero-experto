// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
// Expiration token
// ============================
// 60 min
// 24 h
// 30 days

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// ============================
// SEED Authentication
// ============================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'; 


// ============================
//  Google Client ID
// ============================

process.env.CLIENT_ID = process.env.CLIENT_ID || '219758474264-vh1bibcphgvbc32km508lubtqkanikf1.apps.googleusercontent.com';