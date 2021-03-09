import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Employee } from "./app.employee";
import { Department } from "./Department";

@Component({
  selector: "emp-app",
  templateUrl: "./app.empcomponent.html"
})
export class AppEmpComponent {
  emp: Employee = {
    eId: null,
    eName: null,
    eSalary: null,
    eType: null,
    eDepartment: null
  };

  department: Department[] = [
    { dId: 1, dName: "Java" },
    { dId: 2, dName: "Android" },
    { dId: 3, dName: "MainFrame" },
    { dId: 4, dName: "Cloud" }
  ];

  getData(empForm: NgForm): void {
    console.log(empForm.value);
  }
}
