'use client';

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/table";
import { ComputerService } from "../service/ComputerService";
import { useCallback, useState } from "react";
import Link from "next/link";

type Consumption = {
  key: string,
  month: string,
  consumption: number,
}

type Price = {
  key: string,
  month: string,
  expense: number,
}


const monthMap = new Map<number, string>([
  [1, "January"],
  [2, "February"],
  [3, "March"],
  [4, "April"],
  [5, "May"],
  [6, "June"],
  [7, "July"],
  [8, "August"],
  [9, "September"],
  [10, "October"],
  [11, "November"],
  [12, "December"],
]);
const columnsConsumption = [{
  key: "month",
  label: "Month",
},{
  key: "consumption",
  label: "Consumptions",
}]
const columnsExpenses = [{
  key: "month",
  label: "Month",
},{
  key: "expense",
  label: "Expenses",
}]
export default function Dashboard() {
  const [consumptions, setConsumptions] = useState<Consumption[]>([]);
  const [expenses, setExpenses] = useState<Price[]>([]);


  const refresh = useCallback( async (event: any) => {
    const yearConsumptions: Consumption[] = []
    const yearPrices: Price[] = []

    event.preventDefault();

    for (let i = 1; i <= 12; i++) {
      yearConsumptions.push( {key: i.toString(), month: monthMap.get(i) ?? "", consumption: await ComputerService.getInstance().getConsumption(event.target[0].value as number, i)})
      yearPrices.push( {key: i.toString(), month: monthMap.get(i) ?? "", expense: await ComputerService.getInstance().getExpense(event.target[0].value as number, i)})
    }

   setConsumptions(yearConsumptions)
   setExpenses(yearPrices)
  }, [])



  //TODO: refresh 
return (
  <div>
    <form onSubmit={refresh}>
      <label htmlFor="first">Year</label>
      <input type="year" id="year" name="year" />
      <button type="submit">Refresh</button>
    </form>
    <Table aria-label="Consumption table">
      <TableHeader>
        {columnsConsumption.map((column) =>
          <TableColumn key={column.key}>{column.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {consumptions.map((consumption) =>
          <TableRow key={consumption.key}>
            {(columnKey) => <TableCell>{getKeyValue(consumption, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    <Table aria-label="Expenses table">
      <TableHeader>
        {columnsExpenses.map((column) =>
          <TableColumn key={column.key}>{column.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {expenses.map((expense) =>
          <TableRow key={expense.key}>
            {(columnKey) => <TableCell>{getKeyValue(expense, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>


        <Link
        href="/"
        type="button"
    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              GO BACK
            </Link>
  </div>
  );
}