import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { EventModel } from "../Models/EventModel";

@Injectable({
    providedIn: 'root'
})
export class CalendarService {

    constructor(public http: HttpClient) {
    }

    getEvents(): Observable<EventModel[]> {
        return this.http.get<EventModel[]>('assets/events.json').pipe(
            map((res: any) => {
                return res;
            })
        );
    }
}
