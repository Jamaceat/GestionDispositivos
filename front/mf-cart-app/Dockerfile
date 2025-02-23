FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.14.2-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d/

COPY --from=build /app/dist/mf-cart-app /usr/share/nginx/html

EXPOSE 4201

CMD ["nginx", "-g", "daemon off;"]