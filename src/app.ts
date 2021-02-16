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

class Invoice{
    client:string;
    details:string;
    amount:number

    constructor(client:string, details:string, amount:number){
        this.client = client
        this.details=details
        this.amount=amount

    }
    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('mario', 'work on the mario website', 250)
const invTwo= new Invoice('yuhsi', 'work on the yuhsi website', 300)

// console.log(invOne.format(), invTwo);
let invoices: Invoice[]= []
invoices.push(invOne)
console.log(invoices);
