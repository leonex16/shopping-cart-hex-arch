## Ejemplo

A continuación veremos un caso de uso donde intentaremos plasmar todos estos conceptos sobre una cesta de la compra. Primero desglosaremos las entidades que entran en juego, las cuales tendremos que recuperar de un servicio de terceros vía http:

  * Producto
  * Cesta
  
Por otro lado estas entidades deberán mostrarse al usuario, de manera que pueda interactuar con ellas, por ejemplo: ver los productos y añadirlos a la cesta.

Finalmente añadiremos reglas de negocio, como por ejemplo, evitar añadir dos veces el mismo elemento a la cesta.

## Reglas de Negocio
  * Un mismo product, no puede estar repetido en la cesta.


## Conventional Commits

* fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning). :sparkles:
* feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning). :bug:
* BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type. :boom:
* style :art:
* refactor :recycle:

Begin a project. :tada: