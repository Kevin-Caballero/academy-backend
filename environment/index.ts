import developmentConfig from './development';
import productionConfig from './production';
import testConfig from './test';

// Determinar el entorno actual
const nodeEnv = process.env.NODE_ENV || 'development';

// Elegir la configuración adecuada según el entorno
let config;
switch (nodeEnv) {
  case 'production':
    config = productionConfig;
    break;
  case 'test':
    config = testConfig;
    break;
  default:
    config = developmentConfig;
}

export default config; 