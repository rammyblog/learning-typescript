// const anchor = document.querySelector('a')!
// console.log(anchor.href)
// const form = document.querySelector('form')!
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
// let docOne:HasFormatter;
// let docTwo:HasFormatter;
// docOne = new Invoice('tunde', 'web work', 250)
// docTwo = new Invoice('Mario', 'Pluming work', 200)
// let docs:HasFormatter[] =[]
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs)
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('yuhsi', 'work on the yuhsi website', 300);
// console.log(invOne.format(), invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
var me = {
    name: 'shaun',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    }
};
var greetPerson = function (person) {
    console.log('hello', person.name);
};
console.log(greetPerson(me));
console.log(me);
var form = document.querySelector('.new-item-form');
// console.log(form.children)
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
