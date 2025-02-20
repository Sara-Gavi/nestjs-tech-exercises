# NestJS Tech Exercises 🚀

Este repositorio contiene una colección de ejercicios prácticos para mejorar mis habilidades en **NestJS**. 📌
🛠️ En este repositorio aprenderé a construir CRUDs con NestJS y otras tecnologías como **TypeORM y MySQL**.
🔥 También trabajaré con **Docker** para la configuración de bases de datos y la gestión del entorno de desarrollo.

# 🐱 CRUD con NestJS, MySQL y TypeORM

Este proyecto CRUD con **NestJS**, **TypeORM** y **MySQL**.

Se puede configurar de dos maneras:

1. **Usar Docker** (sin instalar MySQL en el sistema).
2. **Usar MySQL localmente** (si ya está instalado en la PC).

### ¿Cómo se haría con Docker?

1. Instalar **Docker** y **Docker Compose** desde [https://www.docker.com/get-started](https://www.docker.com/get-started).
2. Crear el archivo `docker-compose.yml` en la raíz del proyecto.
3. docker-compose up -d
4. Configurar la conexión en src/app.module.ts.
