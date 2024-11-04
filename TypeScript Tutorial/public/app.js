import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
//input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//Tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;
// let student: [string, number];
// student: [12345, 'ken'];
// student = ['chun-li', 223423];
// // Enums
// enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
// interface Resource<T> {
//     uid: number;
//     resourceType: ResourceType;
//     data: T;
// }
// const docOne: Resource<object> = {
//     uid : 1,
//     resourceType: ResourceType.BOOK,
//     data: {title: ' name of the wind'}
// }
// const docTwo: Resource<object> = {
//     uid : 10,
//     resourceType: ResourceType.PERSON,
//     data: { name: 'yoshi'}
// }
// console.log(docOne, docTwo);
// Generics
// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }
// let docOne = addUID({name: 'yoshi' , age: 40});
// // let docTwo = addUID('hello')
// console.log(docOne.age);
// //with interface
// interface Resource <T>{
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: {name: 'shaun'}
// }
// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'shopping List',
//     data : ['bread', 'milk', 'toilet roll']
// }
// console.log(docThree,docFour)
