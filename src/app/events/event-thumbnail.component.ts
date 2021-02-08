import { Component, Input } from "@angular/core";
import {IEvent} from './shared/index'

@Component({
  selector: "event-thumbnail",
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <h5>Date: {{ event?.date }}</h5>
      <div [ngSwitch]="event?.time">
        <h5>Time: {{ event?.time }}</h5>
        <span *ngSwitchCase="'8:00 am'">Early start</span>
        <span *ngSwitchCase="'10:00 am'">Late start</span>
        <span *ngSwitchDefault>Normal start</span>
      </div>
      <h5>Price: \${{ event.price }}</h5>
      <h5 *ngIf="event.location">Location: {{ event.location.city }}</h5>
    </div>
  `,
  styles: [
    `
      .thumbnail {
        min-height: 210px;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
  getStartTimeStyle(): any {
    if (this.event && this.event.time === "8:00 am") {
      return {
        color: "#003300",
        fontWeight: "bold",
      };
    }
    return {};
  }
}
