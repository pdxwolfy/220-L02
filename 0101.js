"use strict";

/* global show, log, theEnd */

var me = {
  firstName: "Jane",
  lastName:  "Doe",
};

var friend = {
  firstName: "John",
  lastName:  "Smith",
};

var mother = {
  firstName: "Amber",
  lastName:  "Doe",
};

var father = {
  firstName: "Shane",
  lastName:  "Doe",
};

var people = {
  collection: [me, friend, mother, father],

  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    this.collection.push(person);
  },

  fullName: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    show(person.firstName + " " + person.lastName);
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return undefined;
    }

    return this.collection[this.getIndex(person)];
  },

  getIndex: function(person) {
    var index = -1;
    this.collection.forEach(function compare(comparator, arrayIndex) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = arrayIndex;
      }
    });

    return index;
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== "string";
  },

  remove: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    var index = this.getIndex(person);
    if (index !== -1) {
      this.collection.splice(index, 1);
    }
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    var existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

console.log(people.remove(mother));
console.log(people.remove({ firstName: "Pete", lastName: "Hanson" }));
console.log(people.getIndex({ firstName: "Pete", lastName: "Hanson" }));
console.log(people.getIndex(mother));
console.log(people);
