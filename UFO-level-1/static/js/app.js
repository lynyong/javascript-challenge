// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
function buildTable(data) {
    tbody.html("");
    data.forEach((rowData)=>{
        var row = tbody.append("tr");
        Object.values(rowData).forEach((value)=>{
            let cell = row.append("td");
                cell.text(value);
        });
    });
}

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
function handleClick(){
    var date = d3.select("#datetime").property("value");
    let results = tableData;
    if (date){
        results=results.filter(row=>row.datetime === date);
    }
    buildTable(results); 
}

d3.selectAll("#filter-btn").on("click",handleClick);
buildTable(tableData);


