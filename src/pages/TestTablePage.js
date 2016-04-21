import React from 'react';
import DocumentTitle from 'react-document-title';
import {DreamFactoryTable} from '../components/DreamFactoryTable'



export default class TestTablePage extends React.Component {


  constructor(){
      super()
      const url = '//10sup.com:8090/api/v2/oracle/_table/TENANT?fields=TNNT_REF%2C%20TNNT_LEGAL_NAME%2C%20TNNT_TERI_CODE'
      // hier wordt de initiele state bepaald.
      this.state = {input_value : url, url: url}
  }

  updateInputValue(e){
      // elke keer wanneer input value veranderd wordt, verander ook de state
      this.setState({input_value: e.target.value, url: this.state.url})
  }

  onButtonClick(e){
        // wanneer er op de knop wordt gedrukt, verander url state naar die van de input value
      this.setState({input_value: this.state.input_value, url: this.state.input_value})
  }

  render() {

      const input_style = {width: '80%', height: 50};
      const button_style = {width: '20%', height: 50}

    return (
      <DocumentTitle title={`My Profile`}>
      <div className="container">
          <div className="row">
            <div className="col-xs-12">
                <h1>Simple table page</h1>
                <input style={input_style} type="text" value={this.state.input_value} onChange={this.updateInputValue.bind(this)}/>
                <button style={button_style} onClick={this.onButtonClick.bind(this)} >Update</button>
            </div>
              <div className="col-xs-12">
              <DreamFactoryTable url={this.state.url}/>
                  </div>
            </div>
          </div>

      </DocumentTitle>
    );
  }
}

