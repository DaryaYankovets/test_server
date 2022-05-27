/* start: post data to db.json */
const formPost = document.querySelector('#form_post');

const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};


formPost.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(formPost);

    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    postData('http://localhost:3000/requests', json)
        .then(data => console.log('post data', data))
        .catch(() => console.log('Что-то пошло не так...'))
        .finally(() => formPost.reset());
});
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





// fetch('http://localhost:3000/products')
//     .then(data => data.json())
//     .then(data => console.log(data));


fetch('http://localhost:3000/requests')
    .then(data => data.json())
    .then(data => console.log(data));

