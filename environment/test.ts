export default {
  // Configuración de la base de datos
  database: {
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'user',
    password: 'password',
    database: 'mydatabase_test',
    synchronize: true,
    logging: false,
    dropSchema: true, // Para tests limpios
  },
  
  // Configuración del servidor
  server: {
    port: 3001, // Puerto diferente para evitar colisiones con desarrollo
    environment: 'test',
  },
  
  // Configuración Docker (para comandos)
  docker: {
    mariadbContainer: 'mariadb_container_test',
    composeFile: 'docker/docker-compose.test.yml', // Se podría crear uno específico para tests
  }
}; 