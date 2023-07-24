/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'utils'); // utils 폴더가 있는 경로로 설정하세요.
    return config;
  },
};