import React from 'react';
import marked from 'marked';

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'Enter text here',
      markedText: 'sample output'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
      markedText: marked(this.state.input)
    });
  }

  render() {
    return (
      <div>
        <textarea
          value={this.state.input}
          onChange={this.handleChange}
          />
        <div>
          <button onClick={this.handleSubmit}>Convert to Markdown</button>
        </div>
        <div dangerouslySetInnerHTML={{__html:this.state.markedText}} />
      </div>
    );
  }
}
