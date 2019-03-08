export interface IItemGrd {
    Id?: number;
    Company?: string;
    Contact?: string;
    //Country?: ICountry;
    fileContent?: any;
    isEditable?: boolean;
}


export interface IGrdState {
    editCollectionItems?:any[];
    showModal:boolean;
    addEditId:number;
    disabled: boolean;
    checked: boolean;
    drpOptions: Array<any>;
    ID?: number;
    Contact_x0020_Name?:string;
    CSN_x0020__x0023_?:string;
    Ship_x0020_To_x0020_Address?:string;
    items: IItemGrd[];
    pFileContent?: any;
    editItem?: IItemGrd;
    editLink?:string;
    ServerRelativeUrl?:string; 
    addEditButtonText?: string;   
}