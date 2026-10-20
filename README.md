# Frontend Mentor - QR Code Component Solution (con Modo Oscuro)

Esta es una solución extendida al reto del [QR code component en Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sio38), a la cual le añadí interactividad mediante JavaScript.

## Tabla de contenidos

- [Vista previa](#vista-previa)
- [Enlaces](#enlaces)
- [Características](#características)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Lo que aprendí](#lo-que-aprendí)
- [Autora](#autora)

---

## Vista previa

![Captura de pantalla de la solución](./design/preview.png)

---

## Enlaces

- **URL de la solución en GitHub:** [Repositorio del proyecto](https://github.com/alonsoremedios/PaginasWeb-Practica)
- **Sitio web en vivo (GitHub Pages):** [Ver solución online](https://alonsoremedios.github.io/PaginasWeb-Practica/)

---

## Características

- **Diseño responsivo:** Adaptable tanto a dispositivos móviles como de escritorio.
- **Modo Claro / Modo Oscuro:** Botón interactivo que alterna la paleta de colores de la página y la tarjeta en tiempo real con transiciones suaves.

---

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 (Flexbox, unidades relativas `rem`/`%`, transiciones y variables)
- Metodología BEM para nombres de clases
- JavaScript (ES6+) para manipulación del DOM

---

## Lo que aprendí

Durante este proyecto no solo reforcé el diseño y centrado responsivo, sino que también implementé mis primeras interacciones dinámicas con JavaScript conectadas al DOM.

Conceptos clave reforzados:
- **Maquetación responsiva:** Centrado con Flexbox y control de anchos mediante `max-width` en `rem` para evitar desbordes.
- **Manipulación del DOM:** Selección de elementos con `document.querySelector` y captura de eventos con `addEventListener('click', ...)`.
- **Alternancia de estados:** Uso de `classList.toggle('dark-theme')` para alternar clases dinámicas en el `body`.
- **Transiciones fluidas en CSS:** Aplicación de `transition` sobre propiedades clave (`background-color`, `color`, `box-shadow`) para un cambio de tema suave y sin saltos visuales.

---

## Autora

- GitHub - [@alonsoremedios](https://github.com/alonsoremedios)