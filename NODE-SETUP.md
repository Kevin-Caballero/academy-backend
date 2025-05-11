# Configuración de Node.js para este proyecto

Este proyecto requiere **Node.js versión 20.x o superior**. Hemos configurado el repositorio con varias herramientas para asegurar que todos los desarrolladores utilicen la misma versión.

## Versión de Node.js requerida

- **Node.js**: 20.11.1 (o cualquier versión 20.x o superior)
- **npm**: 10.2.4 (o compatible)

## Verificación automática

Cuando ejecutes `npm install`, automáticamente se verificará tu versión de Node.js. Si no cumple con los requisitos, recibirás instrucciones detalladas para actualizar.

También puedes verificar manualmente ejecutando:

```bash
npm run check:node
```

## Herramientas de gestión de versiones de Node.js

Hemos configurado el repositorio para trabajar con las principales herramientas de gestión de versiones de Node.js:

### 1. Volta (Recomendado)

Volta es una herramienta que funciona en Windows, macOS y Linux, y es la opción recomendada.

**Instalación:**

1. Instala Volta siguiendo las instrucciones en [volta.sh](https://volta.sh/)
2. Volta detectará automáticamente la configuración del proyecto en package.json

```bash
# Instalar Volta
curl https://get.volta.sh | bash  # (o seguir instrucciones en volta.sh para Windows)

# Una vez instalado, solo navega al directorio del proyecto
cd path/to/project

# Volta usará automáticamente la versión correcta de Node.js
node -v  # Debería mostrar v20.11.1
```

### 2. NVM (Node Version Manager)

NVM funciona en macOS, Linux y WSL (Windows Subsystem for Linux).

**Instalación:**

```bash
# Instalar NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# Navegar al directorio del proyecto
cd path/to/project

# NVM detectará el archivo .nvmrc
nvm use
```

### 3. nodenv o asdf

Estas herramientas detectarán el archivo `.node-version` en el repositorio.

## Instalación manual de Node.js

Si prefieres no usar un gestor de versiones, puedes descargar e instalar Node.js 20.11.1 directamente:

1. Visita [Node.js Downloads](https://nodejs.org/dist/v20.11.1/)
2. Descarga e instala la versión adecuada para tu sistema operativo
3. Verifica la instalación con `node -v`

## Compatibilidad con Node.js 18

Si por algún motivo no puedes actualizar a Node.js 20, hemos incluido polyfills que proporcionan compatibilidad básica con Node.js 18. Sin embargo, recomendamos encarecidamente actualizar a Node.js 20 para obtener el mejor rendimiento y evitar problemas.

Para verificar si tu instalación actual es compatible:

```bash
npm run test:node-compatibility
```

## Configuración en CI/CD

Si estás configurando este proyecto en un entorno CI/CD, asegúrate de especificar Node.js 20.x en tu configuración.

**Ejemplo para GitHub Actions:**

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js 20
        uses: actions/setup-node@v3
        with:
          node-version: '20.11.1'
``` 