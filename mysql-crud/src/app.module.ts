import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Habilitar variables de entorno
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, // puerto correcto de MySQL en Workbench
      username: 'user_crud', // usuario de MySQL
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true, // Carga las entidades automáticamente
      synchronize: true, // Crea y actualiza tablas automáticamente NO USAR EN PRODUCCION)
    }),
    CatsModule, // Módulo de ejemplo del tutorial
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
