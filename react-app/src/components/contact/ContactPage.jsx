
/* I would like to credit Adam Richardson for posting a tutorial that helped me tons in creating the form
https://www.youtube.com/watch?v=7j6xWy4P_LA&ab_channel=DailyTuition */
import {useForm} from 'react-hook-form'; 
import NavBar from "../NavBar";
import axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './ContactPage.css'

    export default function ContactPage(){
        // eslint-disable-next-line
        const { register, handleSubmit, errors, reset} = useForm();
        console.log(errors);

        async function onSubmitForm(values){
            console.log(values);
            let config = {
            method: 'post',
            url: `http://localhost:8080/api/contact`,
            headers:{
                'Content-Type': 'application/json'
            },
            data:values,
        };
        try {
            const response = await axios(config);
            if(response.data.status === 200){
                console.log('Success');
            }
            // console.log(response);
        } catch (error) {
            console.error(error);
        }
        
    }
    
        return ( 
        <div>
        <NavBar/>
        <Jumbotron className= "b py-16">
                <h1 className={"home-header font-semibold text-4xl"} >Contact us!</h1>
        </Jumbotron>
        <div className="b py-16 bg-blue-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
            <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
                <form
                    onSubmit={handleSubmit(onSubmitForm)} 
                    className="grid grid-cols-1 gap-y-6">
                <div>
                    <label htmlFor="Full Name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        ref={register({
                            required:{
                                value: true,
                                message: 'You must enter your name',
                            },
                        })}
                        className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 
                        border-gray-300 rounded-md focus:outline-none focus:ring-2`}
                        placeholder="Full name"
                    />
                    <span className="text-red-300 text -sm py-2">{errors?.name?.message}</span>
                </div>
                <div>
                    <label htmlFor="Email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        ref={register({
                            required:{
                                value: true,
                                message: 'You must enter your Email',
                            },
                            pattern:{
                                value: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
                                message: 'Invalid email address',
                            },
                        })}
                        className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 
                        border-gray-300 rounded-md focus:outline-none focus:ring-2`}
                        placeholder="Email"
                    />
                    <span className="text-red-300 text -sm py-2">{errors?.email?.message}</span>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea 
                    rows="4"
                    name="message"
                    ref={register ({
                        required:{
                            value: true,
                            message: 'Please enter a message to submit',
                        },
                    })}
                    className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none inline-block align-top focus:ring-blue-500 
                    focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2`}
                    >
                    </textarea>
                    <span className="text-red-300 text -sm py-2">{errors?.message?.message}</span>

                </div>
                <div>
                    <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-9 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Submit
                    </button>
                </div>
        </form>   
        </div>
        </div>
        </div> 
        );
    }