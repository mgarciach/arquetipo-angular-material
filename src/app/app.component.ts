import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  menu = [
    { to: [""], label: "Home" },
    { to: ["/modulo1/crud"], label: "Crud" }
  ];
}
