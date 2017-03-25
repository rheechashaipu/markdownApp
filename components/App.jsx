import React from 'react';
import ReactDOM from 'react-dom';
import TextArea from './TextArea.jsx';
import Output from './Output.jsx';

class App extends React.Component {
  render() {
    return(
      <div>
        <TextArea />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
