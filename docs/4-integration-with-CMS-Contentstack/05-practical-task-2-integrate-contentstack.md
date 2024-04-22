---
sidebar_position: 5
---

# 4.5. Practical Task - Integrate Contentstack with your frontend

:::warning
- TODO: add Open API of StoreFront that should be integrated during this task - Vasiliy / Yaroslav
:::

## What is this task about

The essence of this task is to create server-side logic that retrieves the content model from Contentstack and serves the storefront, implementing the necessary contracts.


## What should be done

You need to configure ContentStack content and implement logic that will pull data from ContentStack and provide it to StoreFront.

- Contentstack Setup: Creation of content types and entities in Contentstack to represent products.
- Server-side Logic: Implementation of logic to fetch entities based on products from Contentstack.
- Integration with Storefront UI: Integration of server-side logic with the storefront UI to ensure smooth data presentation.
- Validation of Frontend Updates: Verification that changes made to orders or content in Contentstack reflect accurately on the storefront UI.


## Task


1. Create a Product Content Type and Entry:
   - Define a Product Layout in your Contentstack dashboard.
   ![product-layout-1.png](assets/product-layout-1.png) ![product-layout-2.png](assets/product-layout-2.png)
   - Create several entries based on the created content type using 'URL' or 'Commercetools Id' to match Commercetools data and Contentstack entry
   ![slug-field.png](assets/slug-field.png)

2. Incorporate in Your App:
   
   Integrate entries you've created into your application.

3. Rearrange Components

   Within the selected Entry, adjust the order of components as needed. For example, you can rearrange the content of the Promo section.

4. Check the Changes

   Once you're satisfied with the adjustments, hit the publish button. Make sure that the changes are reflected on your website.

