# Referencia de Componentes: `oferta-medios` + `Revista ZUN`

Esta referencia contiene los bloques reutilizables del sistema de diseño, divididos entre componentes de **Landing / Servicios (`oferta-medios`)** y componentes **Editoriales / Revista (`Revista ZUN`)**.

---

## A. Botones y Píldoras Base

```css
/* Etiqueta monoespaciada (Kicker / H5) */
.label {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.08;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gris);
  margin: 0 0 var(--gap-s);
}
@media (max-width: 768px) {
  .label { font-size: 0.75rem; }
}

/* Píldora de navegación o acción secundaria */
.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 20px;
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text);
  border: 1px solid var(--text);
  border-radius: 100px;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.pill--filled {
  background-color: var(--text);
  color: var(--bg);
}
.pill--light {
  color: #ffffff;
  border-color: #ffffff;
}
.pill:hover,
.pill.active {
  background-color: var(--rojo);
  border-color: var(--rojo);
  color: #ffffff;
}

/* Llamado a la acción principal (1 por pantalla/banda) */
.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 20px 24px;
  border-radius: 6px;
  background-color: var(--rojo);
  color: #ffffff;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}
.cta:hover {
  background-color: var(--negro);
}
```

---

## B. Patrones de Landing y Servicios (`oferta-medios`)

### 1. Lista con filetes (`.rule-list`)
Reemplaza las listas con viñetas tradicionales por filas limpias separadas por filetes horizontales:

```css
.rule-list {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--gap-m);
  max-width: 60ch;
}
.rule-list li {
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}
```

### 2. Tarjetas de Planes o Servicios (`.plans` / `.plan`)
```css
.plans {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap-m);
  margin-top: var(--gap-m);
}
.plan {
  border: 0.5px solid #8f96b5;
  border-radius: 8px;
  padding: var(--gap-m);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.plan.featured {
  border: 1px solid var(--text);
}
.price {
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -0.05em;
  line-height: 1;
  margin-bottom: var(--gap-s);
}
.price span {
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0;
  color: var(--gris);
}
```

### 3. Grilla de Pasos Numerados (`.steps`)
```css
.steps {
  list-style: none;
  padding: 0;
  margin: var(--gap-m) 0 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-m);
}
.steps li {
  border-top: 1px solid var(--text);
  padding-top: var(--gap-s);
}
.steps p:last-child {
  color: var(--gris);
  margin: 0;
}
@media (max-width: 768px) {
  .plans, .steps { grid-template-columns: 1fr; }
}
```

### 4. Bandas de Contraste (`.case` y `.closing`)
- **Banda de Caso de Estudio (`.case`)**: Fondo `var(--celeste)` (`#F4F6FF`), ideal para separar evidencia o demostraciones del fondo blanco sin usar sombras pesadas. Grilla interna asimétrica `grid-template-columns: 1fr 1.4fr`.
- **Banda de Cierre / Auditoría (`.closing`)**: Fondo `var(--negro)` (`#111111`), texto blanco (`#FFFFFF`), `.label` en `rgba(255, 255, 255, 0.6)` y acción en `.pill--light`.

### 5. Marcos de Dispositivo (`BrowserFrame` + `PhoneFrame`) y Marquesina (`Ticker`)
Para mostrar proyectos web en producción (tanto en el Hero como en grillas de portafolio `#trabajos`), se combina un marco de navegador de escritorio (`16 / 10`, barra `.browser-bar` en `--celeste` con el primer punto en `--rojo` y dominio en `DM Mono`) con un marco de teléfono superpuesto (`390 / 844`, `border: 5px solid var(--negro)`, `border-radius: 22px`) ubicado en `position: absolute; right: 0; bottom: 0; width: 28%` que al hacer hover se eleva y rota suavemente (`transform: translateY(-8px) rotate(2deg)`).
- Ver implementaciones de referencia en `src/components/BrowserFrame.astro`, `src/components/PhoneFrame.astro` y `src/components/Ticker.astro`.
- **Animaciones de entrada y hover**:
  - `.reveal`: sube `24px` con `opacity: 0` → `1` en `0.8s cubic-bezier(0.2, 0.8, 0.2, 1)` al entrar al viewport (`IntersectionObserver`).
  - `.hover-list li`: desplaza el texto `padding-left: 16px` y despliega una barra vertical roja de `3px` (`scaleY(0)` → `1`).
  - `.steps li::before`: traza una línea superior roja de izquierda a derecha (`scaleX(0)` → `1`) sobre el filete negro.

---

