//We need to import this decorator to build app the component
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
import { IEvent } from "./shared";

@Component({
  template: `
    <div>
      <h1>Upcoming Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <event-thumbnail
            (click)="handleThumbnailClick(event.name)"
            [event]="event"
          ></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventListComponent implements OnInit {
  events: IEvent[];
  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //getEvents() is returning an observable, so in order to get the data we need to subscribe it
    this.events = this.route.snapshot.data["events"];
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
