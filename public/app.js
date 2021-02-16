"use strict";
// const anchor = document.querySelector('a')!
// console.log(anchor.href)
// // const form = document.querySelector('form')!
// const form = document.querySelector('.new-item-form') as HTMLFormElement
// // console.log(form.children)
// // inputs
// const type = document.querySelector('#type') as HTMLSelectElement
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement
// const details = document.querySelector('#details') as HTMLInputElement
// const amount = document.querySelector('#amount') as HTMLInputElement
// form.addEventListener('submit', (e:Event)=>{
//     e.preventDefault()
//     console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
// })
// Classes
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('yuhsi', 'work on the yuhsi website', 300);
// console.log(invOne.format(), invTwo);
var invoices = [];
invoices.push(invOne);
console.log(invoices);
