---
sidebar_position: 1
---

# 4.1. Introduction

A payment provider, or a payment gateway, is a service that authorizes credit card or direct payments processing for e-businesses, online retailers, or traditional brick and mortar stores. They act as a middleman between merchants and financial institutions, securely transmitting payment information from the customer to the merchant's bank account.

Adyen is one such global payment provider that allows businesses to accept e-commerce, mobile, and point-of-sale payments. It offers a single platform to accept payments anywhere in the world through any sales channel. Adyen supports all key payment methods and is known for its transparency in pricing and lack of hidden costs.

Adyen's services include online payments, terminal payments, and platform payments. It also provides risk management and local acquiring. Adyen is used by many leading companies, including Uber, Spotify, and eBay. It is praised for its smooth integration, flexibility, and the ability to meet the unique needs of its clients.

In essence, Adyen is a comprehensive solution that allows businesses to manage and optimize their payment processes efficiently, providing a seamless experience for both the business and its customers.

## What's this module about?

This guide will introduce you to an important component in the ecommerce industry called Payment Service Provider (Stripe/Adyen).

This module is about integrating the Adyen payment provider with the Commercetools platform. It's designed to equip engineers with the knowledge and skills they need to effectively implement and manage online payments for e-commerce applications.

The module will cover the following key areas:

Understanding Adyen and Commercetools: An introduction to Adyen as a payment provider and Commercetools as an e-commerce platform. This includes their key features, benefits, and why they are often used together.

Integration Basics: A walkthrough of how to integrate Adyen with Commercetools. This includes setting up the necessary accounts and configuring the necessary settings.

Payment Processing: Detailed coverage of how to process payments using Adyen on the Commercetools platform. This includes creating orders, handling payment transactions, and validating payments.

By the end of this module, engineers should be comfortable with using Adyen and Commercetools together to handle online payments for e-commerce applications.

## What you will do?

During this task, you'll establish your Adyen account and project, design your website's payment processing flow, integrate your website with Payment Service Provider, manage Payment state and Order state based on result of payment transactions. 

### What is Digital Payment?

Digital Payments are the payments/transactions which doesn’t involve exchange of hard cash. Instead, it involves online mode for the exchange of funds. Digital payments involve transfer of money from one bank account to another using digital devices e.g. mobile and computer/laptops. The payer and payee can be two individuals or just merchant/business and customer.  Both the parties involved in a transaction should have bank accounts, online banking platform, a device to make payment, payment gateway and payment processor or Payment service provider.


Snippet:

 - Payment gateways are the consumer-facing interfaces which connects the customer's bank to the merchant account and facilitates the actual movement of money from customer’s bank to merchant’s bank.
 - Payment processor uses the information collected by payment gateway debiting one account and crediting the other.
 - Payment service providers which are also known as merchant service providers or PSPs are the third parties that help merchants accept payments.

## Prerequisites

- Integration with ECommerce engine should be implemented [Module 3](/docs/3-integration-with-ecom)
- The BFF server should be implemented [Module 2](/docs/2-BFF-and-new-frontend)
- StoreFront application should be configured [Module 1: StoreFront](/docs/basic-magento-store/practical-task-5-configure-storeFront)
