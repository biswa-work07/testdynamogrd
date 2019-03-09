export interface IItem {
    Id?: number;
    Company?: string;
    Contact?: string;
    isEditable?: boolean;

    /////////////////////////////
    //PROJECT FIELDS
    /////////////////////////////
    fileContent?: any[];
    Part?: IPart;
    OrderAccepted?: IOrderAccepted;
    CommittedLandDatebyYuyama?:string;
    Tracking?:string;
}

export interface IPart {
    Id?: number;
    PartDougM?: string;
}

export interface IOrderAccepted {
    Id?: number;
    PartDougM?: string;
}


export interface IchildState {
    disabled: boolean;
    checked: boolean;
    drpOptions: Array<any>;
    selectedItem?: { key: string | number | undefined };
    items: IItem[];
    editItem?: IItem;
}