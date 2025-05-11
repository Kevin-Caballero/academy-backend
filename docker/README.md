# Configuración de MariaDB con Docker Compose

Este proyecto incluye una configuración de Docker Compose para ejecutar MariaDB en un contenedor.

## Requisitos previos

- Docker y Docker Compose instalados en tu sistema

## Estructura de archivos

- `docker-compose.yml`: Configuración principal para MariaDB

## Variables de configuración

La configuración usa las siguientes variables que puedes modificar en el archivo `docker-compose.yml`:

- `MYSQL_ROOT_PASSWORD`: Contraseña del usuario root (actualmente: rootpassword)
- `MYSQL_DATABASE`: Nombre de la base de datos a crear (actualmente: mydatabase)
- `MYSQL_USER`: Usuario adicional creado (actualmente: user)
- `MYSQL_PASSWORD`: Contraseña del usuario adicional (actualmente: password)

## Cómo ejecutar

Para facilitar el uso, se han configurado los siguientes comandos en package.json:

1. Inicia los contenedores:
   ```bash
   npm run db:up
   ```

2. Verifica que los contenedores están funcionando:
   ```bash
   docker-compose ps
   ```

3. Conéctate a MariaDB:
   ```bash
   npm run db:connect
   ```

4. Ver logs del contenedor:
   ```bash
   npm run db:logs
   ```

## Detener los contenedores

```bash
npm run db:down
```

## Persistencia de datos

Los datos se guardarán en un volumen Docker llamado `mariadb_data`, por lo que persistirán incluso cuando los contenedores se detengan.

Para eliminar completamente todo, incluyendo los volúmenes:

```bash
docker-compose down -v
```

## Configuración de seguridad

Para entornos de producción, se recomienda:

1. Cambiar todas las contraseñas predeterminadas
2. Limitar el acceso a la red
3. Configurar copias de seguridad regulares 