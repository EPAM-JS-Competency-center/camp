---
sidebar_position: 6
---

# 1.5.1. Implementation Guide

1. Initiate a new project using your preferred framework as a foundation.

2. Generate the necessary Models and Interfaces.

Access the repository containing essential Interfaces and Models via the following link: Repository Link.

Install dependencies by executing the command: npm i.

Type Generation for category_api:

 + Generate types for the category_api by running the command: npm run types-gen-category_api.
Type Generation for product_api:

Generate types for the product_api using the command: npm run types-gen-product_api.
The generated Models are available at: ./generated-sources .

 + Interfaces are located in the ./abstract_classes directory.

3. For seamless integration with Magento APIs, follow the steps below:

Reference the table below to identify the appropriate Interface for each Component.

Implement the interfaces to effectively interact with Magento APIs.

Enhance your understanding of Magento's data structure by utilizing the provided scripts. These scripts facilitate the extraction of specific data from designated endpoints. Reference the **'Data Retrieval script'** column for further details. To execute these scripts, utilize the command: NODE_TLS_REJECT_UNAUTHORIZED=0 node requests/[script name].js.


Additionally, we've taken the initiative to streamline the integration process by providing data mapping between the provided Models and Magento API. This resource is designed to speed up your development efforts, ensuring a smoother and more efficient integration of data between the two platforms.



:::info
Please note: all the interfaces above and code samples - are just example of what will be gererated from the repository:  Repository Link.

To follow the Client - Backend contract you need to refer to all gererated interfaces and models at this repository
:::