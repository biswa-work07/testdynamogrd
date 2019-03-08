export interface IItem {
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

export interface IchildState {
    disabled: boolean;
    checked: boolean;
    drpOptions: Array<any>;
    selectedItem?: { key: string | number | undefined };
    items: IItem[];
    editItem?: IItem;
}