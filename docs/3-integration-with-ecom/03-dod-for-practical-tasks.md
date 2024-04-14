---
sidebar_position: 3
---

:::warning
- ~TODO1: add details / rephrase - Andrii~
- ~TODO2: add when task is done - Andrii~
- ~TODO3: add about solution should switch between magento and commercetools - Andrii~
  :::

# 3.3 Definition of Done for Practical Tasks

Before module as completed, it's crucial to ensure that several key criteria have been met. This collective set of conditions ensures that the necessary infrastructure is in place, you are acquainted with essential functionalities, and the project's primary components are configured as required.

1. Commercetools created and initiated:
   - API credentials (client_id and client_secret) are generated and validated.

2. Interface implementation and integration:

   - New implementations of _`CategoriesAbstractService`_, _`ProductsAbstractService`_, and _`CartAbstractService`_ should be implemented and integrated with Commercetools.

   - Interfaces must interact flawlessly with both Commercetools and Magento APIs, maintaining data consistency and efficient error handling.

:::important
The solution should be designed in a way that it can switch between Magento and Commercetools. 
This means that the solution should be platform-agnostic and should not have any hard dependencies on a specific platform. 
The switching can be done through configuration changes. This will allow the solution to be flexible and adaptable to different platforms.
:::

3. UI components and APIs should not be changed

   - **UI consistency verification**:
     All user interface components maintain their original design, functionality, and performance characteristics post-integration. This includes layout, colors, buttons, input fields, and overall user flow. Ensure that enhancements or fixes do not alter the visual or operational aspects.
   
   - **API contract adherence**:
     APIs continue to function exactly as before with no changes in endpoints, response structures, or expected behaviors. Validate that all existing API contracts are honored, with no additions, modifications, or removals that affect the established API consumers.


