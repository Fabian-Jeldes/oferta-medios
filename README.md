# Página de oferta: sitios y CMS para medios

Landing estática en Astro para el servicio mensual a medios independientes.

## Desarrollo

Requiere Node >= 22.23.4 (lo exige Astro 7.4).

```bash
npm install
npm run dev
```

El correo de contacto está en `src/pages/index.astro` (`contactEmail`).

## Despliegue (CI/CD con Workers Builds)

Cada push a `main` dispara en Cloudflare:

1. `npm run build`: Astro genera `dist/`.
2. `npx wrangler deploy`: sube `dist/` como assets del Worker `oferta-medios` y el script `worker/index.js`, que sirve las capturas de `/media/` desde KV (ver `wrangler.jsonc`).

Sitio: https://oferta-medios.fabian-jeldes.workers.dev

Para publicar a mano desde tu computador: `npm run deploy`.
