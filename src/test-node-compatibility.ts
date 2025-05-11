// Importar primero los polyfills
import './polyfills';

/**
 * Esta utilidad verifica que todas las características de Node.js necesarias 
 * para el proyecto estén disponibles, incluyendo los polyfills.
 */

// Función para verificar disponibilidad de características
function checkFeatureAvailability() {
  console.log('\n===== VERIFICACIÓN DE COMPATIBILIDAD DE NODE.JS =====\n');
  
  // Verificar versión de Node.js
  const nodeVersion = process.versions.node;
  const majorVersion = parseInt(nodeVersion.split('.')[0], 10);
  
  console.log(`Versión de Node.js: ${nodeVersion}`);
  console.log(`Versión mayor: ${majorVersion}`);
  console.log(`Recomendado: >= 20, Actual: ${majorVersion >= 20 ? '✅ Compatible' : '⚠️ Puede requerir polyfills'}\n`);
  
  // Verificar crypto global
  if (typeof global.crypto !== 'undefined') {
    console.log('API Crypto global: ✅ Disponible');
    
    // Verificar métodos específicos
    if (typeof global.crypto.randomUUID === 'function') {
      console.log('  - crypto.randomUUID(): ✅ Disponible');
      // Probar la función
      try {
        const uuid = global.crypto.randomUUID();
        console.log(`    Ejemplo de UUID: ${uuid}`);
      } catch (e) {
        console.error('    ❌ Error al generar UUID:', e);
      }
    } else {
      console.log('  - crypto.randomUUID(): ❌ No disponible');
    }
    
    if (typeof global.crypto.getRandomValues === 'function') {
      console.log('  - crypto.getRandomValues(): ✅ Disponible');
      // Probar la función
      try {
        const array = new Uint8Array(10);
        global.crypto.getRandomValues(array);
        console.log(`    Ejemplo de valores aleatorios: ${array}`);
      } catch (e) {
        console.error('    ❌ Error al generar valores aleatorios:', e);
      }
    } else {
      console.log('  - crypto.getRandomValues(): ❌ No disponible');
    }
    
    if (typeof global.crypto.subtle !== 'undefined') {
      console.log('  - crypto.subtle: ✅ Disponible');
    } else {
      console.log('  - crypto.subtle: ❌ No disponible');
    }
  } else {
    console.log('API Crypto global: ❌ No disponible (fallo del polyfill)');
  }
  
  console.log('\n===== FIN DE LA VERIFICACIÓN =====\n');
  
  // Resumen
  if (majorVersion >= 20 || typeof global.crypto !== 'undefined') {
    console.log('✅ Tu entorno parece ser compatible con este proyecto.');
    if (majorVersion < 20) {
      console.log('⚠️ Estás usando Node.js < 20, pero los polyfills están funcionando correctamente.');
      console.log('   Para mejor soporte, considera actualizar a Node.js 20+.');
    }
  } else {
    console.log('❌ Tu entorno NO es compatible con este proyecto.');
    console.log('   Por favor actualiza a Node.js 20+ o verifica la instalación de los polyfills.');
  }
}

// Ejecutar verificación
checkFeatureAvailability(); 