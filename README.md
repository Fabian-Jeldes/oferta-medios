# Fabián Jeldes — Sitio profesional y oferta para medios

Sitio estático en Astro con el sistema de diseño editorial ZUN (`Manrope` + `DM Mono`, papel blanco, acento rojo `#FF262A`).

## Rutas

- `/` (`src/pages/index.astro`): Portafolio profesional integral (capacidades en desarrollo web, datos/IA e infraestructura, proyectos visuales y técnicos, caso Revista ZUN, trayectoria y contacto).
- `/medios` (`src/pages/medios.astro`): Oferta vertical dedicada a revistas y medios independientes (Astro + Strapi, planes mensuales y auditoría gratuita).

## Desarrollo

Requiere Node >= 22.23.4 (lo exige Astro 7.4).

```bash
npm install
npm run dev
```

El correo de contacto usa `fabian.jeldes@gmail.com` por defecto (puede sobrescribirse con `CONTACT_EMAIL`).

## Despliegue (CI/CD con Workers Builds)

Cada push a `main` dispara en Cloudflare:

1. `npm run build`: Astro genera `dist/` (`/` y `/medios`).
2. `npx wrangler deploy`: sube `dist/` como assets del Worker `oferta-medios` y el script `worker/index.js`, que sirve las capturas de `/media/` desde KV (ver `wrangler.jsonc`).

Sitio: https://oferta-medios.fabian-jeldes.workers.dev

Para publicar a mano desde tu computador: `npm run deploy`.
