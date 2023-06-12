# URL Shortener App Frontend 

<br>

## About

<br>

This is a URL Shortener App Frontend where user can change long url to short url.

##  Folder Structure

```
├── index.html
├── html
├── scripts
|    └── index.js  
├── styles
|    └── index.css
```

<br>

## API endpoints with Base Url

<br>

### BaseUrl : `https://url-shortener-857u.onrender.com/`

<br>

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
        </tr>
    </thead>
        <tbody>
        <tr>
            <td>POST</td>
            <td>`${BaseUrl}/${data}`</td>
            <td>This endpoint should allow users to view shorted URL</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>`${BaseUrl}/`</td>
            <td>This endpoint should allow users to add the original URL in database and generates a short URL</td>
        </tr>
    </tbody>
</table>


</details>