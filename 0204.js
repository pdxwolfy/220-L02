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

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);
console.log(invoices);
console.log(invoices.totalDue());
