import { DataSource, DataSourceOptions } from 'typeorm';
import config from '../environment';

// Obtiene la configuración de base de datos del archivo de configuración del entorno
export const dataSourceOptions: DataSourceOptions = {
  type: config.database.type as any,
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  synchronize: config.database.synchronize,
  logging: config.database.logging,
};

// Crea una nueva instancia de DataSource para ser usada por TypeORM CLI
const dataSource = new DataSource(dataSourceOptions);
export default dataSource; 