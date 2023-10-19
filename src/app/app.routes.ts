import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { FlightFormComponent } from "./flight-form/flight-form.component";
import { ErrorComponent } from "./error/error.component";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch:"full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "flight-registration",
        component: FlightFormComponent
    },
    {
        path: "**",
        component: ErrorComponent
    }
]
