# Respuestas de la Práctica 1

**Paso 2: Error de JavaScript**
* **¿Hubo algún error o advertencia?** 
  No js no marcó error porque en lugar de hacer una suma matemática, solo juntó el texto y el número

**Paso 3: Node y el compilador**
* **¿Por qué node lo ejecuta si tiene un error de tipos?** 
  Porque Node solo entiende JavaScript puro, las validaciones de TypeScript desaparecen a la hora de ejecutar el código
* **¿Cuál comando revisa y cuál ejecuta?** 
  El comando `npx tsc` es el que revisa los errores y `node` es el que ejecuta el programa

**Paso 4: Variables**
* **De las dos líneas con const, ¿por qué sólo falla una?** 
  Porque `const` no te deja reasignar la variable completa, pero sí te permite modificar lo que hay adentro de un objeto
* **¿De dónde salió el tipo de la variable let?** 
  TypeScript lo dedujo automáticamente basándose en el primer valor que se le guardó

**Paso 6: Tres errores provocados**

* **Error 1 (Línea 24)**
  * **Código:** `prestamo.ejemplar = "quince";`
  * **Mensaje:** `TS2322: Type 'string' is not assignable to type 'number'`
  * **Motivo:** El código esperaba un número, pero le pusimos texto

* **Error 2 (Línea 25)**
  * **Código:** `prestamo.estaado = "perdido";`
  * **Mensaje:** `TS2322: Type '"perdido"' is not assignable to type 'estadoPrestamo'`
  * **Motivo:** Esperaba una de las opciones válidas ("activo", "vencido" o "devuelto"), pero le pusimos "perdido"

* **Error 3 (Línea 26)**
  * **Código:** `const prestamoPrueba : Prestamo = {multa: 150, ejemplar: 14};`
  * **Mensaje:** `TS2741: Property 'estaado' is missing... required in type 'Prestamo'`
  * **Motivo:** Al objeto le faltó incluir la propiedad `estaado` que es obligatoria
