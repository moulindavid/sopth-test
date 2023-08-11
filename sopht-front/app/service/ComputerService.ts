import axios from "axios";
import { Computer } from "../model/Computer";

export class ComputerService {
    //TODO: env variable.

    private apiUrl: string;

    constructor() {
        this.apiUrl = "http://localhost:9999/computers";
    }
    private static instance?: ComputerService;
    public static getInstance(): ComputerService {
        if (!ComputerService.instance) {
            ComputerService.instance = new ComputerService();
        }
        return ComputerService.instance;
    }

    public createProject(computers: Computer[]): Promise<Computer> {
        if (!computers) {
            return Promise.reject(new Error('The computer is mandatory.'));
        }
        const body = JSON.parse(JSON.stringify(computers));
        console.log(body);
        //TODO: handle list creation
        return axios.post(this.apiUrl, body).then((res) => res.data[0]);
    }

    public getConsumption(year: number, month: number): Promise<number> {
        return axios.get(this.apiUrl + "/consumptions", {params: { year: year, month: month }}).then((res) => res.data);
    }

    public getExpense(year: number, month: number): Promise<number> {
        return axios.get(this.apiUrl + "/expenses", {params: { year: year, month: month }}).then((res) => res.data);
    }
}