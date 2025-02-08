/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Para detectar errores en React
  images: {
    domains: [
      "images.unsplash.com",
      "source.unsplash.com",
      "plus.unsplash.com",
      "mi-dominio.com", // Tu dominio personalizado
    ],
  },
};

export default nextConfig;
