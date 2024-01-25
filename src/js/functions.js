function checkInput() {
    var inputValue = document.getElementById('custom-input').value;
    var selectValue = document.getElementById('select-input').value;

    if (inputValue === '00000') {
        document.getElementById('dialog').style.display = 'block';
    } else {
        document.getElementById('dialog').style.display = 'none';
    }

    if (inputValue === '00000' && !!selectValue) {
        openModal('step3Modal');
    }
}

function removeDialog() {
    document.getElementById('dialog').style.display = 'none';
}

function checkSelected() {
    var inputValue = document.getElementById('custom-input').value;
    var selectValue = document.getElementById('select-input').value;

    if (inputValue === '00000' && !!selectValue) {
        openModal('step3Modal');
    }
}

function openModal(name) {
    var modal = document.getElementById(name);
    modal.style.display = 'flex';
}

function closeModal(name) {
    var modal = document.getElementById(name);
    modal.style.display = 'none';
}