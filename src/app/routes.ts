import { Routes } from "@angular/router";

import {
  EventListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouterActivator,
  EventListResolver,
} from "./events/index";
import { Error404Component } from "./errors/404.component";

export const appRoutes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"],
  },
  {
    path: "events",
    component: EventListComponent,
    resolve: {
      events: EventListResolver,
    },
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouterActivator],
  },
  { path: "404", component: Error404Component },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "user", loadChildren: "./user/user.module#UserModule" },
];
