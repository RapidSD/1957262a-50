export default {
  // Configure for OpenNext deployment to Cloudflare Workers
  output: 'standalone',
  
  images: {
    formats: ['image/avif', 'image/webp'],
    // Disable image optimization for Cloudflare Workers (OpenNext handles this)
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_SHOPIFY_SHOP: process.env.NEXT_PUBLIC_SHOPIFY_SHOP,
    NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
  
  // WebContainer compatibility settings
  compiler: {
    // Remove React properties for better performance in containers
    reactRemoveProperties: true,
  },
  
  // Use webpack instead of turbopack for better compatibility
  webpack: (config) => {
    // Optimize for WebContainer environment in development
    if (process.env.NODE_ENV === 'development') {
      config.optimization.minimize = false;
    }
    return config;
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Allow cross-origin images (needed for Shopify CDN)
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'credentialless',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin',
          },
        ],
      },
    ];
  },
};
