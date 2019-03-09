import { IPart, IOrderAccepted } from './IchildState';

export interface IchildProps {
    context: any;
    addEditId?: number;
    /////////////////////////////
    //PROJECT FIELDS
    /////////////////////////////
    attachments?: IAttachment;
    part?: IPart;
    orderAccepted?: IOrderAccepted;
    committedLandDatebyYuyama?: string;
    tracking?: string;
}

export interface IAttachment {
    Id?: number;
    typeOfAttachment?: string;
    fileContent?: any[];
}