import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';

import { SPService } from './Service/SPService';
import { IList } from './Model/IList';

export interface IHelloWorldWebPartProps {
  webpartTitle: string;
  description: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  private allLists: IList[];
  private service: SPService;

  public render(): void {

    let html = "<ul>";

    for (let list of this.allLists) {
      html = html + "<li> " + list.Title + " - (" + list.ItemCount + ")</li>";
    }
    html = html + "</ul>";

    console.log("All lists are ", this.allLists);

    this.domElement.innerHTML = `
    <section class="${styles.helloWorld} ${!!this.context.sdks.microsoftTeams ? styles.teams : ''}">
      <h2 style="margin-top:0;">${escape(this.properties.webpartTitle)}</h2>
      <div >
        ${html}
      </div>
      
    </section>`;
  }

  protected onInit(): Promise<void> {
    if (this.service == undefined) {
      this.service = new SPService(this.context);
    }

    return this.service.getAllLists().then(
      (respose: { value: IList[] }) => {
        console.log('Data is ', respose);
        this.allLists = respose.value
      },
      error => console.error('Oops error occured'))
  }



  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "All Lists Configuration 1"
          },
          groups: [
            {
              groupName: "Basic Configuration",
              groupFields: [
                PropertyPaneTextField('webpartTitle', {
                  label: "Webpart Title"
                }),
                PropertyPaneTextField('description', {
                  label: "Webpart Description",
                  multiline: true
                })
              ]
            }
          ]
        },
        {
          header: {
            description: "All Lists Configuration 2"
          },
          groups: [
            {
              groupName: "Second Group Config",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
