import * as React from 'react';
import { IgridProps } from './IgridProps';
import { IItemGrd, IGrdState } from './IgridState';
import { escape } from '@microsoft/sp-lodash-subset';
import pnp from "sp-pnp-js";

import { IECBProps, IECBState } from './IECBProps';

///////////////////////////////////////////////////////////
//https://sharepoint.github.io/sp-dev-fx-controls-react/ 
//////////////////////////////////////////////////////////

//1. npm install @pnp/spfx-controls-react --save --save-exact
//2. Configure
// Once the package is installed, you will have to configure the resource file of 
// the property controls to be used in your project. You can do this by opening the config/config.json 
// and adding the following line to the localizedResources property:
// "ControlStrings": "node_modules/@pnp/spfx-controls-react/lib/loc/{locale}.js"



///////////////////////////////////////////////////////////
//context menu
///////////////////////////////////////////////////////////
import { Layer, IconButton, IButtonProps } from 'office-ui-fabric-react';
import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';



import { ListView, IViewField, SelectionMode, GroupOrder, IGrouping } from "@pnp/spfx-controls-react/lib/ListView";
import Utility from '../../lib/Utility';


export default class ContextualMenuListView extends React.Component<IECBProps, IECBState, any> {

  constructor(props: IECBProps) {
    super(props);
    this.state = {
      panelOpen: false
    };
  }

  private handleClick(source: string, event) {
    alert(`${source} clicked`);
  }

  public render(): React.ReactElement<IECBProps> {


    return (
      <div>
        <IconButton id='ContextualMenuButton1'
          text=''
          width='30'
          split={false}
          iconProps={{ iconName: 'MoreVertical' }}
          menuIconProps={{ iconName: '' }}
          menuProps={{
            shouldFocusOnMount: true,
            items: [
              {
                key: 'action1',
                name: 'Action 1',
                onClick: this.handleClick.bind(this, 'Action 1')
              },
              {
                key: 'divider_1',
                itemType: ContextualMenuItemType.Divider
              },
              {
                key: 'action2',
                name: 'Action 2',
                onClick: this.handleClick.bind(this, 'Action 2')
              },
              {
                key: 'action3',
                name: 'Action 3',
                onClick: this.handleClick.bind(this, ' Action  3')
              },
              {
                key: 'disabled',
                name: 'Disabled action',
                disabled: true,
                onClick: () => console.error('Disabled action should not be clickable.')
              }
            ]
          }} />


      </div>
    );
  }
}
