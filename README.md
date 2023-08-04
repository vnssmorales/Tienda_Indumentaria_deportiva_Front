# Tienda de indumentaria deportiva Grupo 1

### Stack
Mongo Express ReactJS NodeJS

### Requerimientos
NodeJS, mongoDBCompass, navegador, Postman

### Instrucciones
- Ejecutar MongoDBCompass
- Clonar repositorio https://github.com/vnssmorales/Tienda_Indumentaria_deportiva_Front

- Ejecutar en la terminal, en la ruta raiz del repositorio
```
npm install
npm run dev
```
- Crear usuario en postman en petición **POST**
http://localhost:3100/api/create
y body raw json
```
{
    "nombre": "Paula",
    "apellido": "Gonzalez",
    "email": "paulag@gmail.com",
    "password": "clavePass",
    "rol": "user"
}
```
- Clonar el repositorio https://github.com/vnssmorales/Tienda_Indumentaria_deportiva_Front
- Ejecutar en la terminal, en la ruta raiz del repositorio
```
npm install
npm run dev
```
- Se puede registrar usuario en la ruta relativa /api/productos por petición POST
