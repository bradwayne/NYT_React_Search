import React from "react";
import "./Results.css";


const Results = () => (
        <div className='results-panel'>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="panel-title"><strong>Results</strong></div>
                </div>
                <form className='results-form'>

                    <div className='form-results'>
                        <label for='results'>Topic</label>
                        <div className='row'>
                            <div className='col-sm-10'>
                                <input type='text' className='results-input'></input>
                            </div>
                            <div className='col-sm-2'>
                                <button type="submit" className="btn btn-primary">
                                    <strong>Results</strong>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='form-results'>
                        <label for='results'>Topic</label>
                        <div className='row'>
                            <div className='col-sm-10'>
                                <input type='text' className='results-input'></input>
                            </div>
                            <div className='col-sm-2'>
                                <button type="submit" className="btn btn-primary">
                                    <strong>Results</strong>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className='form-results'>
                        <label for='results'>Topic</label>
                        <div className='row'>
                            <div className='col-sm-10'>
                                <input type='text' className='results-input'></input>
                            </div>
                            <div className='col-sm-2'>
                                <button type="submit" className="btn btn-primary">
                                    <strong>Results</strong>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

);
        
        
        export default Results;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // export default Results;
