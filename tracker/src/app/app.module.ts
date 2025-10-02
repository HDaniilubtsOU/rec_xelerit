import { NgModule } from "@angular/core";
import { KalendarzComponent } from "./components/kalendarz/kalendarz.component";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@NgModule({
    declarations: [
        AppComponent,
        KalendarzComponent,
        SidebarComponent
    ],
})
export class AppModule {}
