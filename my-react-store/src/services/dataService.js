const catalog = [
    {
        "title": "Chocolatte",
        "category": "fruit",
        "price": 20.00,
        "image": "choco63.png",
        "_id": "1",// The is is Unique! 
    },
    {
        "title": "Hoddie",
        "category": "merchandise",
        "price": 200.00,
        "image": "merch63.png",
        "_id": "2",
    },
    {
        "title": "Milk",
        "category": "grocery",
        "price": 25.00,
        "image": "Milkch63.jpeg",
        "_id": "3",
    },
    {
        "title": "Oranges",
        "category": "fruit",
        "price": 20.00,
        "image": "OrangeCh63.jpeg",
        "_id": "4",
    },
];

class DataService {
    getProducts()
    {
        return catalog;
    }
};

export default DataService;
