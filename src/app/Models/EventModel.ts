import { ExtendedPropsModel } from "./ExtendedPropsModel";

export class EventModel implements IEventModel {
    id!: number;
    title!: string;
    date?: string;
    start?: string;
    end?: string;
    extendedProps?: ExtendedPropsModel[];

    constructor(data?: IEventModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (this as any)[property] = (data as any)[property];
                }
            }
        }
    }
}

export interface IEventModel {
    id: number;
    title: string;
    date?: string;
    start?: string;
    end?: string;
    extendedProps?: ExtendedPropsModel[];
}
