# shell/Dockerfile
# Usa una imagen base de Node.js
FROM node:18 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Construye la aplicación
RUN npm run build

#Usando imagen de nginx
FROM nginx:1.14.2-alpine

#Eliminando los archivos de configuracion por defecto del nginx server
RUN rm /etc/nginx/conf.d/default.conf

# Copiando archivos de configuracion
COPY default.conf /etc/nginx/conf.d/

# Copia los archivos construidos al servidor Nginx
COPY --from=build /app/dist/shell /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 4200

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]