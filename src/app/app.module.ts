import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppEmpComponent } from "./app.empcomponent";
import { ChildComponent } from "./app.child";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, AppEmpComponent, ChildComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
// Tempplate driven -> module-> FormsModule in module.ts
