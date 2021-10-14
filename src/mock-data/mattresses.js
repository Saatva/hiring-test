const data = {
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
            "reviewRating": 1.0,
            "imageFileName": "loom-carousel.jpg"
        },
        "zen": {
            "name": "Zenhaven",
            "price": 1599,
            "reviewRating": 2.5,
            "imageFileName": "zen-carousel.jpg"
        }
    }
};

const mattresses = [];

// convert data to an array so it's easier to work with
for (var key in data.mattresses) {
    data.mattresses[key].id = key;
    mattresses.push(data.mattresses[key])
}

export default mattresses;