// Sirve las capturas de trabajos desde KV y el resto desde el build estático.
export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname.startsWith('/media/')) {
      const body = await env.MEDIA.get(pathname.slice('/media/'.length), 'arrayBuffer');
      if (!body) return new Response('No encontrado', { status: 404 });
      return new Response(body, {
        headers: { 'content-type': 'image/jpeg', 'cache-control': 'public, max-age=86400' },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
