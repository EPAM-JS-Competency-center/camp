---
sidebar_position: 2
---

# 2.2. Definition of Done for Practical Tasks

Before finalizing the module, we need to make sure that a number of certain conditions are met. All the logic that StoreFront expects has been implemented on the BFF side using Magento as a source.

- BFF (Backend For Frontend) service should be implemented for communication between StoreFront and Magento, providing request processing and data transfer between them.
- All information on the pages must be derived from Magento.
- StoreFront must be connected and use BFF for all API logic.
- The following modules are implemented:
  - Product detail page.
  - A page with a list of products.
  - Shopping cart logic.
  - Checkout flow.


![ecom-happy-path.png](assets/ecom-happy-path.svg)