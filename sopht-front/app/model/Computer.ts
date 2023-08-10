export class Computer {

    public readonly id: string;
    public name: string;
    public boughtDate: Date;
    public boughtPrice: number;
    public annualConsumption: number;
    
    constructor(init?: Partial<Computer>) {
        Object.assign(this, init);
    }
}

