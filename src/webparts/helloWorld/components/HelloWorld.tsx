import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

import { IHelloWorldProps, IHelloWorldState } from './IHelloWorldProps';
import GrdComponent from './grdComponent/GrdComponent';
import UploadCC from './uploadCC/UploadCC';

export default class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={styles.helloWorld}>
        <UploadCC context={this.props.context} ></UploadCC>
        <GrdComponent showModal={false} context={this.props.context}></GrdComponent>

      </div>
    );
  }
}
