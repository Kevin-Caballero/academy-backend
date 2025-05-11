# Requisitos de Node.js y Compatibilidad

## Versiones de Node.js

Este proyecto fue diseñado para funcionar con Node.js v20 o superior debido a las dependencias utilizadas, especialmente los paquetes más recientes de NestJS.

**Versión recomendada:** Node.js v20.x o superior

## Compatibilidad con Node.js 18

Para facilitar la compatibilidad con Node.js 18.x, se han implementado las siguientes soluciones:

1. **Polyfill para crypto global**: Se ha añadido un polyfill en `src/polyfills.ts` que proporciona una implementación de la API de crypto global que es necesaria en algunos paquetes de NestJS.

2. **Cross-env**: Se usa para garantizar que las variables de entorno funcionen correctamente en diferentes sistemas operativos, especialmente en Windows.

## Posibles problemas y soluciones

Si encuentras errores relacionados con `crypto is not defined` u otros problemas de compatibilidad, verifica lo siguiente:

1. Asegúrate de que el polyfill se está cargando correctamente (es importado antes que cualquier otro módulo en `main.ts`).

2. Considera actualizar a Node.js v20 para evitar problemas de compatibilidad.

3. Si los problemas persisten, puede ser necesario downgrade de algunas dependencias:

   ```bash
   # Instalar versiones anteriores de NestJS compatibles con Node.js 18
   npm install @nestjs/typeorm@10.0.0 @nestjs/common@10.0.0 @nestjs/core@10.0.0
   ```

## Docker y Compatibilidad

Si utilizas Docker para el desarrollo, puedes especificar la versión de Node.js en tu Dockerfile:

```dockerfile
FROM node:20-alpine

# o para node 18 con los polyfills:
# FROM node:18-alpine
```

## Tests de Compatibilidad

Para verificar que tu entorno es compatible:

```bash
npm run test:node-compatibility
```

Este comando ejecutará una prueba simple para verificar que las características necesarias están disponibles. 