if (window.PaymentRequest) {
  // If it is supported on the user's browser

  // Payment request object
  const supportedPaymentMethods =
    [
      {
        supportedMethods: ['basic-card']
      }
    ];
  
  // Payment details (i.e. cost/currency)
  const paymentDetails = {
    total: {
      label: 'Total Cost',
      amount: {
        currency: 'GBP',
        value: 30
      }
    }
  }

  // Custom options
  const options = {}  

  // Create request
  const paymentRequest = new PaymentRequest(
    supportedPaymentMethods, paymentDetails, options
  );

  paymentRequest.show()
    .then(payment => console.log(payment))
    .catch(error => console.error(error));
}
else {
  // Fallback to your other implementation
}