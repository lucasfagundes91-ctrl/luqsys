/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,

  // /assinatura → redirect pro app interno.
  // Optamos por redirect (não rewrite) porque o Vercel transforma redirects
  // internos do Flask em 308 absolutos quando proxando, e o Flask gera URLs
  // absolutas com o Host interno em casos como Flask-Login. Redirect 301
  // resolve definitivamente: o browser vai direto pro subdomínio.
  async redirects() {
    return [
      {
        source: '/assinatura',
        destination: 'https://assinatura.luquisys.com.br/assinatura/',
        permanent: false,
      },
      {
        source: '/assinatura/:path*',
        destination: 'https://assinatura.luquisys.com.br/assinatura/:path*',
        permanent: false,
      },
      {
        source: '/obrapro',
        destination: '/obraspro',
        permanent: true,
      },
      {
        // MilhasPro virou parte do ViagemPro: a página dele saiu (vendia
        // assinatura própria de um produto que não existe mais sozinho), mas
        // o link continua circulando por aí.
        source: '/milhaspro',
        destination: '/viagempro',
        permanent: true,
      },
      {
        source: '/pontopro',
        destination: '/horapro',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
