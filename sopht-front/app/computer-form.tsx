'use client';

import { ComputerService } from "./service/ComputerService"
import { Computer } from "./model/Computer"
import Link from "next/link";

export function ComputerForm() {
    // Handle the submit event on form submit.
    const handleSubmit = async (event: any) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
      console.log(event.target)
      const computer = new Computer(
        {
          name: event.target[0].value,
          boughtDate: event.target[1].value,
          boughtPrice: event.target[2].value,
          annualConsumption: event.target[3].value
        }
      )
     ComputerService.getInstance().createProject([computer])
    }


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="first" required />
    
          <label htmlFor="boughtDate">Bought Date</label>
          <input type="date" id="boughtDate" name="boughtDate" required />

          <label htmlFor="boughtPrice">Bought Price </label>
          <input type="number" id="boughtPrice" name="first" required />

          <label htmlFor="annualConsumption">Annual Consumption</label>
          <input type="number" id="annualConsumption" name="annualConsumption" required />
    
          <button type="submit">Submit</button>
        </form>

        <Link
        href="/"
        type="button"
    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              OK
            </Link>
      </div>
    )
  };