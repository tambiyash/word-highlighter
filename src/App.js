import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CodeComponent from './codecomponent';
import DisplayComponent from './displaycomponent';
import KeywordComponent from './keywordcomponent';
import '../bootstrap/bootstrap.css';

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
          codes:[],
          classes:[]
      }
  }

  handleAddData(data){
      this.setState({codes:data})
  }

  handleAddKeyword(data){
    var keywordClasses = this.state.classes;
    this.setState({
      classes : keywordClasses.concat(data)
    });
  }

  render() {
    var classitems;
   if(this.state.classes){
      classitems = this.state.classes.map(classitem => {
        return(
          `.${classitem.class}{
              color: ${classitem.color}
            }`
        );
      });
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Syntax Highlighter</h2>
        </div>
        <div className="App-intro">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3 col-md-6 col-lg-4">
                <CodeComponent addData={this.handleAddData.bind(this)}/>
              </div>
              <div className="col-sm-3 col-md-6 col-lg-4">
                <DisplayComponent classesdata={this.state.classes} codedata={this.state.codes}/>
              </div>
              <div className="col-sm-3 col-md-6 col-lg-4">
                <KeywordComponent classes={this.state.classes} clearvalue={false} addKeyColor={this.handleAddKeyword.bind(this)}/>
              </div>
            </div>          
          </div>
        </div>
        <style>
          {classitems}
      </style>
      </div>     
    );
  }
}

export default App;
