(function() {
    angular.module("bookApp")

    .directive('barChart', [function() {
        return {
            scope: {
                data: '='
            },
            link: function(scope, elem, attrs) {

                scope.$watch("data", function(n, o) {
                    console.log('data fired')
                    if (o !== n) {
                        updateChart();
                    }
                });

                var margin = { top: 20, right: 20, bottom: 30, left: 20 },
                    width = 500 - margin.left - margin.right,
                    height = 500 - margin.top - margin.bottom;

                var x = d3.scale.ordinal()
                    .rangeRoundBands([0, width], .2);
                var y = d3.scale.linear()
                    .range([height, 0]);
                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient("bottom");
                var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient("left")
                var svg = d3.select(elem[0])
                  .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                    .attr("class", "axis axis--x")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                
                var hardTextWidth = [57, 170, 277, 389]
                function updateChart() {
                    var data = scope.data;
                    // console.log('data in directive', data);
                    if (data) {
                      x.domain(data.map(function(d) { return d.label; }));
                      y.domain([0, d3.max(data, function(d) { return d.value; })]);
                      
                      svg.selectAll('text').style({opacity: 0}).remove()

                      var rect = svg.selectAll("rect").data(data)

                      rect.enter().append("rect")
                          .attr("class", "bar")
                          .attr("x", function(d) { return x(d.label); })
                          .attr("width", x.rangeBand())
                          .attr("y", function(d) { return y(+d.value); })
                          .attr("height", function(d, i) { return height - y(+d.value); })

                      rect.transition()
                          .attr("x", function(d) { return x(d.label); })
                          .attr("y", function(d) { return y(+d.value); })
                          .attr("height", function(d) { return height - y(+d.value);})

                      svg.selectAll("text")
                          .data(data)
                        .enter().append("text")
                         .text(function(d) { return d.value})
                         .attr("x", function(d, i) {return hardTextWidth[i]})
                         .attr("y", function(d) { return height + 20; })
                         .attr("font-family", "sans-serif") 
                         .attr("font-size", "14px")
                         .attr("fill", "white")


                      rect.exit().transition().style({opacity: 0}).remove()

                    } else {
                        return "error";
                    }

                }


            }
        };
    }]);
})();