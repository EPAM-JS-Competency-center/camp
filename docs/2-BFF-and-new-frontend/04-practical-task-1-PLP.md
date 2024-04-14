---
sidebar_position: 4
---

# 2.4. Practical Task - Implement Product Listing Page (PLP)

:::warning
- ~TODO: add Open API of StoreFront that should be integrated during this task - Vasiliy~
- ~TODO2: add StoreFront context, example in task - Vasiliy~
- TODO3: add magenta end-points - Yaroslav
- TODO4: add acceptance - Yaroslav
:::

### Definition of Done

You need to implement PLP logic that will pull data from Magento and provide it to StoreFront.

- Data fetched from Magento.
- PLP logic integrated into Storefront.
- Categories displayed with clickable links.
- Product list shown per category.
- Filtering by category functional.

### A typical PLP Wireframe:

![plp-wireframe.png](assets/plp-wireframe.png)

To facilitate your journey through the efficient development process of BFF implementation, specifically designed to uphold Maintainability requirements, we have prepared a number of Interfaces and Models that are typical for the E-Commerce and retail domain. Below you can find an illustration of how those Models and Interfaces are related to UI components for the PLP page.

![plp-components.png](assets/plp-components.png)

### PLP in the StoreFront

The Product List Page is already implemented in the StoreFront application and available under `/category` path.

![Product List Page](assets/2.4/01-category-page.png)

### Endpoints for PLP
The PLP is using two endpoints to get the data for the navigation and the list of products.

#### GET /categories
This endpoint should return list of categories with hierarchy. 
The root category is a category with property `parent` equal to `null`, or without that property at all. 

```json
{
    "id": 2,
    "name": "Default Category",
    "description": "Default Category",
    "slug": "2",
    "parent": null,
    "ancestors": []
}
```

Please refer to request **Get Categories** in the [StoreFront Postman Collection](https://git.epam.com/Vasily_Vanin/camp-storefront-nuxt/-/tree/main/postman) to find example of the request and response.

#### GET /products?categoryId=$active_category_id
This endpoint should return a list of products under the selected category. The endpoint should support query parameters `page` and `offset` for the pagination.

Please refer to request **Get Products by Category** in the [StoreFront Postman Collection](https://git.epam.com/Vasily_Vanin/camp-storefront-nuxt/-/tree/main/postman) to find example of the request and response.

