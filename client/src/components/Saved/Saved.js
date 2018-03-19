import React from "react";
import "./Saved.css";


const Saved = () => (
    <div className='results-panel'>
        <div className="panel panel-default">
            <div className="panel-heading">
                <div className="panel-title"><strong>Saved Articles</strong></div>
            </div>
            <form className='results-form'>

                <div className='form-results'>
                    <label for='results'></label>
                    <div className='row'>
                        <div className='col-sm-10'>
                            <input type='text' className='results-input'></input>
                        </div>
                        <div className='col-sm-2'>
                            <button type="submit" className="btn btn-primary">
                                <strong>Remove</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

);

export default Saved;
