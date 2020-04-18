import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jstool';

  from: string;
  to: string;

  public onTransfer() {
    console.log(this.from);
    this.to = this.from;
  }

}
