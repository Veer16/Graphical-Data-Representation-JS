// created a new variable to hold the label values for the x-axis
const xlabels = [];

// y-axis lables and data
const ytemps = [];
chartIt();
getData();

async function chartIt() {
    // this function going to wait untill the getData() don't load the data into the page
    await getData();
    // Chart.js Getting started code

    const ctx = document.getElementById('chart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xlabels,
            datasets: [{
                label: 'Global average Temerature',
                data: ytemps,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
}



async function getData() {
    const response = await fetch("ZonAnn.Ts+dSST.csv");
    const data = await response.text();

    //  split the rows and delete the first row with the header

    const table = data.split("\n").slice(1);
    console.log("rows:", table);
    // loop to get the data from each cell
    table.forEach(elt => {
        const columns = elt.split(",");
        const year = columns[0];
        // pushing the lable onto the chart
        xlabels.push(year);

        console.log("year:", year);
        const temp = columns[1];
        // add the temp into the ytemp varibale
        // also add 14 to make the temprature to from the mean temprature
        ytemps.push(parseFloat(temp) + 14);
        console.log("temp:", temp);
    });
}