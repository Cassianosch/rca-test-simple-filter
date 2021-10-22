
/**************************************************

    Get mock data

**************************************************/
// `data` is what we get from the backend.
// `dataFiltered` is what we display on the table.
const data = [
    {
        name: 'Saitama',
        power: 'Soco simples',
        rank: 'S',
    },
    {
        name: 'Tornado do Terror',
        power: 'Telecinese',
        rank: 'S',
    },
    {
        name: 'Heavy Kong',
        power: 'Soco',
        rank: 'A',
    },
    {
        name: 'Mumen Rider',
        power: 'Atropelar',
        rank: 'C',
    },
];

// Initially, display all data
let dataFiltered = data.slice();


/**************************************************
 
  Update the table
 
**************************************************/
let tableBody = document.getElementById('js-content');

const displayTable = (data) => {
    tableBody.innerHTML = '';

    data.forEach((data, index) => {
        let row = tableBody.insertRow();

        // Display name
        let cell_name = row.insertCell(0);
        let node_name = document.createTextNode(data.name);

        cell_name.appendChild(node_name);

        // TODO #1:
        // 
        // Based on the code above, let's display the
        // `description` and `child's id`, too.
        // 
        // Note, because description is an optional field,
        // some data may have a value of `undefined`. For
        // these descriptions, show an empty string instead.
        //



        //
        // END TODO #1


    });
};

// Display the table for the first time
displayTable(dataFiltered);


/**************************************************
 
  Search data by description
 
**************************************************/
let myInput = document.getElementById('js-search-input');

const searchInFields = () => {
    // Get the query string
    const query = myInput.value.trim();

    // TODO #2:
    // 
    // Set `dataFiltered` to be a filtered array of `data`.
    // 
    // `dataFiltered` contains all data whose description
    // includes `query`.
    // 
    // If the query is empty, then display all data again.
    // 



    //
    // END TODO #2


    // Update the table
    displayTable(dataFiltered);
};
