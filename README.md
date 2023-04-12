# lit-protocol-poc

## Overview

This project implements a react-based proof of concept testing the Lit Protocol platform. It consists in two views: one where the data provider submits data with a price, and a "marketplace" view where a data consumer gets an authorized signature to make a payment and subsequently decrypt the data.

## Prerequisites

* [NodeJS](htps://nodejs.org), v16.1.0+

## Initialization

    npm install
    npm run dev

Then open a browser on http://localhost:3000 and interact with the app.

Upon authorizing payment, you should copy the signature provided by the Lit Protocol and use it to make a payment to the PaymentContract as implemented on `lit-protocol-poc-contracts`. The payment contract should previously be given enough allowance to make the payment.

## Contributing

Please see the [contributing notes](CONTRIBUTING.md).
