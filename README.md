# Sitio comercial de STX Ingeniería

Este paquete contiene el código editable del sitio público de STX Ingeniería.

## Archivos principales

- `index.html`: contenido y estructura de la página.
- `styles.css`: colores, diseño y adaptación a celulares.
- `script.js`: menú, pestañas, ventanas de servicios y formulario demostrativo.
- `assets/`: logo, fotografías, gráficos y visualizaciones del robot.

## Cómo abrirlo y modificarlo

1. Descomprime la carpeta.
2. Ábrela con Visual Studio Code.
3. Para una vista rápida, abre `index.html` en el navegador.
4. Para actualizar mientras editas, puedes usar la extensión **Live Server** de Visual Studio Code o ejecutar `npx serve .` dentro de esta carpeta.

Node.js no es necesario para cambiar textos, colores o imágenes. Solo facilita la vista local y futuras herramientas de desarrollo.

## Reemplazar las imágenes del robot

Puedes sustituir:

- `assets/robot-base-stx-clean.png`
- `assets/robot-rodillo-stx-clean.png`

Si conservas esos nombres y usas imágenes PNG con fondo transparente, la página se actualizará sin cambiar el HTML. También puedes cambiar las rutas directamente en `index.html`.

## Sitio público y portal de clientes

Este proyecto está pensado como página comercial pública. El futuro portal de clientes debe mantenerse como una aplicación separada, idealmente en un subdominio como `clientes.stxingenieria.cl`, y enlazarse desde el botón **Acceso clientes**. Así el sitio comercial no tendrá que eliminarse ni reconstruirse.

## GitHub

La carpeta puede convertirse en un repositorio Git y subirse a GitHub. Una vez conectado, se pueden revisar y modificar los mismos archivos sin comenzar desde cero.
