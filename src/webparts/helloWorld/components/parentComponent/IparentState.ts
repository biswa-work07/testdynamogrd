export interface IItemGrd {
    Id?: number;
    Company?: string;
    Contact?: string;
    //Country?: ICountry;
    fileContent?: any;
    isEditable?: boolean;
}

export interface ICountry {
    Id?: number;
    CountryName?: string;
}

export interface IparentState {    
    pId?: number;
    disabled: boolean;
    checked: boolean;
    drpOptions: Array<any>;
    selectedItem?: { key: string | number | undefined };
    items: IItemGrd[];
    editItem?: IItemGrd;
}

export interface IGrdState {
    editCollectionItems?: any[];
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
    ServerRelativeUrl?: string;
    addEditButtonText?: string;
    /////////////////////////////
    //PROJECT FIELDS
    /////////////////////////////
    ContentTypeId ?: string;
    Customer_x0020_Name?: string;
    Large_x0020_Canister_x0020_Qty?: string;
    CSN?:string;
    Display_x0020_Name?: string;
    Request_x0020_Date?: string;
    Committed_x0020_Land_x0020_Dateby_x0020_Yuyama?: string;
    Request_x0020_Status?: string;
    Tracking_x0020_Noenteredby_x0020_Doug?: string;
    previousstatus?: string;
    GUID?: string;
    Sales_x0020_Sparepartorder_x0020_No?:string;
}