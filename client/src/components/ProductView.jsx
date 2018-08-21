import React, { Component } from 'react';

class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state= {

        }
    }

    render() {
        return (
            <div className="columns is-multiline">
                <div className="column">
                </div>
                <div className="column">
                    <button type="edit" className="button is-medium">Edit</button>
                    <button type="delete" className="button is-medium">Delete</button>

                </div>



            </div>

        )
    }


}

export default ProductView;
