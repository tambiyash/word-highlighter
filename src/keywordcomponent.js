import React, { Component } from 'react';
import './App.css';
import AddRowComponent from './addrowcomponent';

class KeywordComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            keyrows: [],
            newkeyColor:[]
        }
    }

    addRow(){
        const keyrows = this.state.keyrows.concat(AddRowComponent);
        this.setState({
            keyrows : keyrows
        });
    }

    deleteRow(index){
        var rowData = this.state.keyrows;
        rowData.splice(index, 1);
        this.setState({keyrows: rowData});
    }

    handleAddKeyWord(keyColorCode){
        var newkey = this.state.newkeyColor;
        newkey.push(keyColorCode)
        this.setState({
            newkeyColor : newkey
        });
    }

    handleSubmit(e){
      this.props.addKeyColor(this.state.newkeyColor);
      e.preventDefault();
    }

    render() {
        const keyrows = this.state.keyrows.map((Element, index) => {
            return (
                <div className="row">
                    <Element key={index} index={index} addKeyword={this.handleAddKeyWord.bind(this)}/>
                    <div className="input-sm col-xs-4"><a href="#" onClick={this.deleteRow.bind(this, index)}><span className="btn btn-danger glyphicon glyphicon-minus"></span></a></div>
                </div>
            );
        });

        let keywords = "";
        if(this.props.classes){
            this.props.classes.map(item => {
                if(keywords.includes(item) !== true)
                keywords += item.name + " ";
            });
        }

        return (
            <div className="container-fluid">
              <form>
                <h3>Add new Keywords</h3>
                <p>Click (+) to add more rows for  input</p>
                <div className="input-group">
                    <div className="row">  
                    <AddRowComponent addKeyword={this.handleAddKeyWord.bind(this)}/>
                    <div className="input-sm col-xs-4"><a href="#" onClick={this.addRow.bind(this)}><span className="btn btn-warning glyphicon glyphicon-plus"></span></a></div>
                    </div>
                </div>
                <div className="input-group">
                    <div>
                    {keyrows}
                    </div>
                </div>
                <br/>
                <div className="input-group">
                    <button type="submit" onClick={this.handleSubmit.bind(this)} className="col-sm-5 btn btn-success">Add Keywords</button>
                </div><br/>
              </form>
            </div> 
        );
    }
}

export default KeywordComponent;