const baseUrl = `https://url-shortener-857u.onrender.com`
const getUrl = `${baseUrl}`
const postUrl = `${baseUrl}/`

const shortButton = document.getElementById('shortButton');
const appendUrl = document.querySelector('#appendShortUrl');
const originalUrl = document.querySelector('.originalUrl');

shortButton.addEventListener('click', (e) =>{
    e.preventDefault();
    
    let obj = {'originalUrl': originalUrl.value}

    if(originalUrl.value=="") return alert("Please Enter a URL!")

    postData(obj);
});


const postData = async (data) => {
    try {
        const apiRes = await fetch(postUrl,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const dataRes = await apiRes.json();
        let shortUrl = dataRes.data.shortUrl;
        if(apiRes.status==201) {
            originalUrl.value==""
            return alert(`Your Short URL has been generated see below`), appendUrl.textContent=`${baseUrl}/${shortUrl}`;
        }
    } catch (error) {
        alert("Error: " + error)
    }
}