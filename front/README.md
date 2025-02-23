# Arquitectura de Microfrontends

Este proyecto está compuesto por una arquitectura de microfrontends utilizando Module Federation. Cada microfrontend es una aplicación Angular independiente que se integra en una Shell principal.

## Descripción de los Microfrontends

### 1. Shell (Puerto 4200)

*   **Descripción**: La Shell es la aplicación principal que actúa como contenedor para los demás microfrontends. Se encarga de la carga dinámica de los microfrontends y proporciona la estructura general de la aplicación.
*   **Tecnologías**: Angular, Module Federation

### 2. Microfrontend de Productos (mf-product) (Puerto 4201)

*   **Descripción**: Este microfrontend se encarga de gestionar la logica de los productos.
*   **Tecnologías**: Angular, Module Federation

### 3. Microfrontend de Carrito (mf-cart) (Puerto 4202)

*   **Descripción**: Este microfrontend se encarga de mostrar los productos añadidos al carrito y gestionar las acciones relacionadas con el carrito.
*   **Tecnologías**: Angular, Module Federation

## Cómo levantar los microfrontends

Cada microfrontend se ejecuta de forma independiente utilizando la CLI de Angular.

```bash
1.  **Shell:**

cd shell
npm start

2.  **MF-PRODUCT:**

cd mf-product-app
npm start

3.  **MF-CART:**

cd mf-cart-app
npm start
```

## Consideraciones

Para que el proyecto funcione de la manera adecuada se deben levantar todos los mf incluyendo la shell, esto debido a que el proyecto aun se encuentra en desarrollo.