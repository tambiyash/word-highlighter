import React, { Component } from 'react';
import './App.css';

class CodeComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            newData:{}
        }
    }

    handleChange(e){
        var codeArray = this.refs.codestring.value.split(' ');
        this.setState({
         newData: codeArray
        }, function(){
            this.props.addData(this.state.newData)
        });  
    }

    render() {
        return (
           <div className="form-group">
               <textarea id="txtCode" className="form-control" rows="15" ref="codestring" placeholder="Enter Code here" onChange={this.handleChange.bind(this)}/>
           </div> 
        );
    }
}

export default CodeComponent;