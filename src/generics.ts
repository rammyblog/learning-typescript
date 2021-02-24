const addUID = <T extends object>(obj:T) =>{
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}

let docOne = addUID({name:'yoshi', age:40})
console.log(docOne)


interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T
}

const docThree: Resource<string> ={
    uid:1,
    resourceName: 'person',
    data: 'name'
}

const docFour: Resource<string[]> ={
    uid:1,
    resourceName: 'person',
    data: ['name']
}

