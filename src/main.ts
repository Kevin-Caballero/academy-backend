// Cargar polyfills primero, antes de importar cualquier otro módulo
import './polyfills';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from '../environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Usa el puerto de la configuración del entorno
  const port = config.server.port;
  
  await app.listen(port);
  console.log(`Aplicación inicializada en modo ${config.server.environment}`);
  console.log(`Servidor escuchando en: http://localhost:${port}`);
}
bootstrap();
