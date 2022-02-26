import { Component, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from "@fullcalendar/angular";
import { CalendarService } from "./Services/calendar.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { EventDialogComponent } from "./Components/event-dialog/event-dialog.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    @ViewChild('calendar') calendar: FullCalendarComponent | undefined;

    calendarOptions: CalendarOptions = {
        initialView: window.innerWidth < 765 ? 'timeGridDay' : 'dayGridMonth',
    };

    constructor(
        private calendarService: CalendarService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.calendarService.getEvents().subscribe((events: any) => {
            this.calendarOptions = {

                views: {
                    dayGrid: {
                        dayMaxEventRows: 4,
                        titleFormat: { year: 'numeric', month: 'long' }
                    }
                },
                headerToolbar: {
                    left: 'prev',
                    center: 'title',
                    right: 'next',
                },
                dayMaxEventRows: true,
                events: events,
                eventClick: this.handleEventClick.bind(this),
                moreLinkContent: function(args) {
                    return '+'+args.num+' more events';
                }
            };
        })
    }

    handleEventClick(info: any) {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;
        dialogConfig.width = '50%';
        dialogConfig.panelClass = 'my-dialog';

        dialogConfig.data = {
            title: info.event.title,
            start: info.event.start,
            end: info.event.end,
            extendedProps: info.event.extendedProps
        };

        this.dialog.open(EventDialogComponent, dialogConfig);
    }
}
