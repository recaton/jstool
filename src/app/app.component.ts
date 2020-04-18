import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jstool';

  constructor(private datePipe: DatePipe) {}

  current: number;
  from: string;
  to: string;

  public onTransfer() {
    this.current = new Date().valueOf();
    console.log(this.from);
    this.to = this.datePipe.transform(new Date(Number(this.from)), 'yyyy-MM-dd HH:mm:ss.SSS');
  }

}
