import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  styleUrl: './alert.component.css',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
  @Input() alertId? : string;
  @Input() alertRole? : string = 'alert';
  @Input() alertType? : string = 'alert-info';

  public alertClass : string = 'alert';

  ngOnInit() {
    this.alertClass =
      `${this.alertClass} ${this.alertType}`;
  }
}