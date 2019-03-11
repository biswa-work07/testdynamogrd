export interface IItemGrd {
    isEditable?: boolean;
    /////////////////////////////
    //PROJECT FIELDS
    /////////////////////////////
    ID?:number;
    Id?: number;
    fileContent?: any[];
    fileAttachment?: any[];
    ContentTypeId?: string;
    Customer_x0020_Name?: string;
    Large_x0020_Canister_x0020_Qty?: string;
    CSN?: string;
    Display_x0020_Name?: string;
    Request_x0020_Date?: string;
    Committed_x0020_Land_x0020_Dateby_x0020_Yuyama?: string;
    Request_x0020_Status?: string;
    Tracking_x0020_Noenteredby_x0020_Doug?: string;
    previousstatus?: string;
    GUID?: string;
    Sales_x0020_Sparepartorder_x0020_No?: string;
    xmlFullUrl?: string;
    xmlRelativeUrl?: string;
    xmlFileName?:string;
}


export interface IGrdState {
    editSelectedCollectionItems?: any[];// used for multi select grid
    showModal: boolean;
    addEditId: number;
    disabled: boolean;
    checked: boolean;
    drpOptions: Array<any>;
    ID?: number;
    items: IItemGrd[];
    pFileContent?: any;
    editItem?: IItemGrd;
    editLink?: string;   
    addEditButtonText?: string;
}