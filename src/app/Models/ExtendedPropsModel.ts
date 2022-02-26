export class ExtendedPropsModel implements IExtendedPropsModel {
    place?: string;
    guestsNumber?: number;
    website?: string;
    color?: string;
    type?: string;

    constructor(data?: IExtendedPropsModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (this as any)[property] = (data as any)[property];
                }
            }
        }
    }
}

export interface IExtendedPropsModel {
    place?: string;
    guestsNumber?: number;
    website?: string;
    color?: string;
    type?: string;
}
