---
sidebar_position: 8
---

# 1.8. Practical Task - Configure storeFront application

## Context

This task focuses on setting up and launching the storefront. We'll utilize it as a solution for the UI component, allowing us to concentrate on course objectives without distractions from the front-end development aspect.


## Acceptance criteria

- The storefront must be successfully configured and launched.
- Upon accessing the storefront, all frontend components, including navigation, product displays, and interactive elements, should be fully operational and functional.
- Users should be able to navigate through the storefront, view products, and interact with UI elements without encountering any errors or disruptions.


## Task

### Clone repository

:::warning
- TODO: add details/examples of how to use StoreFront - Vasiliy
:::


```bash
# git
git clone git@git.epam.com:Vasily_Vanin/camp-storefront-nuxt.git
```

### Setup

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

### Running Development Server

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

### Adding your API
Create `.env` file and set variable `VITE_BFF_URL`, you can find an example inside `.env.example`

Please refer to [Postman Collection](/postman/CAMP Storefront.postman_collection.json) to get examples of requests and responses
```
VITE_BFF_URL=http://localhost:3003/api/v1
```
