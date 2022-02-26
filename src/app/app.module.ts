import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarService } from "./Services/calendar.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { EventDialogComponent } from './Components/event-dialog/event-dialog.component';
import { MatButtonModule } from "@angular/material/button";

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
]);

@NgModule({
    declarations: [
        AppComponent,
        EventDialogComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FullCalendarModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule
    ],
    providers: [
        CalendarService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
