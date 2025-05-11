export default {
  // Configuración de la base de datos
  database: {
    type: 'mariadb',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'mydatabase',
    synchronize: false, // Nunca true en producción
    logging: false,
  },
  
  // Configuración del servidor
  server: {
    port: parseInt(process.env.PORT || '3000', 10),
    environment: 'production',
  },
  
  // Configuración Docker (para comandos)
  docker: {
    mariadbContainer: process.env.MARIADB_CONTAINER || 'mariadb_container',
    composeFile: process.env.COMPOSE_FILE || 'docker/docker-compose.yml',
  }
}; 