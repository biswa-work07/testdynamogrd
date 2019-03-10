import * as React from 'react';
import { IchildProps } from './IchildProps';
import { IItem, IPart, IchildState } from './IchildState';
import { escape } from '@microsoft/sp-lodash-subset';
import pnp from "sp-pnp-js";

import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';


export default class ChildComponent extends React.Component<IchildProps, IchildState, any> {

    constructor(props: IchildProps) {
        super(props);
    
        
    }

    public componentDidMount() {
        
    }


    public render(): React.ReactElement<IchildProps> {


        const { addEditId, context } = this.props;


        return (
            <div>
                <b>Hi, I am child. {addEditId}</b>
                <table>
                    <tr>
                        <td>Part #</td>
                        <td>
                            Order Accepted by Yuyama - Y/N?
                                    </td>
                        <td>
                            Committed Land date by Yuyama
                                    </td>
                        <td>
                            Tracking #
                                    </td>
                    </tr>
                    <tr>
                        <td>
                            <TextField label="With error message" errorMessage="Error message" />
                        </td>
                        <td>
                            <TextField label="With error message" errorMessage="Error message" />
                        </td>
                        <td>
                            <TextField label="With error message" errorMessage="Error message" />
                        </td>
                        <td>
                            <TextField label="With error message" errorMessage="Error message" />
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}
