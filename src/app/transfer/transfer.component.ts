import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }

  from: string;
  to: string;

  public onTransfer() {
    this.to = this.datePipe.transform(new Date(Number(this.from)), 'yyyy-MM-dd HH:mm:ss.SSS');
  }

}
