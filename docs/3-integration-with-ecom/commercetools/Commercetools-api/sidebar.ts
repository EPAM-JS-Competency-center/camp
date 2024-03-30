import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "3-integration-with-ecom/commercetools/commercetools-api/commercetools-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "3-integration-with-ecom/commercetools/commercetools-api/query-categories",
          label: "Query categories",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "3-integration-with-ecom/commercetools/commercetools-api/search-products-by-category",
          label: "Search products by category",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "3-integration-with-ecom/commercetools/commercetools-api/create-cart",
          label: "Create cart",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "3-integration-with-ecom/commercetools/commercetools-api/get-cart-by-id",
          label: "Get Cart by id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "3-integration-with-ecom/commercetools/commercetools-api/add-line-item-to-cart",
          label: "Add Line Item to cart",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "3-integration-with-ecom/commercetools/commercetools-api/remove-line-item-from-cart",
          label: "Remove Line Item from cart",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "3-integration-with-ecom/commercetools/commercetools-api/change-line-item-quantity",
          label: "Change Line Item Quantity",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "3-integration-with-ecom/commercetools/commercetools-api/set-shipping-address-for-cart",
          label: "Set Shipping Address for cart",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "3-integration-with-ecom/commercetools/commercetools-api/create-order",
          label: "Create order",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
