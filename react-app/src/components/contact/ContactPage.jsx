import React, { Component } from 'react';
import NavBar from "../NavBar";
class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }    
    
    submitContact() {
        return(
            <button onClick={() => this.setState ({ liked: true})}>
                Submit
            </button>
        );
    }

    render() { 
        return ( 
        <div>
            <NavBar />
            <p>
                {this.submitContact()}
            </p>
        </div> );
    }


}
 
export default ContactPage;
