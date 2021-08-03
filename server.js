import bodyParser from 'body-parser'
const express = require('express')
const axios = require('axios')

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/mattress-data', (req, res) => {
  res.send([
      {
        "mattresses": {
            "classic": {
                "name": "Saatva Classic",
                "price": 999,
                "reviewRating": 4.9,
                "imageFileName": "classic-carousel.jpg"
            },
            "loom": {
                "name": "Loom & Leaf",
                "price": 1299,
                "reviewRating": 4.0,
                "imageFileName": "loom-carousel.jpg"
            },
            "zen": {
                "name": "Zenhaven",
                "price": 1599,
                "reviewRating": 4.5,
                "imageFileName": "zen-carousel.jpg"
            }
        }
    },
    [
        {
            "sku": "classic",
            "label": "<span>Saatva Classic Mattress</span>",
            "thumbnail": "https://store.saatva.com/media/catalog/product/t/h/thumb_sm_reg_2x_1_40.jpg",
            "imageFileName": "classic-carousel.jpg"
        },
        {
            "sku": "loom",
            "label": "<span>Loom & Leaf Mattress</span>",
            "thumbnail": "https://store.saatva.com/media/catalog/product/t/h/thumb_ll_reg_2x_12.jpg",
            "imageFileName": "loom-carousel.jpg"
        },
        {
            "sku": "zen",
            "label": "<span>Zenhaven Mattress</span>",
            "imageFileName": "zen-carousel.jpg",
            "thumbnail": "https://store.saatva.com/media/catalog/product/t/h/thumb_zen_reg_2x_4.jpg"
        }
    ]
  ])
})

app.listen(port, () => console.log(`Listening on port ${port}`))
