# Indumentaria deportiva - Trabajo práctico MindHub - Accenture

### Stack
<p align="left"> 
<a href="https://nodejs.org/" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
</a> 
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
</a> 
<a href="https://vitejs.dev/" target="_blank" rel="noreferrer"> 
<img src="https://vitejs.dev/logo.svg" alt="vite" width="40" height="40"/> 
</a> 
<a href="https://nextjs.org/" target="_blank" rel="noreferrer"> 
<img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="nextjs" width="40" height="40"/> 
</a> 
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> 
</a> 
</p>


### Requerimientos
NodeJS, mongoDBCompass, navegador, Postman

### Instrucciones
1. Seguir los pasos del [siguiente repositorio](https://github.com/BarbaraCarvajal/indumentaria-deportiva-backend/tree/master)
2. Ya que ya tienes andando el backend ahora debes clonar el repositorio en que nos encontramos [acá mismo](https://github.com/vnssmorales/Tienda_Indumentaria_deportiva_Front/tree/main)

3. Ejecutar en la terminal, en la ruta raiz del repositorio
```
npm install
npm run dev
```
4. Crear usuario en postman en petición **POST** 
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
si no lo quieres usar tenemos a disposición 2 usuarios previamente creados:
user@mail.com contraseña: clave123
admin@mail.com contraseña: admin123 -> con este usuario puedes editar y eliminar productos


5. ¡Listo! Ya puedes usar La Tuki tienda
