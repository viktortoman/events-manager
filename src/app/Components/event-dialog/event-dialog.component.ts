import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogDataModel } from "../../Models/DialogDataModel";
import { ExtendedPropsModel } from "../../Models/ExtendedPropsModel";

@Component({
    selector: 'app-event-dialog',
    templateUrl: './event-dialog.component.html',
    styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent implements OnInit {

    data: DialogDataModel = new DialogDataModel();
    extendedProps: ExtendedPropsModel = new ExtendedPropsModel();

    constructor(
        private dialogRef: MatDialogRef<EventDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: any
    ) {
        this.data = data;
        this.extendedProps = data.extendedProps;
    }

    ngOnInit(): void {}

    close() {
        this.dialogRef.close();
    }

    formatDate(start: any, end: any) {
        let result;
        let d = new Date(start),
            day = d.getDate().toString(),
            year = d.getFullYear();

        let month = start.toLocaleString('en', { month: 'long' });

        if (month.length < 2) {
            month = '0' + month;
        }

        if (day.length < 2) {
            day = '0' + day;
        }

        if (end) {
            let endDate = new Date(end),
                endDay = endDate.getDate() - 1;

            result = day + '-' + endDay + ' ' + month + ' ' + year;
        } else {
            result = day + '. ' + month + ' ' + year;
        }

        return result;
    }

}
