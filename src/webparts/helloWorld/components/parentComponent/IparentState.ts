import { IItemGrd } from './../grdComponent/IgridState';

export interface IDetailForm {
    ID?: number;
    slNo?: number;
    pId?: number;
    noOfDetailsForm?: number;
    /////////////////////////////
    //PROJECT FIELDS
    /////////////////////////////
    ContentTypeId?: "";
    rpt_fileData?: IFileData[];
    Part?: IPart;
    OrderAccepted?: IOrderAccepted;
    CommittedLandDatebyYuyama?: string;
    Tracking?: string;
}

export interface IFileData {  
    Id: number;  
    temp_id?: number;
    rpt_fileContent?: any[];
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
    tempSlNo?: number;
    pId?: number;
    drpOptions?: Array<any>;
    selectedItem?: { key: string | number | undefined };
    items: IItemGrd;
    itemDetailData?: IDetailForm[];
    rpt_Attachments?: IFileData[];
}

