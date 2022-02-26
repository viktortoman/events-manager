import { ExtendedPropsModel } from "./ExtendedPropsModel";

export class DialogDataModel implements IDialogDataModel {
    title?: string;
    start?: string;
    end?: string;
    extendedProps?: ExtendedPropsModel;

    constructor(data?: IDialogDataModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (this as any)[property] = (data as any)[property];
                }
            }
        }
    }
}

export interface IDialogDataModel {
    title?: string;
    start?: string;
    end?: string;
    extendedProps?: ExtendedPropsModel;
}
