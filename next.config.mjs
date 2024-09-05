/** @type {import('next').NextConfig} */


const cspHeader = `
    default-src 'self' 'unsafe-inline';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval';
    style-src 'self' 'unsafe-inline' data: https://cdnjs.cloudflare.com fonts.googleapis.com blob: https://fonts.googleapis.com;
    img-src 'self' blob: data: https://i.imgur.com i.imgur.com imgur.com blob: https://ipfs.dscvr.one https://media.dscvr.one https://medai1.stg.dscvr.one *.canvas-app.dscvr.one;
    font-src 'self' data: fonts.gstatic.com fonts.googleapis.com cdnjs.cloudflare.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

const nextConfig = {
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
                {
                    key: 'Content-Security-Policy',
                    value: cspHeader.replace(/\n/g, ''),
                },
              {
                key: 'x-custom-header',
                value: 'my custom header value',
              },
              {
                key: 'x-another-custom-header',
                value: 'my other custom header value',
              },
            ],
          },
        ]
      },
};


export default nextConfig;
