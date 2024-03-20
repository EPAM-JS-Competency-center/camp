---
sidebar_position: 6
---

# 3.6. Practical Task - Implement interfaces that are integrated with Commercetools

1. Utilize the **[SDK](https://docs.commercetools.com/sdk/javascript-sdk)** to create new classes, following the interfaces of _`CategoriesAbstractService`_, _`ProductsAbstractService`_, and _`CartAbstractService`_.

:::warning
Keep in mind that those implementations should be interchangeable.
:::

2. Below are examples of operations directly with Commercetools through API using Postman. Please execute these requests to acquaint yourself with the APIs and their corresponding response structures.

## Commercetools API 

### Categories
| Query categories                                                               |
|---------------------------------------------------------------------|
|  [GET]  `{{host}}/{{project-key}}/categories` |

### Products
   -  Product-projections → Search products by category 

|  Product-projections → Search products by category                                    |
|---------------------------------------------------------------------------------------|
| [GET]  `{{host}}/{{project-key}}/product-projections/search?filter=categories.id:"{id}"` |
### Cart
| Carts → Create cart                                                                |
|----------------------------------------------------------------------|
|  [POST] `{{host}}/{{project-key}}/carts` |

| Carts → Get Cart by id                                                                |
|----------------------------------------------------------------------|
|  [GET] `{{host}}/{{project-key}}/carts/{{cart-id}}` |

| Carts → Update actions → AddLineItem                                                                |
|----------------------------------------------------------------------|
|  [POST] `{{host}}/{{project-key}}/carts/{{cart-id}}`   |
```jsx title="Request Body"
{
   "version": {{cart-version}},
   "actions": [
      {
         "action" : "addLineItem",
         "productId" : {{ product-id }}, // or sku
         "variantId" : {{ variantId }},
        "quantity": 1
      }
  ]
}
```

| Carts → Update actions → RemoveLineItem                                                                |
|----------------------------------------------------------------------|
|  [POST] `{{host}}/{{project-key}}/carts/{{cart-id}}`   |
|                                                                                                        |
```jsx title="Request Body"
{
   "version": {{cart-version}},
   "actions": [
      {
         "action" : "removeLineItem",
         "lineItemId" : "{{lineItemId}}"
      }
   ]
}
```

| Carts → Update actions → ChangeLineItemQuantity                                                      |
|----------------------------------------------------------------------|
|  [POST] `{{host}}/{{project-key}}/carts/{{cart-id}}`   |
```jsx title="Request Body"
{
   "version": {{cart-version}},
   "actions": [
      {
         "action" : "changeLineItemQuantity",
         "lineItemId" : "{{lineItemId}}",
         "quantity" : 2
      }
   ]
}
```

| Carts → Update actions → SetShippingAddress                                                    |
|----------------------------------------------------------------------|
|  [POST] `{{host}}/{{project-key}}/carts/{{cart-id}}`   |
```jsx title="Request Body"
{
   "version": {{cart-version}},
   "actions": [
      {
         "action" : "setShippingAddress",
         "address" : {
            "key" : "exampleKey",
            "title" : "My Address",
            "salutation" : "Mr.",
            "firstName" : "Example",
            "lastName" : "Person",
            "streetName" : "Example Street",
            "streetNumber" : "4711",
            "additionalStreetInfo" : "Backhouse",
            "postalCode" : "80933",
            "city" : "Exemplary City",
            "region" : "Exemplary Region",
            "country" : "DE",
            "company" : "My Company Name",
            "department" : "Sales",
            "building" : "Hightower 1",
            "apartment" : "247",
            "pOBox" : "2471",
            "phone" : "+49 89 12345678",
            "mobile" : "+49 171 2345678",
            "email" : "email@example.com",
            "fax" : "+49 89 12345679",
            "additionalAddressInfo" : "no additional Info",
            "externalId" : "Information not needed"
         }
      }
   ]
}
```

### Order

| Orders → Create order                                                 |
|----------------------------------------------------------------------|
|  [POST] `{{host}}/{{project-key}}/orders`   |
```jsx title="Request Body"
{
   "version": {{cart-version}},
   "actions": [
      {
         "action" : "removeLineItem",
         "lineItemId" : "{{lineItemId}}"
      }
   ]
}
```
