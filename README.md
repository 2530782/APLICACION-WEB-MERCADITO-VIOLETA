# Mercadito Violeta – Directorio de emprendedoras de Tulancingo

**Materia:** Aplicaciones Móviles · **Universidad Politécnica de Tulancingo** · Octubre de 2026

**Integrantes:** Josué Joel Macías Ortega y (nombre de tu compañero o compañera)

## Contexto
Mercadito Violeta es un sitio web ficticio que reúne a mujeres emprendedoras de Tulancingo, Hidalgo, que venden productos hechos a mano.

## Problemática
Muchas emprendedoras locales no tienen un lugar visible donde mostrar sus productos. Dependen del boca a boca y las personas que quieren comprar local no saben dónde buscar.

## Objetivo
Ofrecer un directorio visual y gratuito donde se pueda descubrir negocios por categoría, contactarlos y registrar nuevos emprendimientos.

## Usuarios
- Personas de Tulancingo que quieren comprar productos locales.
- Mujeres emprendedoras que buscan darse a conocer.

## Framework y justificación
**Bootstrap 5.3.** Ofrece rejilla responsiva (computadora, tableta y teléfono), barra de navegación colapsable, acordeón, formularios con validación y alertas, lo que ahorra tiempo para dedicarlo a la personalización. Se personalizó con variables CSS, tipografías Young Serif y Nunito, una paleta violeta, fucsia, mango y turquesa, botones tipo píldora y un toldo de mercado hecho con CSS.

## Páginas
- **index.html:** portada, cómo funciona, negocios destacados y razón del sitio.
- **emprendedoras.html:** directorio con filtro por categoría y buscador (JavaScript).
- **nosotras.html:** historia del proyecto, valores y cifras de ejemplo.
- **bazares.html:** calendario de bazares y talleres con filtro por tipo de evento (JavaScript).
- **unete.html:** formulario de registro validado, datos de contacto y preguntas frecuentes.

## Estructura
```
index.html
emprendedoras.html
nosotras.html
bazares.html
unete.html
css/styles.css
js/main.js
assets/img/    (logo y fotos de los negocios; cambia las rutas en el HTML por tus fotos)
assets/fonts/  (Young Serif y Nunito, archivos woff2 locales)
vendor/        (Bootstrap 5.3.3 reducido a lo que usa el sitio, Bootstrap Icons y bootstrap.bundle.js)
```
Todo el sitio funciona sin internet: no depende de CDN ni de Google Fonts, lo que mejora el rendimiento en Lighthouse.
Si agregas una clase de Bootstrap o un icono nuevo que no estén en `vendor/`, hay que volver a generar esos archivos desde la versión completa de Bootstrap.
Abre `index.html` en el navegador. Para publicarlo, sube la carpeta a un repositorio público de GitHub y activa GitHub Pages.


## Créditos de imágenes
Las fotografías provienen de Pexels (licencia de uso libre, no requiere atribución). Algunos autores: Vlada Karpovich, Roman Odintsov, Ramon Hernandez, Alexey Demidov, Studio Ani Raja, Santuraki, Marina M y Seferikalbiye. El logo es propio del proyecto.
