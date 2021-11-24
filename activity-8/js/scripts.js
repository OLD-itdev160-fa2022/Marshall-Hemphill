// Utility functions

function get(element) {
    return document.getElementById(element);
}


// Application Functions
function openModal() {
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal() {
    var title = get('edit-title-text'),
        text = get('edit-content-text'),
        modal = get('modal-dialog'),
        backdrop = get('modal-backdrop');

    // Clear text
    title.value = '';
    text.value = '';

    // Hide modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent() {
    var title = get('edit-title-text'),
        text = get('edit-content-text'),
        content = get('display-content');

    // Create content elements
    var newTitle = document.createElement('h2'),
        newTitleText = document.createTextNode(title.value),

        newContent = document.createElement('p'),
        newContentText = document.createTextNode(text.value);

    // Add Elements
    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

window.addEventListener('load', function() {
    var newButton = get('new-button'),
        cancelButton = get('cancel-button'),
        saveButton = get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});