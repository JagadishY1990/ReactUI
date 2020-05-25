import React, { Component } from 'react'
import LibraryDetails from './LibraryDetails'

class LibraryButtons extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookId: '',
            bookName: '',
            libraryDetails: null
        }
    }

    handlebookIdChange = (event) => {
        this.setState({
            bookId: event.target.value
        })
    }

    handlebookNameChange = (event) => {
        this.setState({
            bookName: event.target.value
        })
    }

    createBook = (event) => {
        event.preventDefault();
        let object = {
            id: this.state.bookId,
            name: this.state.bookName
        };

        fetch('http://localhost:8080/retrieveAndaddBooks', {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then((data) => {
                this.setState({ libraryDetails: data })
            })
    }

    updateBook = (event) => {
        event.preventDefault();
        let object = {
            id: this.state.bookId,
            name: this.state.bookName
        };

        fetch('http://localhost:8080/retrieveAndupdateBooks', {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then((data) => {
                this.setState({ libraryDetails: data })
            })
    }

    deleteBook = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/retrieveAnddeleteBook?id=' + this.state.bookId, {
            method: 'POST'
        })
            .then(response => response.json())
            .then((data) => {
                this.setState({ libraryDetails: data })
            })
    }

    retrieveBooks = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/books')
        .then(response => response.json())
        .then((data) => {
            this.setState({ libraryDetails: data })
        })
    }

    retrieveBookById = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/books/' + this.state.bookId)
        .then(response => response.json())
        .then((data) => {
                this.setState({ libraryDetails: JSON.stringify(data) })
        })
    }


    render() {
        return (
            <div>
                <div style={{ float: "left" }}>
                    <span>Book Id</span>
                    <input type="text" value={this.state.bookId} onChange={this.handlebookIdChange} /><br />
                    <span>Book Name</span>
                    <input type="text" value={this.state.bookName} onChange={this.handlebookNameChange} /><br />
                    <button type="button" onClick={this.createBook}>Create Book</button><br /><br /><br /><br /><br /><br /><br /><br />
                    <button type="button" onClick={this.updateBook}>Update Book</button><br /><br /><br /><br /><br /><br /><br /><br />
                    <button type="button" onClick={this.deleteBook}>Delete Book</button><br /><br /><br /><br /><br /><br /><br /><br />
                    <button type="button" onClick={this.retrieveBooks}>Retrieve Book</button><br /><br /><br /><br /><br /><br /><br /><br />
                    {/* <button type="button" onClick={this.retrieveProjectById}>Retrieve Project By Id</button><br /><br /><br /><br /><br /><br /><br /><br /> */}
                </div>
                <div>
                    <LibraryDetails libraryDetails={this.state.libraryDetails} />
                </div>
            </div>
        )
    }
}

export default LibraryButtons


