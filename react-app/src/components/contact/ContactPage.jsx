import React, { Component } from 'react';
import axios from "axios";

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: "",
            email: "",
            message: "",
            status: "Submit"

        };
    }
    handleChange(event) {
        const field = event.target.id;
        if (field === "name") {
          this.setState({ name: event.target.value });
        } else if (field === "email") {
          this.setState({ email: event.target.value });
        } else if (field === "message") {
          this.setState({ message: event.target.value });
        }
    }
    handleSubmit(event) {
        event.preventDefault();  
        this.setState({ status: "Sending" });  
        axios({
          method: "POST",
          url: "http://localhost:3000/contact",
          data: this.state,
        }).then((response) => {
          if (response.data.status === "sent") {
            alert("Message Sent");
            this.setState({ name: "", email: "", message: "", status: "Submit" });
          } else if (response.data.status === "failed") {
            alert("Message Failed");
          }
        });
    }
    render() { 
        let buttonText = this.state.status;
        return ( 
        <div className="b py-16 bg-gray-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
            <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                
                <form
                    onSubmit={this.handleSubmit.bind(this)} 
                    className="grid grid-cols-1 gap-y-6">
                    {/* method="POST" */}
                <div>
                    <label htmlFor="Full Name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}
                        required
                        className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 
                        border-gray-300 rounded-md focus:outline-none focus:ring-2`}
                        placeholder="Full name"
                    />
                </div>
                <div>
                    <label htmlFor="Email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                        required
                        className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 
                        border-gray-300 rounded-md focus:outline-none focus:ring-2`}
                        placeholder="Email"
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea 
                    class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none inline-block align-top focus:ring-blue-500 
                    focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2" 
                    rows="4"
                    name="message">
                    </textarea>

                </div>
                <div>
                    <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-9 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        {buttonText}
                    </button>
                </div>
        </form>   
        </div>   
        </div>
        );
    }


}
 
export default ContactPage;
                    // {/* <textarea
                    //     name="message"
                    //     rows="4"
                    //     value={this.state.message}
                    //     onChange={this.handleChange.bind(this)}
                    //     required
                    //     class="block w-full shadow py-20 px-4 placeholder-gray-500 inline-block align-top focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                    //     placeholder="Message"></textarea>   */}