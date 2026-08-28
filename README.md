# Respuestas - Práctica 1: Descubriendo TypeScript

### Paso 2: Escribir el error de JavaScript
* **¿Hubo algún error, alguna advertencia o algo en la consola que avisara?** 
  No javaScript simplemente concatenó el numero y el texto en lugar de sumarlos matemáticamente.

### Paso 3: Anotar el tipo
* **Si el archivo tiene un error de tipos, ¿por qué node lo ejecuta?** 
  Porque las anotaciones de typeScript desaparecen en tiempo de ejecución y node solo corre JavaScript puro.
* **¿Cuál comando revisa y cuál ejecuta?** 
  El comando `npx tsc` revisa los errores de tipo y el comando `node` ejecuta el archivo.

### Paso 4: Declarar variables
* **De las dos líneas que usan const, ¿por qué sólo una falla?** 
  Porque `const` prohíbe reasignar la variable por completo, pero sí permite modificar las propiedades internas de un objeto.
* **Al asignarle un texto a la variable con let, nadie escribió que fuera un número. ¿De dónde salió ese tipo?** 
  Por inferencia de tipos, typeScript lo dedujo automáticamente por el primer valor que se le asigno.

### Paso 6: Provocar tres errores distintos

* **Error 1:**
  * **Codigo:** `prestamo.ejemplar = "quince";`
  * **Mensaje:** `TS2322: Type 'string' is not assignable to type 'number'.`
  * **Analisis:** El compilador esperaba un valor de tipo `number`, pero recibió una cadena de texto (`string`) en la línea 24.

* **Error 2:**
  * **Codigo:** `prestamo.estaado = "perdido";`
  * **Mensaje:** `TS2322: Type '"perdido"' is not assignable to type 'estadoPrestamo'.`
  * **Analisis:** El compilador esperaba uno de los estados válidos definidos en el tipo ("activo", "vencido" o "devuelto"), pero recibió el valor "perdido" en la línea 25.

* **Error 3:**
  * **Codigo:** `const prestamoPrueba : Prestamo = {multa: 150, ejemplar: 14};`
  * **Mensaje:** `TS2741: Property 'estaado' is missing in type '{ multa: number; ejemplar: number; }' but required in type 'Prestamo'.`
  * **Analisis:** El compilador esperaba un objeto que incluyera todas las propiedades obligatorias de la interfaz `Prestamo`, pero recibió un objeto al que le falta la propiedad requerida `estaado` en la línea 26.
