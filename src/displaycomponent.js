import React, { Component } from 'react';
import './App.css';

class DisplayComponent extends Component{

    render() {
        var formatted;
        if(this.props.codedata){
            formatted = this.props.codedata.map((data, index) => {
                let css = "c_" + data; 
                return(
                    <span key={index} className={css}>{data} </span>
                );            
            });
        }
        return (
            <div className="container-fluid">
                <h3>Highlighted Code</h3>
                {formatted}
            </div> 
        );
    }
}

export default DisplayComponent;