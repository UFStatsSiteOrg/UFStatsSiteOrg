import React, { Component } from 'react';
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
            <p>
                {this.submitContact()}
            </p>
        </div> );
    }


}
 
export default ContactPage;
