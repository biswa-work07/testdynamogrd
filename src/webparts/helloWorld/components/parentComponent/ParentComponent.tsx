import * as React from 'react';
import { IpatentProps } from './IpatentProps';
import { IDetailForm, IparentState } from './IparentState';
import { IItemGrd } from './../grdComponent/IgridState';

import { escape } from '@microsoft/sp-lodash-subset';
import pnp from "sp-pnp-js";

import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';

import { Button, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ConsoleListener, Web, Logger, LogLevel, ODataRaw } from "sp-pnp-js";
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

// import ChildComponent from './../childComponent/ChildComponent';
import Utility from '../../lib/Utility';


export default class ParentComponent extends React.Component<IpatentProps, IparentState, any> {


    constructor(props: IpatentProps) {
        super(props);

        this.state = {
            pId: 0,
            noOfDetailsForm: 0,
            drpOptions: [],
            items:
                {
                    editLink: "",
                    filrUrl: "",
                    /////////////////////////////
                    //PROJECT FIELDS
                    /////////////////////////////
                    Id: 0,
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
                } as IItemGrd,
            itemDetailData: [
                {

                    /////////////////////////////
                    //PROJECT REPEAT FIELDS
                    /////////////////////////////
                    slNo: 0,
                    ID: 0,
                    pId: 0,
                    rpt_fileContent: [],
                    Part: "",
                    OrderAccepted: "",
                    CommittedLandDatebyYuyama: "",
                    Tracking: "",
                    GUID: ""
                } as IDetailForm
            ] as IDetailForm[],
        } as IparentState;
    }



    //Add new DTAILS FROM DOUG M
    private addNewDetailForm = (e: any, id: any) => (value: any) => {

        // this.setState({ itemDetailData: [...this.NewDetailFormDefaultdata()] }, () => {
        //     console.log(this.state);
        // });

        this.setState({ itemDetailData: [...this.state.itemDetailData, ...this.NewDetailFormDefaultdata()] }, () => {
            console.log(this.state);
        });

    }

    public NewDetailFormDefaultdata = (): IDetailForm[] => {
        return [{ slNo: 0, ID: 0, pId: 0, rpt_fileContent: [], ContentTypeId: "", Part: { Id: 0, PartDougM: "" }, OrderAccepted: { Id: 0, PartDougM: "" }, CommittedLandDatebyYuyama: "", Tracking: "" }];
    }

    //Delete new DTAILS FROM DOUG M
    private deleteNewDetailForm = (e: any, id: any) => (value: any) => {

        alert(id);

        //console.log(this.state.isAddButton);
        // this.setState({ showModal: true }, () => {
        //   console.log(this.state);
        // });
    }

    public async componentDidMount() {


        if (this.props.addEditId > 0) {
            const _util = new Utility();
            const _xml_data = await _util.readRestXMLFromDocumentLibrary_1(this.props.edtParentItemGrdData.ID, this.props.context, this.props.edtParentItemGrdData.xmlFullUrl, this.props.edtParentItemGrdData.xmlRelativeUrl, this.props.edtParentItemGrdData.xmlFileName);
            //console.log(_xml_data);
            const parser = new DOMParser();
            const xml = parser.parseFromString(_xml_data.toString(), 'text/xml');

            console.log(xml.querySelector('group1'));
            console.log(xml.querySelector('group1').querySelector('group2').querySelector('Attachment').innerHTML);

            //Convert base64 (existing infopath data) to ArrayBuffer
            const BufferArray = this.base64ToArrayBuffer(xml.querySelector('group1').querySelector('group2').querySelector('Attachment').innerHTML);
            //this.saveByteArray('tt', BufferArray);
        }
    }

    public saveByteArray = (reportName, byte) => {
        var blob = new Blob([byte], { type: "application/pdf" });
        //var blob = new Blob([byte]);
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        var fileName = reportName;
        link.download = fileName;
        link.click();
    }


    public base64ToArrayBuffer = (base64: string) => {
        const binaryString = window.atob(base64); // Comment this if not using base64
        const bytes = new Uint8Array(binaryString.length);
        return bytes.map((byte, i) => binaryString.charCodeAt(i));
    }

    public render(): React.ReactElement<IpatentProps> {

        //const { pId } = this.state;
        const { addEditId, context, editSelectedCollectionItems, edtParentItemGrdData } = this.props;

        return (
            <div>
                <b> Hi, I am Parent .</b>
                

                {
                    editSelectedCollectionItems.length > 0 ?
                        (
                            editSelectedCollectionItems.map((item) => <div>Edit Mode :
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
                        <td>Account Name</td>
                        <td>
                            <TextField label="With error message" value={edtParentItemGrdData.Customer_x0020_Name} errorMessage="Error message" />
                        </td>
                        <td>CSN #</td>
                        <td>
                            <TextField label="With error message" value={edtParentItemGrdData.CSN} errorMessage="Error message" />
                        </td>
                        <td>Ship To Address</td>
                        <td>
                            <TextField label="With error message" errorMessage="Error message" />
                        </td>
                        <td>
                            <DefaultButton onClick={this.addNewDetailForm(this, 0)} text="Add +" />
                        </td>
                    </tr>
                    {this.state.itemDetailData.map(myitems1 => {
                        if (myitems1.slNo >= 0) {
                            return (
                                <tr>
                                    <td>
                                        <table>
                                            <tr>
                                                <td>
                                                    <DefaultButton onClick={this.deleteNewDetailForm(this, myitems1.slNo)} text="-" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Part #</td><td>
                                                    <TextField label="With error message" errorMessage="Error message" />
                                                </td>
                                                <td>
                                                    Order Accepted by Yuyama - Y/N?
                                    </td><td>
                                                    <TextField label="With error message" errorMessage="Error message" />
                                                </td>
                                                <td>
                                                    Committed Land date by Yuyama
                                    </td> <td>
                                                    <TextField label="With error message" errorMessage="Error message" />
                                                </td>
                                                <td>
                                                    Tracking #
                                    </td><td>
                                                    <TextField label="With error message" errorMessage="Error message" />
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                            );
                        }
                    })}
                </table>

                <hr></hr>
            </div>
        );
    }
}
