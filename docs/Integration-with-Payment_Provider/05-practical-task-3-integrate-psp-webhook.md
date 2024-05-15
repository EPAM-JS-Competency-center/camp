---
sidebar_position: 4
---

# 7.4. Practical Task - Integrate Commercetools with your PSP

## What should be done

At the very beginning, if you still do not use Postman Api collection to operate with Commercetools, I strongly advice you do to it. 

There will be mach calls and prebuilt collection that populate authentication, ids and other fields - will save much time with this work. 


List of API links you need to orchestrate with:
Set Shipping Address: https://docs.commercetools.com/api/projects/me-carts#set-shipping-address

Here: not all fields are mandatory. You don't need fax, company department and other fields if you don't really need it. (:

Create Order from Cart https://docs.commercetools.com/api/projects/orders#create-order-from-cart

Before you create an Order, the Cart must have a shipping address set. The shipping address is used for tax calculation for a Cart with Platform TaxMode.

Order possible errors:

Specific Error Codes:

OutOfStock
PriceChanged
DiscountCodeNonApplicable
ShippingMethodDoesNotMatchCart
InvalidItemShippingDetails
MatchingPriceNotFound
MissingTaxRateForCountry


Change Payment state: https://docs.commercetools.com/api/projects/orders#change-paymentstate

Payment state Enums: https://docs.commercetools.com/api/projects/orders#ctp:api:type:PaymentState



Change Order state: https://docs.commercetools.com/api/projects/order-edits#change-orderstate

Order state Enums: https://docs.commercetools.com/api/projects/orders#ctp:api:type:OrderState

Create Payment: https://docs.commercetools.com/api/projects/payments

A Payment represents a series of logically connected financial transactions like reserving, charging, or refunding money.

A Payment holds information about the Payment Service Provider (PSP), the payment method used, any related transactions, and the current state of the Payment. An Order or a Cart can reference a set of Payments using the PaymentInfo object. A Payment can also reference a Customer, or an anonymous session

Workflow:
User create a cart and add to it line items (Products)
User process to Checkout Page and ready to enter Shipping Details 
(if they are not populated from his default shipping parameters)     

       and   process payment

Here could be variety of solutions how process payment depends of business cases and complexity of the application.

In the workflow below I just represent the simplest way to do it. 



2.1 Create the Order when user navigate to Checkout Page

(even if user decided to postpone his checkout - it could be possible to fetch all orders and display it to users. And highlight not finished / canceled)

2.2 Add payment information directly to the Order 

(there are such methods like Change Payment State, Add Payment ID (from Adyen as example)

2.3 Mark Order as "Complete"  when payment process successfully.



Alternative way: 

2.1 Create the Order when user navigate to Checkout Page

2.2 Create a Payment and fill all payment transaction into the Payment object

2.3 Validate that Payment is reach necessary amount and mark order as "Complete"



3. When Adyen report a success transaction perform a callback to Commercetool, mention transaction from Adyen (transaction ID) and change Order status.


Possible errors in details (that more often occures):
MissingTaxRateForCountry

Returned when the Tax Category of at least one of the lineItems, customLineItems, or shippingInfo in the Cart is missing the TaxRate matching country and state given in the shippingAddress of that Cart.

(in simple words, your Cart still doesn't have a TaxRate)

Solution:

Go to Merchant Center ==> Settings ==> Project Settings ==> open "Taxes" Tab

IF you don't have any Tax Category = add it
IF you have Tax Category, please check that it has at least one Tax Rate for the specific country (US, DE ..) 


Api error description: https://docs.commercetools.com/api/errors#ctp:api:type:MissingTaxRateForCountryError