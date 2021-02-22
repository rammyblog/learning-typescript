// const anchor = document.querySelector('a')!
// console.log(anchor.href)
// const form = document.querySelector('form')!


import { number } from 'prop-types'
import {Invoice} from './classes/Invoice.js'
import {Payment} from './classes/Payment.js'
import {HasFormatter} from './interfaces/HasFormatter.js'

// let docOne:HasFormatter;
// let docTwo:HasFormatter;


// docOne = new Invoice('tunde', 'web work', 250)
// docTwo = new Invoice('Mario', 'Pluming work', 200)

// let docs:HasFormatter[] =[]
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs)



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

const form = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault()
    let doc:HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    console.log(doc);
    
})