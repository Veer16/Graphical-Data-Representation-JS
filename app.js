getData();
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
        console.log("year:", year);
        const temp = columns[1];
        console.log("temp:", temp);
    });
}