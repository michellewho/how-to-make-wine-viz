const D3Component = require('idyll-d3-component');
const d3 = require('d3');

class CustomD3Component extends D3Component {

  initialize(node, props) {
    // node is a <div> container,
    const svg = d3.select(node).append('svg');

    

    // do something with the data passed in
    svg.data(props.data);
  }

  update(props) {
    // ...
  }

}

module.exports = CustomD3Component;