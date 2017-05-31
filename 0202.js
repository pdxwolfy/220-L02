"use strict";

var invoices = {
  unpaid: [],

  add: function (clientName, amountOwed) {
    this.unpaid.push({
      name:   clientName,
      amount: amountOwed,
    });
  },
};

/* eslint-disable no-magic-numbers */

console.log(invoices);

invoices.add("Starbucks", 300);
console.log(invoices);

invoices.add("Launch School", 1600);
console.log(invoices);

invoices.add("Hardware store", 5612);
console.log(invoices);
