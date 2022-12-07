import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  
  @Input() alertId? : string = '';
  @Input() alertRole? : string = 'alert';
  @Input() alertType? : string = 'alert-info';

  public alertClass : string = 'alert ';

  ngOnInit() {
    this.alertClass = this.alertClass + this.alertType;
  }
}