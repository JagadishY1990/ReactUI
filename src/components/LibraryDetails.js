import React from 'react'

class LibraryDetails extends React.Component {
    render() {
        return (
            <div>
                {this.props.libraryDetails !== null && this.props.libraryDetails !== undefined ?
                    this.props.libraryDetails.map((bookObj) =>
                        <div>
                            <p>Project Id: {bookObj.id}</p>
                            <p>Project Name: {bookObj.name}</p>
                        </div>
                    )
                    : null
                }
            </div>
        )
    }
}

export default LibraryDetails 