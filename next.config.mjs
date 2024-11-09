/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
    serverMinification: true,
    serverSourceMaps: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 20000000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module, chunks, cacheGroupKey) {
              const moduleFileName = module
                .identifier()
                .split('/')
                .reduceRight((item) => item);
              return `${cacheGroupKey}-${moduleFileName}`;
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
        },
      };
    }
    
    if (isServer) {
      config.optimization.minimize = true;
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/bb_m/TemplateData/:path*',
        destination: '/bb_m/TemplateData/:path*',
      },
    ]
  }
};

export default nextConfig;
