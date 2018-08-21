import React from 'react';

function Header(props) {
    return (
        <div className="">
            <h1 className="">Who makes my Product?</h1>
            <hr/>
            <div className="columns is-multiline">
                <div className="column is-one-half" onClick={() => props.handleLinks('companies index')}>Companies</div>
                <div className="column is-one-half" onClick={() => props.handleLinks('products index')}>Products</div>
            </div>
            <hr/>
        </div>
    );
}

export default Header;