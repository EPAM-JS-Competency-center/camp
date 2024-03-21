---
sidebar_position: 7
---

# 1.7. Practical Task - Configure storeFront application

## Clone repository


:::warning
- TODO: add details/examples of how to use StoreFront - Vasiliy
- TODO2: add acceptance - Yaroslav
:::

```bash
# git
git clone git@git.epam.com:Vasily_Vanin/camp-storefront-nuxt.git
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Running Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Adding your API
Create `.env` file and set variable `VITE_BFF_URL`, you can find an example inside `.env.example`

Please refer to [Postman Collection](/postman/CAMP Storefront.postman_collection.json) to get examples of requests and responses
```
VITE_BFF_URL=http://localhost:3003/api/v1
```
