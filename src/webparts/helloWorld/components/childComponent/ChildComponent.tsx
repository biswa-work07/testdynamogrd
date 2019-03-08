import * as React from 'react';
import { IchildProps } from './IchildProps';
import {IItem,ICountry,IchildState} from './IchildState';
import { escape } from '@microsoft/sp-lodash-subset';
import pnp from "sp-pnp-js";


export default class ChildComponent extends React.Component<IchildProps,IchildState, any> {

    public render(): React.ReactElement<IchildProps> {
        return (
            <div>
                Hi, I am child.
            </div>
        );
    }
}
