## Mattress Shop Page: A Pairing

### Objective
Expand on the take home exercise to fetch external data. Time permitting, complete requirements 2-3 in order.

#### Requirements
1. Create an internal api endpoint that fetches from the following external resources and returns a transformed dataset matching the data your app is currently relying on. Use the endpoint's response as your new data source.
    - mattress data: `https://w5uw2yuhpg.execute-api.us-east-1.amazonaws.com/api/products?set=mattresses`
    - content data: `https://w5uw2yuhpg.execute-api.us-east-1.amazonaws.com/api/products?set=content`
    - Replace the value for "name" with the value in "label" (from the "content data") for each mattress.
2. Improve the implementation of an existing feature of your app.
3. Make an improvement to the cart feature.

##### mattress response:
```
{
    "mattresses": {
        "classic": {
            "name": "Saatva Classic",
            "price": 999,
            "reviewRating": 4.9
        },
        "loom": {
            "name": "Loom &amp; Leaf",
            "price": 1299,
            "reviewRating": 4
        },
        "zen": {
            "name": "Zenhaven",
            "price": 1599,
            "reviewRating": 4.5
        }
    }
}
```

##### content response:git
```
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
```