"use strict";

var invoices = {
  unpaid: [],

  add: function (clientName, amountOwed) {
    this.unpaid.push({
      name:   clientName,
      amount: amountOwed,
    });
  },

  totalDue: function () {
    return this.unpaid.reduce(
      function sum(accumulator, item) {
        return accumulator + item.amount;
      },
      0
    );
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

console.log(invoices.totalDue());
