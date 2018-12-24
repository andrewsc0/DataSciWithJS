var fs = require("fs");
var d3 = require("d3");
var _ = require("lodash");



// reads file
/*
fs.readFile("data/animals.tsv", "utf8", function(error, data) {
    data = d3.tsvParse(data);
    console.log(JSON.stringify(data));
  
    var maxWeight = d3.max(data, function(d) { return d.avg_weight; });
    console.log(maxWeight);

    var bigAnimals = data.filter(function(d) { return d.avg_weight > 300; });
    bigAnimalsString = d3.csvFormat(bigAnimals);



    fs.writeFile("big_animals.csv", bigAnimalsString, function(err) {
        console.log("file written");
    });

  });

  */

  fs.readFile("data/cities.csv", "utf8", function(error, data)
  {
      data = d3.csvParse(data);
      console.log(JSON.stringify(data));
      var state = d3.max( data, function(d) {
          rerturn data.state = "MO";
      });
        console.log(state);
  });

