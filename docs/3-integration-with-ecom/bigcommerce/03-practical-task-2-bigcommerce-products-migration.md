---
sidebar_position: 4
---

# 3.4.3 Practical Task - Migrate Data from Magento to BigCommerce

## What is this task about

This task focuses on migrating data related to categories and products from Magento to BigCommerce seamlessly. It involves ensuring the accurate transfer of data without corruption or alteration, maintaining correct categorization, and preventing duplication of entries in BigCommerce during the migration process.

## What should be done

- All data pertaining to `Categories` and `Products` from Magento must be successfully transferred to BigCommerce.
- The data in BigCommerce should accurately reflect the source data in Magento without any corruption or alteration.
- Products must be correctly categorized under the appropriate Categories as they were in Magento.
- The migration script should not create duplicate entries for any category or product.

## Task

# **//TODO: rewrite!!!**
1. Delete existing `Categories` and `Products` in BigCommerce (otherwise, the migration script will fail).

2. Execute the script to migrate products from Magento to BigCommerce: **[Magento2-to-bigcommerce-lib](https://git.epam.com/Anton_Zhirkov/magento2-to-bigcommerce-lib)**

   - Rename `.env-copy` to `.env` and fill it with your credentials.
   - Run `npm install`.
   - Run `npm migrate-magento-to-bigcommerce`.

By following these steps, you will ensure a smooth migration of your Magento data to BigCommerce, maintaining data integrity and correct categorization throughout the process.
