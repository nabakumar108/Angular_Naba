import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  registerForm = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      zip: new FormControl()
    })
  });

  onSubmit(): void {
    console.log(this.registerForm.value);
  }
}
