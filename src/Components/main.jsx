import React, { Component } from 'react';

class main extends Component {
    render() {
        return (
            <>
                <div className="card text-white bg-success mb-3" >
                    <div className="card-header text-center">Main</div>
                    <div className="card-body text-center">
                        <h5 className="card-title">In&Decrement Number</h5>
                        <button
                            className='btn btn-dark m-2'
                        >Increment
                        </button>
                        <button className='btn btn-danger m-2'  >Decrement
                        </button>
                        <div className='text-center'>
                            <input placeholder='add new data' className='btn bg-white btn-group m-2' />
                            <button className='btn btn-primary m-2' >Add</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default main;