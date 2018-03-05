const D3Component = require('idyll-d3-component');
const d3 = require('d3');
const React = require('react');
const IdyllComponent = require('idyll-component');
const Reactable = require('reactable');
const Table = Reactable.Table;
const Tr = Reactable.Tr;
const Td = Reactable.Td;

class CustomD3Component extends IdyllComponent  {

  render(){
    // node is a <div> container,
    const data = this.props.data.map((d) => {
      return {
        'firstTeam': d.firstTeam,
        'secondTeam': d.secondTeam,
        'p_firstTeam': d.p_firstTeam,
        'p_secondTeam': d.p_secondTeam
      };
    });

    return (
      <Table className="table">
        {
          data.map((d, i) => {
            return (
              <Tr key={i}>
                <Td column="First Team Seed">{d.firstTeam}</Td>
                <Td column="Second Team Seed">{d.secondTeam}</Td>
                <Td column="Win Percentage for First Team">{d.p_firstTeam}</Td>
                <Td column="Win Percentage for Second Team">{d.p_secondTeam}</Td>
              </Tr>
            )
          })
        }
      </Table>
    );

    // const svg = d3.select(node).append('svg')
    //     .attr("class", "chart")
    // 	.attr("width", 200)
    // 	.attr("height", 20);

    // var x = d3.scale.linear() // takes the fixed width and creates the percentage from the data values
    // 	.domain([0, d3.max(props.data)])
    // 	.range([0, 200]); 

    // chart.selectAll("rect") // this is what actually creates the bars
	   //  .data(data)
	  	// .enter().append("rect")
	   //  .attr("width", x)
	   //  .attr("height", 20)
	   //  .attr("rx", 5) // rounded corners
	   //  .attr("ry", 5);

    // // do something with the data passed in
    // svg.data(props.data);
  }
}

module.exports = CustomD3Component;