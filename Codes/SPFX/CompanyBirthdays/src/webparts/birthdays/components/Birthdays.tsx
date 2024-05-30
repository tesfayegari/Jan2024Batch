import * as React from 'react';

//import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";

import styles from './Birthdays.module.scss';
import type { IBirthdaysProps } from './IBirthdaysProps';
//import { escape } from '@microsoft/sp-lodash-subset';
import { Employee } from './Employee/Employee';
import { SPService } from '../Service/SPService';

interface IBirthdaysState {
  items: any[];
}

export default class Birthdays extends React.Component<IBirthdaysProps, IBirthdaysState> {

  constructor(props: IBirthdaysProps) {
    super(props);
    this.state = { items: [] }
  }

  componentDidMount(): void {
    let service = new SPService(this.props.context);

    service.getListItems("Birthdays", "https://6bcmwy.sharepoint.com/sites/HumanResource", "$select=*,Employee/Department,Employee/Title,Employee/EMail&$expand=Employee")
      .then(response => {
        console.log('Data is ', response);
        this.setState({ items: response.value });
      }, error => console.error('Oops error occurred', error));

  }

  // private _onConfigure = () => {
  //   // Context of the web part
  //   this.props.context.propertyPane.open();
  // }

  public render(): React.ReactElement<IBirthdaysProps> {
    const {
      hasTeamsContext
    } = this.props;
    const currentMonth = (new Date()).getMonth() + 1;
    let currentMonthBirthday = this.state.items ? this.state.items?.filter(employee => employee.Month == currentMonth) : [];
    console.log('Cuurent month birthdays ....', currentMonthBirthday);

    console.log('State value is ...', this.state);
    return (
      <section className={`${styles.birthdays} ${hasTeamsContext ? styles.teams : ''}`}>
        <WebPartTitle displayMode={this.props.displayMode}
          title={this.props.title}
          updateProperty={this.props.updateProperty} />
        {/* <Placeholder iconName='Edit'
          iconText='Configure your web part'
          description='Please configure the web part.'
          buttonLabel='Configure'
          onConfigure={this._onConfigure}
        /> */}
        {currentMonthBirthday?.map(emp => <Employee name={emp.Employee.Title} department={emp.Employee.Department} email={emp.Employee.EMail} date={emp.DateofBirth}></Employee>)}
      </section>
    );
  }
}
