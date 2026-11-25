---
name: zun-editorial-design
description: >-
  Sistema de diseño editorial minimalista basado en Revista ZUN y oferta-medios
  (papel blanco, tipografía Manrope + DM Mono, un solo acento rojo #FF262A,
  ritmo vertical de 3 pasos y componentes limpios con filetes). Úsalo siempre
  que el usuario pida diseñar, maquetar o extender páginas web, landings de
  servicios, portafolios o medios digitales manteniendo esta línea de diseño.
---

# Sistema de Diseño Editorial ZUN (`zun-editorial-design`)

Línea de diseño nacida en **Revista ZUN** (medio digital cultural en Astro + Strapi) y destilada para páginas de producto/servicios en **oferta-medios**. Combina la calidez y legibilidad del papel editorial con precisión técnica en monoespaciado.

---

## 1. Principios Fundamentales

1. **Papel blanco y tinta nítida**: El lienzo base es blanco puro (`#FFFFFF`), nunca grisáceo por defecto. El contraste lo dan bloques puntuales en **Celeste** (`#F4F6FF`), **Negro** (`#111111`) o **Rojo ZUN** (`#FF262A`).
2. **Dos familias tipográficas, roles estrictos**:
   - **`Manrope`**: Títulos (`h1`–`h4`) y cuerpo de lectura. Títulos siempre en *sentence case* (nunca gritando en mayúsculas sostenidas), con tracking negativo cerrado (`-0.04em` a `-0.05em`) y `text-wrap: balance`.
   - **`DM Mono`**: Etiquetas (`.label`), metadatos (`TAG / FECHA`), autorías, numeración (`01`, `02`), píldoras de navegación y botones CTA. Siempre en `UPPERCASE` con `letter-spacing: 0.1em` (`1.2px` a `12px`).
3. **Piso tipográfico de `12px` (`0.75rem`)**: Ningún texto en pantalla (ni siquiera metadatos, pies de foto o píldoras) baja de `12px`.
4. **Ritmo vertical de 3 pasos (`L = 2 × M`)**:
   - **S** (`20px` móvil / `24px` escritorio): Une una etiqueta (`.label`) con el bloque que presenta.
   - **M** (`24px` móvil / `40px` escritorio): Separa bloques hermanos dentro de una misma sección.
   - **L** (`48px` móvil / `80px` escritorio): Abre un nuevo movimiento o sección. Como `L = 2 × M`, dos secciones con `padding` M que se tocan suman exactamente una L.
5. **Semántica del color en interacciones (Regla de Hover)**:
   - **Rojo (`#FF262A`)** = Acción o destino (enlaces a categorías, tarjetas clicables, píldoras de navegación, botón principal).
   - **Negro (`#111111`)** = Etiqueta informativa sin ruta propia o estado invertido de un CTA primario al hacer hover.
   - **Un solo CTA rojo rectangular (`.cta`) por vista/banda**; las acciones secundarias usan píldoras contorneadas (`.pill`).

---

## 2. Tokens Base (CSS Custom Properties)

Incluye siempre estos tokens en el `:root` del layout principal (junto con la carga de Google Fonts para `Manrope:wght@400;500;600;700;800` y `DM+Mono:wght@400;500`):

```css
:root {
  /* Paleta */
  --bg: #ffffff;
  --blanco-cielo: #f9faff;
  --celeste: #f4f6ff;
  --gris-cielo: #eceff4;
  --borde-card: #8f96b5; /* Filete de tarjetas 0.5px */
  --rojo: #ff262a;       /* Único acento de marca */
  --text: #1f1f1f;       /* Cuerpo de texto */
  --negro: #111111;      /* Títulos fuertes y fondos oscuros */
  --gris: #565656;       /* Metadatos y textos secundarios */
  --line: rgba(0, 0, 0, 0.1);

  /* Ritmo vertical (Móvil por defecto) */
  --gap-s: 20px;
  --gap-m: 24px;
  --gap-l: 48px;

  /* Tipografía */
  --font-display: 'Manrope', sans-serif;
  --font-body: 'Manrope', sans-serif;
  --font-mono: 'DM Mono', monospace;

  /* Layout */
  --container-max: 1120px; /* 1120px para landings de lectura rápida; 1488px para portadas de revista */
  --container-pad: clamp(16px, 4vw, 48px);
}

@media (min-width: 1024px) {
  :root {
    --gap-s: 24px;
    --gap-m: 40px;
    --gap-l: 80px;
  }
}
```

---

## 3. Escala Tipográfica

