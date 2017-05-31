"use strict";

var invoices = {
  paid: [],
  unpaid: [],

  add: function (clientName, amountOwed) {
    this.unpaid.push({
      name:   clientName,
      amount: amountOwed,
    });
  },

  payInvoice: function (clientName) {
    var newUnpaid = [];
    var that = this;

    this.unpaid.forEach(function (invoice) {
      if (invoice.name === clientName) {
        that.paid.push(invoice);
      } else {
        newUnpaid.push(invoice);
      }
    });

    this.unpaid = newUnpaid;
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
console.log("");

invoices.payInvoice("Moonbeam Interactive");
console.log(invoices);
console.log(invoices.totalDue());
