const form = document.querySelector('form');

postData(form);

function postData(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        const obj = {};
        formData.forEach((value, key) => obj[key] = value);
        
        fetch('http://localhost:3000/requests', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj),
        })
        .then((data) => data.text())
        .then(data => console.log(data))
        .catch(() => console.log('Что-то пошло не так...'))
        .finally(() => form.reset());

    });
}





fetch('http://localhost:3000/products')
    .then(data => data.json())
    .then(data => console.log(data));


fetch('http://localhost:3000/requests')
    .then(data => data.json())
    .then(data => console.log(data));

