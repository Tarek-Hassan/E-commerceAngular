import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div>
                  <p> this notification in website</p> 
            </div>`,
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
