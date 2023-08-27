# Optimización de Programación Dinámica para Mejorar la Fuerza Laboral

![Banner](images/banner.png)

## Autores
- Cristian Camilo Gómez Galvis
  - Correo electrónico: cristian_cam.gomez@correounivalle.edu.co
- Michael Stevens Cárdenas Urbano
  - Correo electrónico: michael.cardenas@correounivalle.edu.co

## Contexto
Este proyecto se centra en la optimización de la fuerza laboral mediante el uso de técnicas de programación dinámica. En una empresa, existen N trabajadores, cada uno con un nivel de rendimiento cuantificado en un arreglo de enteros T. El objetivo es aumentar los niveles de rendimiento agrupando a K trabajadores en grupos consecutivos. Se espera que el mejor trabajador de cada grupo influya positivamente en los demás, mejorando sus rendimientos al nivel del mejor.

El programa determina, en pares, desde qué integrante hasta qué integrante comienza cada grupo. Esto tiene como propósito maximizar la suma total de niveles de rendimiento de todos los trabajadores una vez que los grupos estén formados.

## Ejecución
Para ejecutar el programa, sigue estos pasos:

### Requisitos
- Node.js (versión reciente) instalado.

### Pasos
1. Crea o modifica el archivo `input.txt` en la misma carpeta que `index.js`.
2. En Windows, ejecuta el archivo `start.bat`.
3. En Linux, desde una terminal, navega a la carpeta que contiene `index.js` y ejecuta el comando:
   ```sh
   node ./index.js
