import React, { Component } from 'react';

class counter extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="card text-white bg-danger mb-3" >
                    <div className="card-header">Counter</div>
                    <div className="card-body">
                        <h1 className="card-title">Number : 1</h1>
                    </div>
                </div>


            </>
        );
    }
}

export default counter;