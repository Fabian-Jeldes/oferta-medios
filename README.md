# Página de oferta: sitios y CMS para medios

Landing estática en Astro para el servicio mensual a medios independientes.

## Desarrollo

Requiere Node >= 22.23.4 (lo exige Astro 7.4).

```bash
npm install
CONTACT_EMAIL=tu@correo.cl npm run dev
```

`CONTACT_EMAIL` es obligatorio: sin él, la compilación falla.

## Despliegue (CI/CD con Workers Builds)

Cada push a `main` dispara en Cloudflare:

1. `npm run build`: Astro genera `dist/` (necesita la variable de build `CONTACT_EMAIL`).
2. `npx wrangler deploy`: sube `dist/` como assets del Worker `oferta-medios` (ver `wrangler.jsonc`).

Sitio: https://oferta-medios.fabian-jeldes.workers.dev

Para publicar a mano desde tu computador: `CONTACT_EMAIL=tu@correo.cl npm run deploy`.
