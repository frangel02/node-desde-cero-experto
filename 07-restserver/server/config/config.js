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


