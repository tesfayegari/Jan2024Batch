import { IPersonaSharedProps, Persona, PersonaPresence, PersonaSize } from '@fluentui/react';
import * as React from 'react';

export interface IEmployeeProps {
    name: string;
    department: string;
    date: string;
    email: string;
}

interface IEmployeeState {
    employeeName: string;
}

const MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export class Employee extends React.Component<IEmployeeProps, IEmployeeState> {
    constructor(props: IEmployeeProps) {
        super(props);
        this.state = { employeeName: "Tesfaye Gari" }
    }

    updateNameClicked = () => {
        this.setState({ employeeName: "Amanel Teferi" });
        console.log('Update Name clicked ');
    }
    public render() {
        console.log('Render method ...')
        //const { email } = this.props;
        const examplePersona: IPersonaSharedProps = {
            imageUrl: `https://6bcmwy.sharepoint.com/_layouts/15/userphoto.aspx?size=L&username=${this.props.email}`,
            imageInitials: 'AL', //??
            text: this.props.name, //'Annie Lindqvist', //Full Name
            secondaryText: this.props.department,// 'Software Engineer', //Department 
            tertiaryText: MONTH[(new Date(this.props.date)).getMonth()] + " " + (new Date(this.props.date)).getDate(),// 'In a meeting', //Date of Birth May 20
            optionalText: 'Happy Birthday!', //static 
          };
        
        return (
            <div>
                <hr />                
                <Persona
                    {...examplePersona}
                    size={PersonaSize.size120}
                    presence={PersonaPresence.online}
                    hidePersonaDetails={false}                    
                />
            </div>

        );
    }
}


