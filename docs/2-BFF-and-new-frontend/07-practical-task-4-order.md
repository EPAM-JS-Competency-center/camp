---
sidebar_position: 7
---

# 2.7. Practical Task - Implement Checkout

:::warning
- ~TODO: add Open API of StoreFront that should be integrated during this task - Vasiliy~
- ~TODO2: add StoreFront context, example in task - Vasiliy~
- TODO3: add magenta end-points - Yaroslav
- TODO4: add acceptance - Yaroslav
:::

### Definition of Done

...

- 1
- 2
- 3

### A typical PDP Wireframe:

![assets/cart-wireframe.png](assets/checkout-page.png)

Below is an illustration of Models and Interfaces that are related to UI components on the Checkout page.

![cart-components.png](assets/checkout-components.png)

### The Checkout in the StoreFront
To start the start the checkout the uses click on the button in the Shopping Cart. The checkout consists of two major steps.

#### Add Shipping Details
![Checkout Empty](assets/2.7/01-checkout-start.png)
![Checkout with Details](assets//2.7/02-checkout-with-address.png)

#### Users can edit the Address before the order is submitted
![Edit Address](assets/2.7/03-checkout-edit-address.png)

#### Submit the order
![Submit Order](assets/2.7/04-checkout-success.png)

### Endpoints for Checkout
There are two endpoints needed for the Checkout.

#### PUT /carts/$id
This endpoint should be already implemented in your API. On this stage you need to add one more action `SetShippingAddress`

Example Payload:
```json
{
    "version": 5,
    "action": "SetShippingAddress",
    "SetShippingAddress": {
        "country": "DE",
        "firstName": "TestName",
        "lastName": "TestSurname",
        "streetName": "Test Street Name",
        "streetNumber": "13",
        "postalCode": "10285",
        "city": "Berlin",
        "region": "Berlin",
        "email": "jonh_doe@example.com"
    }
}
```
Please refer to request **Put Cart / SetShippingAddress** in the [StoreFront Postman Collection](https://git.epam.com/Vasily_Vanin/camp-storefront-nuxt/-/tree/main/postman) to find example of the request and response.

#### POST /carts/$id/order
This endpoint finalizes the cart and creates a new orded from it. 
It doesn't require any payload as all the information should be provided in the cart.

Please refer to request **Create Order From Cart** in the [StoreFront Postman Collection](https://git.epam.com/Vasily_Vanin/camp-storefront-nuxt/-/tree/main/postman) to find example of the request and response.