// Este archivo proporciona polyfills para características que podrían faltar en versiones anteriores de Node.js

// Si Node.js es menor que la versión 20, añadir soporte para crypto global
if (parseInt(process.versions.node.split('.')[0], 10) < 20) {
  try {
    const crypto = require('crypto');
    // Aseguramos que crypto.randomUUID esté disponible
    if (!crypto.randomUUID) {
      crypto.randomUUID = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      };
    }
    
    // Añadir a global para simulación de Web Crypto API
    Object.defineProperty(global, 'crypto', {
      value: {
        getRandomValues: function(buffer: Uint8Array) {
          return crypto.randomFillSync(buffer);
        },
        randomUUID: crypto.randomUUID,
        // Stub mínimo necesario de la Web Crypto API
        subtle: {
          // Estos stubs pueden extenderse según sea necesario
          digest: function() {
            return Promise.resolve(new ArrayBuffer(0));
          }
        }
      },
      configurable: true
    });
    
    console.log('Polyfill para crypto global aplicado correctamente');
  } catch (e) {
    console.error('Error al aplicar el polyfill para crypto:', e);
  }
} 