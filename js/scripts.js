// find element on web page
const actionButton = document.getElementById("action-btn");
// perform action on click
actionButton.addEventListener("click", performOnClick)


let dataCollection = [];

const listItems = document.getElementById('list-items');


function performOnClick() {
    const added = prompt('What do you want to add?');
    dataCollection.push(added);

    addItem(dataCollection);
}

// function definition
function addItem(dataCollection) {
    while(listItems.firstChild) {
        listItems.removeChild(listItems.firstChild);
    }

    
    for (let i=0; i < dataCollection.length; i++) {
        const listItem = document.createElement('LI');
        const textValue = document.createTextNode(dataCollection[i]);
    
        listItem.appendChild(textValue);
        listItems.appendChild(listItem);
    }
}