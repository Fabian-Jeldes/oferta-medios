# Página de oferta: sitios y CMS para medios

Landing estática en Astro para el servicio mensual a medios independientes.

## Desarrollo

Requiere Node >= 22.23.4 (lo exige Astro 7.4).

```bash
npm install
CONTACT_EMAIL=tu@correo.cl npm run dev
```

`CONTACT_EMAIL` es obligatorio: sin él, la compilación falla.

## Despliegue en Cloudflare Pages

- Comando de build: `npm run build`
- Carpeta de salida: `dist`
- Variable de entorno: `CONTACT_EMAIL`
- Versión de Node: la toma de `.nvmrc` (24)
