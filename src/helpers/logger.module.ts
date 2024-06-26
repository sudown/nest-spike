import { Module, Global } from '@nestjs/common';
import * as winston from 'winston';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'src/logs/error.log',
    level: 'error',
  }),
  new winston.transports.File({
    filename: 'src/logs/warn.log',
    level: 'warn',
  }),
  new winston.transports.File({ filename: 'src/logs/all.log' }),
];

const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

@Global()
@Module({
  providers: [
    {
      provide: 'Logger',
      useValue: logger,
    },
  ],
  exports: ['Logger'],
})
export class LoggerModule {}
