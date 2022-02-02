module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['losangeles.comes.cl', 'imgur.com', 'comeschile.cl', 'cs-stores-images.s3.amazonaws.com'],
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_IMAGES_PATH: process.env.MY_ENV_VAR,
    API_URL: process.env.API_URL,
  },
}