| Elemento | Fuente | Escritorio | Móvil (`<=768px`) | Peso / Tracking / Interlineado |
| :--- | :--- | :--- | :--- | :--- |
| **`h1`** | `Manrope` | `3.625rem` (`58px`) | `2.75rem`–`3.5rem` | `600`, `line-height: 1.05`, `letter-spacing: -0.04em` |
| **`h2`** | `Manrope` | `3rem` (`48px`) | `2.25rem`–`2.875rem` | `600`, `line-height: 1.15`, `letter-spacing: -0.05em` |
| **`h3`** | `Manrope` | `1.5rem` (`24px`) | `1.25rem` (`20px`) | `500`, `line-height: 1.2`, `letter-spacing: -0.05em` |
| **`h4`** | `Manrope` | `1.125rem` (`18px`) | `1rem` (`16px`) | `600`, `line-height: 1.2`, `letter-spacing: -0.03em` |
| **`.label` / `h5`** | `DM Mono` | `0.875rem` (`14px`) | `0.75rem` (`12px`) | `400`, `line-height: 1.08`, `letter-spacing: 0.1em`, `uppercase` |
| **Meta / `h6`** | `DM Mono` | `0.75rem` (`12px`) | `0.75rem` (`12px`) | `400`, `line-height: 1.08`, `letter-spacing: 0.1em`, `uppercase` |
| **Cuerpo (`p`, `li`)** | `Manrope` | `1.125rem` (`18px`) | `1rem` (`16px`) | `400`, `line-height: 1.55`, medida `48ch`–`65ch` |

> **Convención para `.label` en landings (`oferta-medios`)**: Prefijar las etiquetas de sección con un asterisco (`* El problema`, `* Caso real / Revista ZUN`, `01`–`04` para pasos) en color `var(--gris)`.

---

## 4. Catálogo de Componentes

Para ver el código exacto de los componentes (tanto de **Landings B2B / Servicios** como de **Medios Digitales / Revista ZUN**), consulta:
- [Referencia de Componentes y Patrones UI](./references/components.md)

### Resumen rápido de qué patrón elegir según el caso:
- **Listas de puntos o dolores**: Usa `.rule-list` (sin viñetas, separadas por `border-bottom: 1px solid var(--line)` y `padding: 12px 0`).
- **Procesos o pasos (1 a 4)**: Usa `.steps` (grilla de 4 columnas con `border-top: 1px solid var(--text)` en cada ítem y número `01` en `.label`).
- **Planes / Precios / Tarjetas de texto (`PostTextCard`)**: Borde sutil `0.5px solid #8f96b5`, `border-radius: 8px`, `padding: var(--gap-m)`. El plan destacado cambia a `1px solid var(--text)`. En móvil, las tarjetas de publicaciones pueden colapsar a filas apiladas con divisor inferior.
- **Tarjetas con imagen (`PostImageCard`)**: Miniatura `aspect-ratio: 4/3` con `border-radius: 12px` (sin borde en la tarjeta exterior), línea meta `TAG / FECHA` en `DM Mono`, título `Manrope` con `text-wrap: balance` que pasa a `var(--rojo)` en hover, mientras la tarjeta sube `-4px` y la foto hace zoom `scale(1.06)`.
- **Divisor de sección estilo revista (`.subheader`)**: Filete superior de `0.5px` del que cuelga una pestaña `.subheader-pill` (`border-radius: 0 0 6px 6px`, `DM Mono` `12px`).
- **Carruseles redondeados (`.container-standalone`)**: El redondeo (`28px` escritorio / `20px` móvil) y `clip-path: inset(0 round ...)` van siempre en el contenedor marco y se heredan en el track con `border-radius: inherit`, nunca en cada slide individual.
- **Footer con Wordmark de borde a borde**: Contenedor con `container-type: inline-size` y título en `Manrope` 800 medido en `cqw` con ajuste óptico de sangría izquierda (`margin-left: -0.0676em`).

---

## 5. Reglas de Verificación antes de Entregar

1. **Cero colores huérfanos**: Verifica que ningún color hex esté hardcodeado fuera de los tokens (`--bg`, `--rojo`, `--celeste`, `--negro`, `--text`, `--gris`, `#8f96b5`).
2. **Cero textos menores a `12px`**: Ningún `font-size` puede ser menor a `0.75rem` / `12px`.
3. **Uso correcto de `background-color`**: Cuando animes fondos con `var()`, usa siempre la propiedad explícita `background-color` en lugar del atajo `background`.
4. **Accesibilidad y foco**: Todo elemento interactivo debe conservar `outline: 3px solid var(--rojo); outline-offset: 2px;` en `:focus-visible` y respetar `@media (prefers-reduced-motion: reduce)`.
