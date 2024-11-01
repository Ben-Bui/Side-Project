import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter{
    constructor(
        readonly recipients: string,
        private details: string,
        public amount: number,
    ){}

    format(){
        return `${this.recipients} is owed $${this.amount} for ${this.details}`;
    }
}