## C. Patrones Editoriales y de Medio (`Revista ZUN`)

### 1. Divisor de Sección con Pestaña Colgante (`.subheader`)
En portadas editoriales, cada sección se abre con una línea superior fina de la que cuelga una pestaña en `DM Mono`:

```html
<section class="subheader">
  <div class="subheader-line subheader-line--dark">
    <span class="subheader-pill subheader-pill--dark">novedades</span>
  </div>
</section>
```

```css
.subheader {
  padding: var(--gap-m) 0 var(--gap-s);
}
.subheader-line {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 0.5px solid var(--negro);
}
.subheader-line--red { border-top-color: var(--rojo); }
.subheader-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  border-radius: 0 0 6px 6px;
  background-color: var(--negro);
  color: #ffffff;
}
.subheader-pill--red { background-color: var(--rojo); }
```

### 2. Tarjeta Editorial con Imagen (`PostImageCard`)
Un solo componente para carruseles, artículos relacionados y grillas de categoría:

```css
.post-image-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.post-image-card:hover { transform: translateY(-4px); }

.post-image-card-thumb {
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.35s ease;
}
.post-image-card:hover .post-image-card-thumb {
  box-shadow: 0 14px 28px -6px rgba(0, 0, 0, 0.14);
}
.post-image-card-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.post-image-card:hover .post-image-card-thumb img {
  transform: scale(1.06);
}
.post-image-card-meta,
.post-image-card-author {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--negro);
}
.post-image-card-meta { opacity: 0.6; }
.post-image-card-title {
  margin: 0;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.2;
  letter-spacing: -1px;
  color: var(--negro);
  text-wrap: balance;
  overflow-wrap: break-word;
  transition: color 0.25s ease;
}
.post-image-card:hover .post-image-card-title {
  color: var(--rojo);
}
```

### 3. Tarjeta Editorial de Solo Texto (`PostTextCard`)
En escritorio es una caja con borde de `0.5px solid #8f96b5` y `border-radius: 8px`; en móvil se transforma en una lista apilada con filete inferior:

```css
.post-text-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  min-height: 188px;
  padding: 24px;
  border: 0.5px solid #8f96b5;
  border-radius: 8px;
  text-decoration: none;
  color: var(--negro);
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}
.post-text-card:hover {
  border-color: var(--rojo);
  box-shadow: 0 10px 26px -12px rgba(0, 0, 0, 0.18);
  transform: translateY(-2px);
}
.post-text-card:hover .post-text-card-title {
  color: var(--rojo);
}
@media (max-width: 768px) {
  .post-text-card {
    min-height: 0;
    padding: 32px 0;
    border: none;
    border-bottom: 0.5px solid #8f96b5;
    border-radius: 0;
  }
}
```

### 4. Contenedores Redondeados y Carruseles (`.container-standalone`)
Cuando un bloque o carrusel tiene scroll horizontal interno, el navegador crea una capa de composición propia que ignora `overflow: hidden` si no se acompaña de `clip-path` y `border-radius: inherit` en el track:

```css
.container-standalone {
  width: 100%;
  max-width: min(var(--container-max), calc(100% - 2 * var(--container-pad)));
  margin: 0 auto;
  border-radius: 28px;
  clip-path: inset(0 round 28px);
  overflow: hidden;
}
@media (max-width: 768px) {
  .container-standalone {
    border-radius: 20px;
    clip-path: inset(0 round 20px);
  }
}
.carousel-track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  border-radius: inherit;
}
```

### 5. Bloques Gemelos de Cierre: Donación / CTA Rojo + Newsletter
- Ambos comparten exactamente la misma escala de titular: `font-size: clamp(2rem, 3.4vw, 3.625rem)`, `font-weight: 600`, `line-height: 1.05`, `letter-spacing: -0.04em`, `max-width: 670px`, `text-wrap: balance`.
- Inputs y botones usan rectángulos con `border-radius: 6px`, `padding: 20px 24px` y tipografía `DM Mono` `12px` en mayúsculas.

### 6. Footer con Wordmark Proporcional (`container-type: inline-size`)
Para que un logotipo tipográfico al pie llene exactamente el ancho de la columna sin desbordar ni depender de `vw`:

```css
.footer-wordmark-wrap {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-pad);
  container-type: inline-size;
  overflow: hidden;
}
.footer-wordmark {
  margin: 0 0 -0.12em -0.0676em; /* Ajuste óptico del side-bearing izquierdo */
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 18.78cqw; /* Ajustar según el largo del nombre para cubrir 100% de la columna */
  white-space: nowrap;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--negro);
}
```
