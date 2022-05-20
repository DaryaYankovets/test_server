const form = document.querySelector('form');

postData(form);

function postData(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');

        //request.setRequestHeader('Content-type', 'multipart/form-data');

        const formData = new FormData(form);

        request.send(formData);

        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log(request.response);
            } else {
                console.log('Что-то пошло не так...');
            }
        });
    });
}

