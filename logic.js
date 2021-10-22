/******************

    Get mock data

******************/
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


/******************
 
  Update the table
 
******************/
let tableBody = document.getElementById('js-content');

const displayTable = (data) => {
    tableBody.innerHTML = '';

    data.forEach((data) => {
        let row = tableBody.insertRow();
        // Display name
        handleSetElementInTable(0, row, data.name);
        handleSetElementInTable(1, row, data.power);
        handleSetElementInTable(2, row, data.rank);

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

function handleSetElementInTable(position, row, element) {
    let cell_name = row.insertCell(position);
    let node_name = document.createTextNode(element);

    cell_name.appendChild(node_name);
}

// Display the table for the first time
displayTable(dataFiltered);


/******************
 
  Search data by description
 
******************/
let myInput = document.getElementById('js-search-input');

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

myInput.addEventListener('keyup', debounce(() => {
    // Get the query string
    const query = myInput.value.trim();
    if (query != '') {

        dataFiltered = data.filter(el =>
            el.name.toLowerCase().includes(query.toLowerCase()) ||
            el.power.toLowerCase().includes(query.toLowerCase()) ||
            el.rank.toLowerCase().includes(query.toLowerCase()));
    } else {
        dataFiltered = data.slice();
    }


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
}));