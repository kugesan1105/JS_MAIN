import { Person } from './person.js';


export function promote() {
    console.log('Promoted');
}



export default class Employee extends Person {
    constructor(name, position) {
      super(name);
      this.position = position;
    }
  
    sayPosition() {
      console.log(`I'm ${this.name} , a ${this.position}`);
    }
  }