# Contribuciones a ASEIC
Bienvenidos y gracias por su interés en contribuir al sitio de la ASEIC. 

Hay muchas maneras en la que se puede contribuir, además de escribir código. El propósito de este documento is proveer información de cómo te puedes involucrar.

## Hacer preguntas
¿Tienes una pregunta? En vez de abrir un nuevo issue, puedes hablar con cualquier miembro de la [junta directiva](representacion_estudiantil.md#junta-directiva) o utilizar cualquiera de los [medios de contacto](aseic.md#contacto) disponibles.

## Proveer Feedback
Tus comentarios y feedback son bienvenidos, y son súper importantes para el desarrollo de la comunidad. En el [formulario de sugerencias](https://forms.gle/YDFFxy35NmMeKrTUA) puedes enviar tus comentarios. Además, cualquier medio disponible en el apartado de [contacto](aseic.md#contacto) puede utilizarse para este fin.

## Reglas para Contribuir
Hay muchas formas de contribuir al sitio de ASEIC: registrar errores, enviar PRs, informar problemas y crear sugerencias.

Antes de contribuir debe leer las siguientes reglas para que sus aportes puedan incluirse y sean valiosos para la comunidad.

1. Para crear un aporte utilice los issues o Pull Requests (PR) de GitHub, así se podrá discutir su idea con otras personas y facilitará el proceso de aprobación.

2. Cuando agregue un commit siga las [convenciones](#convenciones-de-formato-para-commits) descritas en este apartado. De esta manera se mantendrá un historial que permitirá a otras personas entender mejor los cambios y los motivos de estos.

Este sitio está contruido con [mdbook](https://github.com/rust-lang/mdBook), una herramienta para generar páginas web a partir de documentos en formato [Markdown](https://en.wikipedia.org/wiki/Markdown). Se recomienda que se familiarice al menos con el formato markdown para que sus aportes puedan ser renderizados correctamente.

Para crear una sección basta con crear un archivo con un nombre descriptivo pero conciso de lo que contendrá dicha sección. Una vez creado puede agregarlo al documento `SUMMARY.md` para que se muestre dicha sección en el menú lateral.

Después de clonar y compilar el repositorio, consulte la lista de issues. Los issues etiquetados como "ayuda requerida" son buenos problemas para enviar un PR. Los problemas etiquetados como "issue de inicio" son excelentes candidatos para retomar si está en el código por primera vez. Si está contribuyendo con cambios significativos, o si el problema ya está asignado a un issue específico, hable primero con el asignado del problema antes de comenzar a trabajar en él.

### Convenciones de formato para commits

Todos los commits deben seguir la siguiente estructura:

```
<tipo>: <descripción>

[cuerpo opcional]
```

Se recomienda que la primera línea no pase los 52 caracteres para que se presente correctamente los commits en GitHub y otras herramientas.

#### Tipo

El tipo proporciona contexto al commit. Se refiere a la intención del commit. Por ejemplo, ¿El commit agrega nuevo contenido? ¿El commit mejora el estilo de alguna sección? ¿El commit reordena la información?

Se pueden utilizar los siguientes tipos:

- **cambio**: Modifica el contenido de alguna sección del sitio, ya sea para reemplazar información desactualizada, errónea o mejor escrita.
- **nuevo**: Agrega información nueva al sitio, ya sea secciones o información que antes no se mencionaba.
- **estilo**: Se refiere a cambios en la apariencia del sitio, ya sea colores u organización de elementos.
- **borrado**: Se refiere a eliminación de información o secciones que no son útiles o están erradas.
- **tech**: Se refiere a cambios en las herramientas utilizadas en el sitio, ya sea modificación de dependencias o configuración.

### Cuerpo

Esta sección es para describir más detalles acerca del commit, enfocado en el motivo para realizar el cambio. Debe ir lo mejor redactada posible de manera que otros contribuyentes puedan entender los commits mejor viendo el historial.

También se pueden agregar referencias a issues o PR para mantener una relación con las discusiones de la comunidad.


### Ejemplos

Algunos ejemplos de buenos mensajes de commit serían los siguientes:

```
cambio: Reemplaza procedimiento de inclusiones
```

```
nuevo: Agrega sección proyectos de investigación
```

```
tech: Agrega módulo para generar RSS feeds

Se agregó este módulo para generar feeds de la sección de proyectos.
```