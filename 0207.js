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

  sum: function(accumulator, item) {
    return accumulator + item.amount;
  },

  totalDue: function () {
    return this.unpaid.reduce(this.sum, 0);
  },

  totalPaid: function () {
    return this.paid.reduce(this.sum, 0);
  },
};

/* eslint-disable no-magic-numbers */

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);
console.log(invoices);
console.log(invoices.totalDue());
console.log(invoices.totalPaid());
console.log("");

invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");
console.log(invoices);
console.log(invoices.totalDue());
console.log(invoices.totalPaid());
