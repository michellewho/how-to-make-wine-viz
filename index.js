var container = d3.select("body").append("svg")
    .attr("width", 960)
    .attr("height", 1000)

container.append("g")
    .attr('transform', 'translate(' + [35] + ')')
    .call(d3.axisLeft(y));