import bodyParser from 'body-parser'
const express = require('express')

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/mattress-data', (req, res) => {
    // mattress data endpoint: https://w5uw2yuhpg.execute-api.us-east-1.amazonaws.com/api/products?set=mattresses
    // content data endpoint: https://w5uw2yuhpg.execute-api.us-east-1.amazonaws.com/api/products?set=mattresses

    res.send({})

    /* Final object should look like this:

    {
        "mattresses": {
            "classic": {
                "name": "<span>Saatva Classic Mattress</span>",
                "price": 999,
                "reviewRating": 4.9,
                "imageFileName": "classic-carousel.jpg"
            },
            "loom": {
                "name": "<span>Loom & Leaf Mattress</span>",
                "price": 1299,
                "reviewRating": 4.0,
                "imageFileName": "loom-carousel.jpg"
            },
            "zen": {
                "name": "<span>Zenhaven Mattress</span>",
                "price": 1599,
                "reviewRating": 4.5,
                "imageFileName": "zen-carousel.jpg"
            }
        }
    }

    */
})

app.listen(port, () => console.log(`Listening on port ${port}`))
