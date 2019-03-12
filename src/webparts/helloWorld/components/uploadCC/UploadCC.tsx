import * as React from 'react';
import { IUploadCCProps } from './IUploadCCProps';
import { IUploadCCState } from './IUploadCCState';

import { escape } from '@microsoft/sp-lodash-subset';
import pnp from "sp-pnp-js";

import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';

import { Button, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ConsoleListener, Web, Logger, LogLevel, ODataRaw } from "sp-pnp-js";
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

import UtilityCC from '../../lib/UtilityCC';


export default class UploadCC extends React.Component<IUploadCCProps, IUploadCCState, any> {



    private addNewDetailForm = (e: any, id: any) => (value: any) => {


        // this.setState({ itemDetailData: [...this.state.itemDetailData, ...this.NewDetailFormDefaultdata()] }, () => {
        //     console.log(this.state);
        // });

    }


    public async componentDidMount() {


    }

    private _changeFileSelection = (e: any) => {
        if (
            e.currentTarget &&
            e.currentTarget.files &&
            e.currentTarget.files.length > 0
        ) {
            //alert("file upload");
            this.setState({
                fileContent: e.currentTarget.files[0]
            });
        }
    }


    //Used to reload parent
    private _uploadFile = (_id, _title) => (e: any) => {

        //alert("Id - " + _id + " Title - " + _title);

        // const documentLibraryName =
        //   this.props.context.webAbsoluteUrl +
        //   "/Student%20Details%20No%20Content%20Type";

        const { fileContent } = this.state;

        pnp.sp.web
            .getFolderByServerRelativeUrl("OmniCellPreMT Test")
            .files.add(fileContent.name, fileContent, true)
            .then(f => {
                f.file.getItem().then(item => {
                    item.update({
                        Title: "A Title",
                        SiteLocation:"Enter Choice #2",
                        ContentTypeId :"0x010100C4B1772BA59E054E8EFF91A2D864610D001A6CB99011D4BB45BC4C81F93F286C54",
                        Business_x0020_Owner:"Biswa 1"
                    });
                });
            });

        e.preventDefault();
    }



    private _uploadBlobFile = (_id, _title) => (e: any) => {

        const { fileContent } = this.state;

        pnp.sp.web
            .getFolderByServerRelativeUrl("OmniCellPreMT Test")
            .files.add(fileContent.name, fileContent, true)
            .then(f => {
                f.file.getItem().then(item => {
                    item.update({
                        Title: "A Title",
                        SiteLocation:"Enter Choice #2",
                        ContentTypeId :"0x010100C4B1772BA59E054E8EFF91A2D864610D001A6CB99011D4BB45BC4C81F93F286C54",
                        Business_x0020_Owner:"Biswa 1"
                    });
                });
            });

        e.preventDefault();


    }

    public render(): React.ReactElement<IUploadCCProps> {

        //const { pId } = this.state;
        const { context } = this.props;

        return (
            <div>
                <b> Hi, I am Parent .</b>
                <form>
                    Title :
              <br />
                    <input type="text" name="title" />
                    <br />
                    Student Class:
              <br />
                    <input type="text" name="student class" />
                    <br />
                    <input
                        type="file"
                        id="uploadFile"
                        onChange={this._changeFileSelection}
                    />
                    <br />
                    <button
                        onClick={this._uploadFile(this.props.Key, this.props.ParentId)}
                    >

                        Upload
              </button>



              <button
                        onClick={this._uploadBlobFile(this.props.Key, this.props.ParentId)}
                    >

                        Upload
              </button>

                </form>
                <hr></hr>
            </div>
        );
    }
}
