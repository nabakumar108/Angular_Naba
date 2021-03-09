import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "child-app",
  templateUrl: "./app.child.html"
})
export class ChildComponent {
  @Input()
  inChild: String;

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  onclick(): void {
    this.notify.emit("Message from Child");
  }
}
