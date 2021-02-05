import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import {
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouterActivator,
  EventListResolver,
} from "./events/index";
import { EventsAppComponent } from "./events-app.component";
import { NavBarComponent } from "./nav/navBar.component";
import { ToastrService } from "./common/toastr.service";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouterActivator,
    EventListResolver,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You have not saved this event yet, are you sure you want to leave?"
    );
  }
  return true;
}
