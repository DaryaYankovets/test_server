const formPost = document.querySelector('#form_post');
//const formPost = document.querySelector('#form_post');

postData(formPost);

/* start: post data to db.json */
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
        .then(data => console.log('post data', data))
        .catch(() => console.log('Что-то пошло не так...'))
        .finally(() => form.reset());
    });
}
/* end: post data to db.json */



/* start: get data from db.json */
async function getData(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

getData('http://localhost:3000/products')
    .then(data => console.log('getData', data));
/* end: get data from db.json */





fetch('http://localhost:3000/products')
    .then(data => data.json())
    .then(data => console.log(data));


fetch('http://localhost:3000/requests')
    .then(data => data.json())
    .then(data => console.log(data));

