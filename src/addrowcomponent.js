import React, { Component } from 'react';
import './App.css';

class AddRowComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            newKeyword : {}
        }
    }

    handleLoad(){
        if(this.props.clearvalue){
            document.getElementsByName('keyword').value = '';
        }
    }

    handleChange(){
        if(this.refs.keyword.value === '' || this.refs.color.value === ''){
            alert('Please enter keyword and color');
            return;
        }
        else{
            this.setState({newKeyword : {
                class: "c_" + this.refs.keyword.value,
                name: this.refs.keyword.value,
                color: this.refs.color.value
            }},
                function(){
                    this.props.addKeyword(this.state.newKeyword);
                });
            }
    }


    render() {

        return (
                <div className="form-group-row">
                    <div className="input-lg col-xs-4"><input type="text" name="keyword" ref="keyword" className="form-control" placeholder="Keyword" onLoad={this.handleLoad.bind(this)}/></div>
                    <div className="input-lg col-xs-4"><input type="text" ref="color" onBlur={this.handleChange.bind(this)} className="form-control" placeholder="Color"/></div>
                </div>
        );
    }
}

export default AddRowComponent;