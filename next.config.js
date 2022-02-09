module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cs-stores-images.s3.amazonaws.com', 'imgur.com', 'comeschile.cl'],
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_IMAGES_PATH: process.env.NEXT_PUBLIC_IMAGES_PATH,
    API_URL: process.env.API_URL,
    NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  },
  webpack: (config, { defaultLoaders, isServer }) => {
    if (isServer) {
      config.externals.push('_http_common')
    }
    return config
  },
}
