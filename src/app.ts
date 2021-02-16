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

import { number } from 'prop-types'
import {Invoice} from './classes/Invoice.js'

const invOne = new Invoice('mario', 'work on the mario website', 250)
const invTwo= new Invoice('yuhsi', 'work on the yuhsi website', 300)

// console.log(invOne.format(), invTwo);
let invoices: Invoice[]= []
invoices.push(invOne)
invoices.push(invTwo)
invoices.forEach(inv  => {
    console.log(inv.client, inv.amount, inv.format());
    
})


// Interfaces
interface IsPerson{
    name: string;
    age: number;
    speak(a:string):void;
    spend(a:number):number;

}

const me:IsPerson = {
    name:'shaun',
    age:30,
    speak(text:string):void {
        console.log(text);
        
    },
    spend(amount:number):number{
        console.log('I spent', amount)        
        return amount

    }
}

const greetPerson = (person:IsPerson)=>{
    console.log('hello', person.name);
    

}
console.log(greetPerson(me));

console.log(me);

