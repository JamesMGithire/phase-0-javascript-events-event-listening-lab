function addingEventListener() {
    const input = document.querySelector('#button');

    function clickAlert(e) {
        e.preventDefault();
        alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert);
}

addingEventListener();