# Configuración de Entornos

Este directorio contiene archivos de configuración para diferentes entornos (desarrollo, producción, pruebas).

## Estructura de archivos

- `index.ts`: Punto de entrada que exporta la configuración según el entorno actual
- `development.ts`: Configuración para entorno de desarrollo
- `production.ts`: Configuración para entorno de producción
- `test.ts`: Configuración para entorno de pruebas

## Cómo funciona

1. El sistema detecta el entorno actual a través de la variable de entorno `NODE_ENV`
2. Se carga el archivo de configuración correspondiente al entorno
3. La configuración se exporta y puede usarse en cualquier parte de la aplicación

## Comandos disponibles

Para facilitar el trabajo con diferentes entornos, se han configurado los siguientes comandos en `package.json`:

### Comandos básicos por entorno

- `npm run dev`: Inicia la aplicación en modo desarrollo con recarga automática
- `npm run prod`: Construye y ejecuta la aplicación en modo producción
- `npm run debug`: Inicia la aplicación en modo depuración

### Comandos de base de datos

- `npm run db:up`: Inicia el contenedor de MariaDB para desarrollo
- `npm run db:down`: Detiene el contenedor de MariaDB para desarrollo
- `npm run db:test:up`: Inicia el contenedor de MariaDB para pruebas
- `npm run db:test:down`: Detiene el contenedor de MariaDB para pruebas

### Comandos completos (base de datos + aplicación)

- `npm run dev:full`: Inicia la base de datos y la aplicación en modo desarrollo
- `npm run prod:full`: Inicia la base de datos y la aplicación en modo producción
- `npm run test:full`: Inicia la base de datos de pruebas y ejecuta las pruebas

## Uso de la configuración

Para importar la configuración en cualquier parte de la aplicación:

```typescript
import config from '../environment';

// Acceder a la configuración de base de datos
const dbConfig = config.database;

// Acceder a la configuración del servidor
const serverConfig = config.server;

// Ejemplo de uso
console.log(`Conectando a la base de datos ${dbConfig.database} en ${dbConfig.host}:${dbConfig.port}`);
```

## Personalización

Para añadir nuevas configuraciones:

1. Añade la propiedad en los archivos de configuración de cada entorno
2. Asegúrate de que la estructura sea consistente en todos los archivos

## Comandos para Docker

Los scripts en package.json ya están configurados para usar diferentes archivos docker-compose según el entorno:

- Desarrollo: `npm run db:up` (usa docker/docker-compose.yml)
- Pruebas: `npm run db:test:up` (usa docker/docker-compose.test.yml) 