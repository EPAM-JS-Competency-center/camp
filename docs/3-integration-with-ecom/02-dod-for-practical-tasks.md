---
sidebar_position: 2
---

# 3.2 Definition of Done for Practical Tasks

Before module as completed, it's crucial to ensure that several key criteria have been met. This collective set of conditions ensures that the necessary infrastructure is in place, you are acquainted with essential functionalities, and the project's primary components are configured as required.

1. Commerce platform created and initiated:
   - API credentials (client_id and client_secret) are generated and validated.

2. Your task is to migrate your BFF solution(**[Module 2: BFF](/docs/2-BFF-and-new-frontend/01-introduction.md)**) to commerce platform.
   
   - The solution should be designed in a way that it can switch between Magento and commerce platform. 
   This means that the solution should be platform-agnostic and should not have any hard dependencies on a specific platform. 
   The switching can be done through configuration changes. This will allow the solution to be flexible and adaptable to different platforms.
   - This approach ensures that components such as:
     - Product Listing Pages - **[Module 2: PLP](/docs/2-BFF-and-new-frontend/03-practical-task-1-PLP.md)**
     - Product Display Pages - **[Module 2: PDP](/docs/2-BFF-and-new-frontend/04-practical-task-2-PDP.md)**
     - Cart functionality - **[Module 2: Cart](/docs/2-BFF-and-new-frontend/05-practical-task-3-cart.md)**
     - Order process - **[Module 2: Order](/docs/2-BFF-and-new-frontend/06-practical-task-4-order.md)**

3. UI components and APIs should not be changed

   - **UI consistency verification**:
     All user interface components maintain their original design, functionality, and performance characteristics post-integration. This includes layout, colors, buttons, input fields, and overall user flow. Ensure that enhancements or fixes do not alter the visual or operational aspects.
   
   - **API contract adherence**:
     APIs continue to function exactly as before with no changes in endpoints, response structures, or expected behaviors. Validate that all existing API contracts are honored, with no additions, modifications, or removals that affect the established API consumers.
