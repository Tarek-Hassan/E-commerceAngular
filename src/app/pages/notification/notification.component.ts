import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div>
                  <p> this notification in website</p> 
            </div>`,
  styles: [`div{ margin: 10 px 0px; background-color:#FAD7A0;text-align:center}`]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
