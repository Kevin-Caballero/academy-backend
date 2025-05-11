export default {
  // Configuración de la base de datos
  database: {
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'user',
    password: 'password',
    database: 'mydatabase',
    synchronize: true, // Solo para desarrollo
    logging: true,
  },
  
  // Configuración del servidor
  server: {
    port: 3000,
    environment: 'development',
  },
  
  // Configuración Docker (para comandos)
  docker: {
    mariadbContainer: 'mariadb_container',
    composeFile: 'docker/docker-compose.yml',
  }
}; 