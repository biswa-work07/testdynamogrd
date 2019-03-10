import { IItemGrd } from './../grdComponent/IgridState';

export interface IDetailForm {
    ID?: number;
    slNo?: number;
    pId?: number;
    noOfDetailsForm?:number;
    /////////////////////////////
    //PROJECT FIELDS
    /////////////////////////////
    ContentTypeId?: "";
    rpt_fileContent?: any[];
    Part?: IPart;
    OrderAccepted?: IOrderAccepted;
    CommittedLandDatebyYuyama?: string;
    Tracking?: string;
}

export interface IPart {
    Id?: number;
    PartDougM?: string;
}

export interface IOrderAccepted {
    Id?: number;
    PartDougM?: string;
}


export interface IparentState {
    pId?: number;
    drpOptions?: Array<any>;
    selectedItem?: { key: string | number | undefined };
    items: IItemGrd;
    itemDetailData?: IDetailForm[];
}

