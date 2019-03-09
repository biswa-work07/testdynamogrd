import * as React from 'react';
import { IpatentProps } from './IpatentProps';
import { IItemGrd, ICountry, IparentState } from './IparentState';

import { escape } from '@microsoft/sp-lodash-subset';
import pnp from "sp-pnp-js";

import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';


import ChildComponent from './../childComponent/ChildComponent';



export default class ParentComponent extends React.Component<IpatentProps, IparentState, any> {


    public render(): React.ReactElement<IpatentProps> {

        //const { pId } = this.state;
        const { addEditId, context, editCollectionItems, edtParentItemGrdData } = this.props;

        return (
            <div>
                <b> Hi, I am Parent .</b>


                {
                    editCollectionItems.length > 0 ?
                        (
                            editCollectionItems.map((item) => <div>Edit Mode :
                           <span className='indent' key={item}>{item["ID"]},</span>
                            </div>)
                        )
                        :
                        (
                            <div>Add mode</div>
                        )
                }




                <table>
                    <tr>
                        <td>

                        </td>
                        <td>
                            <table>
                                <tr>
                                    <td>Requested By : </td>
                                    <td>

                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>Account Name</td>
                        <td>
                            <TextField label="With error message" value={edtParentItemGrdData.Customer_x0020_Name} errorMessage="Error message" />
                        </td>
                    </tr>
                    <tr>
                        <td>CSN #</td>
                        <td>
                            <TextField label="With error message" value={edtParentItemGrdData.CSN} errorMessage="Error message" />
                        </td>
                    </tr>
                    <tr>
                        <td>Ship To Address</td>
                        <td>
                            <TextField label="With error message" errorMessage="Error message" />
                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                    </tr>

                    <tr>
                        <td>
                            <ChildComponent context={context} addEditId={addEditId}></ChildComponent>
                        </td>
                    </tr>
                </table>

                <hr></hr>
            </div>
        );
    }
}
