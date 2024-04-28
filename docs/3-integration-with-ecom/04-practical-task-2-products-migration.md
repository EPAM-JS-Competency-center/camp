---
sidebar_position: 4
---

# 3.4 Practical Task - Migrate data from Magento to Commercetools

### What should be done

1. Delete existing `Categories` and `Products` (otherwise, the migration script will fail).
:::warning
Before running the migration script, you must delete all existing Categories and Products in your Commercetools project. Failure to do so can cause the migration script to fail, leading to potential data inconsistencies or duplicate entries. This step is essential to prepare your environment properly for a successful import from another platform or an earlier system version.
:::

2. Execute the script to migrate products from Magento to CT: **[Magento2-to-commercetools-lib](https://git.epam.com/Anton_Zhirkov/magento2-to-commercetools-lib)**

   - Rename `.env-copy` to `.env` and fill it with your creds
   - Run `yarn` or `npm i`
   - Run *`yarn migrate-magento-to-comtools`*

### Acceptance criteria
- All data pertaining to `Categories` and `Products` from Magento must be successfully transferred to Commercetools.
- The data in Commercetools should accurately reflect the source data in Magento without any corruption or alteration.
- Products must be correctly categorized under the appropriate Categories as they were in Magento.
- The migration script should not create duplicate entries for any category or product.
