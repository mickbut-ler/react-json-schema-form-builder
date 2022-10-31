import React, { Component } from 'react';
import PlaygroundContainer from './PlaygroundContainer';

class App extends Component {
  
  constructor(props) {
    super(props)

    this.ui = props.ui;
    // If no ui is provided we show the prop immediately (show = true), after getInitialState otherwise (show = false).
    this.state = { text: '', show:!props.ui,  mode: 'edit', value: {jsonSchema: {}, uiSchema: {}}};
  }

  componentDidMount() {
    if(this.ui){
      this.getInitialState(this.ui).then(state => this.setState(state));
    }
  }

  async getInitialState(ui) {
    try {
      const brDocument = await ui.document.get();
      const value = await ui.document.field.getValue();
      return { mode: brDocument.mode, show: true, value: JSON.parse(value)};
    } catch (error) {
      console.error('Failed to register extension:', error.message);
      console.error('- error code:', error.code);
    }
    return this.state;
  }
  render() {
    return (this.state.show && <PlaygroundContainer
      title='React JSON Schema Form Builder'
      initialJsonSchema={this.state.value.jsonSchema}
      initialUiSchema={this.state.value.uiSchema}
      ui={this.ui}
    />);
  }
}


export default App;
