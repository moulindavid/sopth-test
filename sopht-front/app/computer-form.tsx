'use client';

import { FormEvent } from "react"
import { ComputerService } from "./service/ComputerService"
import { Computer } from "./model/Computer"

export function ComputerForm() {
    // Handle the submit event on form submit.
    const handleSubmit = async (event: FormEvent) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form.
      const computer = new Computer(
        {
          name: "My Computer",
          boughtDate: new Date("2023-07-25"),
          boughtPrice: 10,
          annualConsumption: 350.75
        }
      )
      const created = ComputerService.getInstance().createProject([computer]);
      console.log(created);
    }

    return (
      <div>
          <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };