// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData)

// var tbody = document.querySelector("tbody")
var tbody = d3.select("tbody")
tableData.forEach(row => {
    var tr = tbody.append("tr")
    Object.values(row).forEach(value => {
        tr.append("td").text(value)
    })
    console.log(row.datetime)
});

d3.select("#filter-btn").on('click', filterT);
function filterT(){
    // d3.event.preventDefault();
    var datetimeInput = d3.select("#datetime").property("value")
    var filterDate = tableData
    if (datetime != ""){
        filterDate = filterDate.filter(d => d.datetime == datetimeInput )
    }
    d3.select("tbody").html("");
    for(var i = 0; i < filterDate.length; i++) {
        var row = tbody.append("tr")
        row.append('td').text(filterDate[i]['datetime'])
        row.append('td').text(filterDate[i]['city'])
        row.append('td').text(filterDate[i]['state'])
        row.append('td').text(filterDate[i]['country'])
        row.append('td').text(filterDate[i]['shape'])
        row.append('td').text(filterDate[i]['durationMinutes'])
        row.append('td').text(filterDate[i]['comments'])
    }

}
    
