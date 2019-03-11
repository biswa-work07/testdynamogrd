import * as React from 'react';
import { IgridProps } from './IgridProps';
import { IItemGrd, IGrdState } from './IgridState';
import { escape } from '@microsoft/sp-lodash-subset';
import pnp from "sp-pnp-js";
import { Button, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ConsoleListener, Web, Logger, LogLevel, ODataRaw } from "sp-pnp-js";
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

import { Modal } from 'office-ui-fabric-react/lib/Modal';

import ParentComponent from '../parentComponent/ParentComponent';

import "../Modal.Basic.Example.scss";

import {
  SPHttpClient,
  SPHttpClientResponse,
  SPHttpClientConfiguration
} from "@microsoft/sp-http";
import Utility from './../../lib/Utility';

///////////////////////////////////////////////////////////
//https://sharepoint.github.io/sp-dev-fx-controls-react/ 
//////////////////////////////////////////////////////////

//1. npm install @pnp/spfx-controls-react --save --save-exact
//2. Configure
// Once the package is installed, you will have to configure the resource file of 
// the property controls to be used in your project. You can do this by opening the config/config.json 
// and adding the following line to the localizedResources property:
// "ControlStrings": "node_modules/@pnp/spfx-controls-react/lib/loc/{locale}.js"
import { ListView, IViewField, SelectionMode, GroupOrder, IGrouping } from "@pnp/spfx-controls-react/lib/ListView";

///////////////////////////////////////////////////////////
//context menu
///////////////////////////////////////////////////////////
import { Layer, IconButton, IButtonProps } from 'office-ui-fabric-react';
import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import ContextualMenuListView from './ContextualMenuListView';
import { IECBProps, IECBState } from './IECBProps';
///////////////////////////////////////////////////////////
//context menu
///////////////////////////////////////////////////////////



export default class GrdComponent extends React.Component<IgridProps, IGrdState, any> {

  constructor(props: IgridProps) {
    super(props);

    this.state = {
      addEditButtonText: "ADD +",
      showModal: false,
      addEditId: 0,
      disabled: false,
      checked: false,
      selectedItem: null,
      hideDialog: true,
      drpOptions: [],

      items: [
        {
          editLink: "",
          filrUrl: "",
          /////////////////////////////
          //PROJECT FIELDS
          /////////////////////////////
          Id: 0,
          fileContent: [],
          fileAttachment: [],
          ID: 0,
          ContentTypeId: "",
          Customer_x0020_Name: "",
          Large_x0020_Canister_x0020_Qty: "",
          CSN: "",
          Display_x0020_Name: "",
          Request_x0020_Date: "",
          Committed_x0020_Land_x0020_Dateby_x0020_Yuyama: "",
          Request_x0020_Status: "",
          Tracking_x0020_Noenteredby_x0020_Doug: "",
          Sales_x0020_Sparepartorder_x0020_No: "",
          previousstatus: "",
          GUID: "",
          xmlFullUrl: "",
          xmlFileName: "",
          xmlRelativeUrl: ""
        } as IItemGrd
      ] as IItemGrd[],
      editSelectedCollectionItems: [],
      //editItem: { ID: 0, Id: 0, fileContent: [], fileAttachment: [], ContentTypeId: "", Customer_x0020_Name: "", Large_x0020_Canister_x0020_Qty: "", CSN: "", Display_x0020_Name: "", Request_x0020_Date: "", Committed_x0020_Land_x0020_Dateby_x0020_Yuyama: "", Request_x0020_Status: "", Tracking_x0020_Noenteredby_x0020_Doug: "", previousstatus: "", GUID: "", Sales_x0020_Sparepartorder_x0020_No: "" }
      editItem: this.EditDefaultdata()
    } as IGrdState;
  }


  public EditDefaultdata() {
    return { ID: 0, Id: 0, fileContent: [], fileAttachment: [], ContentTypeId: "", Customer_x0020_Name: "", Large_x0020_Canister_x0020_Qty: "", CSN: "", Display_x0020_Name: "", Request_x0020_Date: "", Committed_x0020_Land_x0020_Dateby_x0020_Yuyama: "", Request_x0020_Status: "", Tracking_x0020_Noenteredby_x0020_Doug: "", previousstatus: "", GUID: "", Sales_x0020_Sparepartorder_x0020_No: "" };
  }


  private _getSelection = (items: any[]) => {
    //console.log('Selected items:', items);
    //state.items.concat(items)

    //Add or Edit (IF ELSE STATEMENT)
    //{isLoggedIn ? 'currently' : 'not'}

    //Make ready the edit component

    if (items.length > 0) {
      this.setState({ addEditId: items[0].ID, editItem: items.slice()[0], addEditButtonText: items.length > 0 ? "EDIT" : "ADD +" }, () => {
        if (items.length > 0) {
          console.log('Grid edit :' + this.state.addEditId + '|' + this.state.editItem);

        }
      });
    } else {
      this.setState({ addEditId: 0, editItem: this.EditDefaultdata(), addEditButtonText: items.length > 0 ? "EDIT" : "ADD +" }, () => {
        if (items.length > 0) {
          console.log('Grid Add :' + this.state.editItem);
        }
      });
    }
  }


  public componentDidMount() {
    this.loadDefaultGrid();
  }


