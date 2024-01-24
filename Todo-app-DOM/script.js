//  Add task
let addItem = document.querySelector(".addButton");
const inputTask = document.querySelector(".input");
const list = document.querySelector(".container");


addItem.addEventListener("click", (event) => {
    console.log('hhhh');

    let text = inputTask.value;
    let item = document.createElement("li");

    item.innerHTML = `
    <div class="edit-container">
        <input type="text" id="edit-text" placeholder="Edit your task" required>
        <button class="addButton" id="editButton">Edit</button>
    </div>
    <p>${ text }</p>
    <div>
        <button class="delete-button">
            <i class="fa-solid fa-trash-can"></i>
        </button>
        <button class="edit-button">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
    </div>`

    list.appendChild(item);
    inputTask.value = null;


    // for newly created button , delete it for
    const deleteButton = item.querySelector(".delete-button");
    deleteButton.addEventListener("click", (event) => {
        let deletedItem = event.target.closest('li');
        deletedItem.parentNode.removeChild(deletedItem);
    });


    // for newly created button , edit it for
    let editButtons = document.querySelectorAll('.edit-button');
    editButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            let listItem = button.closest('li');
            let paragraph = listItem.querySelector('p');

            let editContainer = listItem.querySelector('.edit-container');
            editContainer.style.display = 'block';

            let editInput = editContainer.querySelector('#edit-text');
            editInput.value = paragraph.textContent;

            let editButton = editContainer.querySelector('#editButton');
            editButton.addEventListener('click', function () {
                paragraph.textContent = editInput.value;

                editContainer.style.display = 'none';
            });

            let deleteButton = editContainer.querySelector('.delete-button');
            deleteButton.addEventListener('click', function () {
                editContainer.style.display = 'none';
            });
        });
    });
});
