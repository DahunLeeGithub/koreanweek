/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['127.0.0.1'], // 여기에 이미지 호스트의 도메인을 추가합니다.
  },
}

module.exports = nextConfig;
