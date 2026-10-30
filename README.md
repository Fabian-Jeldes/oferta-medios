# Página de oferta: sitios y CMS para medios

Landing estática en Astro para el servicio mensual a medios independientes.

## Desarrollo

Requiere Node >= 22.23.4 (lo exige Astro 7.4).

```bash
npm install
CONTACT_EMAIL=tu@correo.cl npm run dev
```

`CONTACT_EMAIL` es obligatorio: sin él, la compilación falla.

## Despliegue

Publicado como Worker `oferta-medios` en la cuenta personal de Cloudflare:
https://oferta-medios.fabian-jeldes.workers.dev

El build (`dist/`) se empaqueta en un único módulo de Worker que sirve los archivos estáticos.
