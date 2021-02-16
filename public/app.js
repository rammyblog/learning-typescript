// const anchor = document.querySelector('a')!
// console.log(anchor.href)
// // const form = document.querySelector('form')!
// const form = document.querySelector('.new-item-form') as HTMLFormElement
// // console.log(form.children)
import { Invoice } from './classes/Invoice.js';
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
