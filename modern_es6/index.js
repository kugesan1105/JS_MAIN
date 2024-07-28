
import Employee,{promote} from './employee.js';


const employee = new Employee('Jane', 'Developer');
employee.sayHello(); // Hello, Jane
employee.sayPosition(); // I'm Developer
promote(); // Promoted