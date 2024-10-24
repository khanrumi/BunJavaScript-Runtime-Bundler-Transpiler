const server = Bun.serve({
    port: Bun.env.PORT || 8000,
    fetch(req) {
        const  url = new URL(req.url);
        if (url.pathname === '/') return new Response ('HomePage');
        if (url.pathname === 'BLOG') return new Response ('BLOG')

            return new Response ('404');
      
    },
});

console.log(`Listening on Port ${server.port}`);