  private async loadDefaultGrid() {

    const _util = new Utility();
    const _data = await _util.loadAsyncGridDocumentLibrary(0);

    //const _restData = await _util.loadRestGridDocumentLibrary(0, this.props.context); //working code for rest

    //Working code for get by id
    // for (let i = 0; i < _data.length; i++) {
    //   let _fileData = await _util.getAsyncDocuments(_data[i].Id);
    //   console.log(_fileData['File'].Name);
    // }

    //console.log(this.props.context.pageContext.web.absoluteUrl);

    const urlData = _util.getOnlyRootUrl(this.props.context.pageContext.web.absoluteUrl, '/', 3);


    this.setState({
      items: _data.map((filedta) => ({
        ID: filedta.Id,
        Customer_x0020_Name: filedta.Customer_x0020_Name,
        Sales_x0020_Sparepartorder_x0020_No: filedta.Sales_x0020_Sparepartorder_x0020_No,
        Large_x0020_Canister_x0020_Qty: filedta.Large_x0020_Canister_x0020_Qty,
        CSN: filedta.CSN,
        Display_x0020_Name: filedta.Display_x0020_Name,
        Request_x0020_Date: filedta.Request_x0020_Date,
        Committed_x0020_Land_x0020_Dateby_x0020_Yuyama: filedta.Committed_x0020_Land_x0020_Dateby_x0020_Yuyama,
        Request_x0020_Status: filedta.Request_x0020_Status,
        Tracking_x0020_Noenteredby_x0020_Doug: filedta.Tracking_x0020_Noenteredby_x0020_Doug,
        previousstatus: filedta.previousstatus,
        GUID: filedta.GUID,
        xmlFullUrl: filedta.File.LinkingUri,
        xmlRelativeUrl: filedta.File.ServerRelativeUrl,
        xmlFileName: filedta.File.Name,
        fileContent: null,
        isEditable: false,
        editLink: null
      }))
    });

    //console.log(this.state);
  }

  ////////////////////////////////////////////////////
  //Get Sharepoint Document Librery (Working)
  ////////////////////////////////////////////////////

  // private fetchDatafromSharePointList() {
  //   let siteUrl = this.props.context.pageContext.web.absoluteUrl;
  //   this.props.context.spHttpClient
  //     .get(
  //       `${
  //         this.props.context.pageContext.web.absoluteUrl
  //       }/_api/lists/GetByTitle('CANISTER ORDER FORM PNP')/items`,
  //       SPHttpClient.configurations.v1
  //     )
  //     .then((response: SPHttpClientResponse) => {
  //       response.json().then((responseJSON: any) => {
  //         console.log("print - " + responseJSON.value[0]);
  //       });
  //     });
  // }



  //Open new component in Modal
  private OpenCommonAddEditComponentClick = (id: any): void => {
    //console.log(this.state.isAddButton);
    this.setState({ showModal: true }, () => {
      console.log(this.state);
    });
  }

  //Close Modal
  private _closeModal = (): void => {
    this.setState({ showModal: false });
  }


  public render(): React.ReactElement<IgridProps> {

    const { disabled, checked, drpOptions, editItem, items, addEditId, addEditButtonText, editSelectedCollectionItems } = this.state;


    //Used for grid collumn and Data component
    const viewFields: IViewField[] = [
      {
        name: 'Customer_x0020_Name',
        displayName: 'Customer Name',
        sorting: true,
        maxWidth: 120
      },
      {
        name: 'Sales_x0020_Sparepartorder_x0020_No',
        displayName: "Order No",
        sorting: true,
        maxWidth: 80
      },
      /////////////////////////////////////
      //Context Menu (Work)
      /////////////////////////////////////
      // {
      //   name: "",
      //   sorting: false,
      //   maxWidth: 40,
      //   render: (rowitem: IgridProps) => {
      //     const element: React.ReactElement<IECBProps> = React.createElement(
      //       ContextualMenuListView
      //     );
      //     return element;
      //   }
      // },
      {
        name: 'Large_x0020_Canister_x0020_Qty',
        displayName: 'Canister Qty',
        sorting: true,
        maxWidth: 80
      },
      {
        name: 'CSN',
        displayName: "CSN",
        sorting: true,
        maxWidth: 80
      },
      {
        name: 'Request_x0020_Date',
        displayName: "Request Date",
        sorting: true,
        maxWidth: 180
      }
    ];


    /////////////////////////////////////
    //Context Menu Group By (Working)
    /////////////////////////////////////
    // const groupByFields: IGrouping[] = [
    //   {
    //     name: "CSN_x0020__x0023_",
    //     order: GroupOrder.descending
    //   }
    // ];


    return (
      <div>
        <DefaultButton secondaryText={addEditButtonText} onClick={e => this.OpenCommonAddEditComponentClick(0)} text={addEditButtonText} />
        <ListView
          items={items}
          viewFields={viewFields}
          iconFieldName="ServerRelativeUrl"
          compact={true}
          selectionMode={SelectionMode.single}
          selection={this._getSelection}
          showFilter={true}
          defaultFilter=""
          filterPlaceHolder="Search..."
        //groupByFields={groupByFields}
        />



        <Modal
          titleAriaId="titleId"
          subtitleAriaId="subtitleId"
          isOpen={this.state.showModal}
          onDismiss={this._closeModal}
          isBlocking={false}
          containerClassName="ms-modalExample-container"
        >
          <div className="ms-modalExample-body">
            <DefaultButton onClick={this._closeModal} text="Close" />
            <ParentComponent context={this.props.context} addEditId={this.state.addEditId} editSelectedCollectionItems={editSelectedCollectionItems} edtParentItemGrdData={editItem} ></ParentComponent>
          </div>

          <div id="subtitleId" className="ms-modalExample-body">
            <DefaultButton onClick={this._closeModal} text="Close" />
          </div>

        </Modal>
      </div >
    );
  }
}
