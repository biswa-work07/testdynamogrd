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

