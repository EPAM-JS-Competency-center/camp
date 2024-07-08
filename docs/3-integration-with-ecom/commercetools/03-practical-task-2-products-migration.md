---
sidebar_position: 4
---

# 3.3.3 Practical Task - Migrate data from Magento to Commercetools

## What is this task about

This task revolves around migrating data related to categories and products from Magento to Commercetools seamlessly. It involves ensuring the accurate transfer of data without corruption or alteration, maintaining correct categorization, and preventing duplication of entries in Commercetools during the migration process.


## What should be done

- All data pertaining to `Categories` and `Products` from Magento must be successfully transferred to Commercetools.
- The data in Commercetools should accurately reflect the source data in Magento without any corruption or alteration.
- Products must be correctly categorized under the appropriate Categories as they were in Magento.
- The migration script should not create duplicate entries for any category or product.


## Task

1. Delete existing `Categories` and `Products` (otherwise, the migration script will fail).

2. Execute the script to migrate products from Magento to CT: **[Magento2-to-commercetools-lib](https://git.epam.com/Anton_Zhirkov/magento2-to-commercetools-lib)**

   - Rename `.env-copy` to `.env` and fill it with your creds
   - Run `npm i`
   - Run `npm migrate-magento-to-comtools`
