import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { EventsAppComponent } from "./events-app.component";
import { EventListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/navBar.component";
import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { appRoutes } from "./routes";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
