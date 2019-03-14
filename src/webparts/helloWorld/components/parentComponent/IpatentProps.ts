
import { IGrdState,IItemGrd } from '../grdComponent/IgridState';
export interface IpatentProps {
    tempSlNo?:number;
    xmlFullUrl?: string;
    xmlRelativeUrl?: string;
    xmlFileName?:string;
    addEditId: number;
    context: any;
    editSelectedCollectionItems?: any[];
    edtParentItemGrdData?: IItemGrd;
}