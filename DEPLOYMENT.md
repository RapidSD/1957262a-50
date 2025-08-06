# Deployment Guide for 1957262a-50

This project has been configured for automatic deployment to Cloudflare Workers.

## Repository

- **URL**: https://github.com/RapidSD/1957262a-50
- **Deployment**: Automated via GitHub Actions

## Important Notes

### Next.js on Cloudflare Workers

## 🔧 Environment Variables Setup

Environment variables are automatically configured from GitHub repository secrets and variables during deployment.

### Repository Configuration:
The following are already configured in your GitHub repository:

**Variables** (non-sensitive):
- `SHOPIFY_SHOP`: Your Shopify store domain

**Secrets** (sensitive):
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN`: Storefront API access token
- `PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN`: Private app access token
- `CLOUDFLARE_API_TOKEN`: Cloudflare deployment token
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare account identifier

## 🌐 Live URLs

- **Production**: https://1957262a-50.workers.dev
- **Repository**: https://github.com/RapidSD/1957262a-50

## 📋 Deployment Process

1. **Code**: Push changes to the main branch
2. **Build**: GitHub Actions builds the Next.js app using OpenNext
3. **Deploy**: OpenNext-optimized build deployed to Cloudflare Workers

## 🛠️ Local Development

If you want to run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/RapidSD/1957262a-50.git
   cd 1957262a-50
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env.local` file with your Shopify credentials:
   ```
   NEXT_PUBLIC_SHOPIFY_SHOP=your-shop-name.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token
   PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_private_access_token
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

## 📚 Documentation

- [OpenNext for Cloudflare](https://github.com/opennextjs/opennext/tree/main/packages/cloudflare)
- [Next.js on Cloudflare](https://developers.cloudflare.com/workers/tutorials/deploy-a-nextjs-site/)
- [Shopify Storefront API](https://shopify.dev/docs/api/storefront)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)

---

*Deployed with ❤️ from [Bolt.new](https://bolt.new)*
