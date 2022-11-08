import { render } from '@testing-library/react';
import React from 'react';
import { Books } from './books';
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';  //Is the https client 

// A callback is a function passed as an argument to another function.!!!!

export class Read extends React.Component {

    componentDidMount() { // (lifecycle method) method runs after the component output has been rendered to the DOM.

        axios.get("http://localhost:4000/api/books") //axios does the promise and retrieves the data asyc.
            .then((response) => {  //Once the response comes back does the next function..
                this.setState({ books: response.data.mybooks }) //Saves the data in the books var using the setState function.
            })
            .catch((error)=>{ // 3 status calls, Pending, Rejected,
                console.log("error");
            })
    }


    state = {  //State is a plain JavaScript object used by React to represent an information about the component’s current situation.
        books: []
    };

    render() {
        return (
            <div>

                <h1> Read Component</h1>
                <CardGroup>
                    <Books books={this.state.books}> </Books>  {/* Send the object from the parent component to the child component. */}
                </CardGroup>

            </div>
        );

    }

}


