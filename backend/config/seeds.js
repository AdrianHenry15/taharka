import db from './db.js'
import User from "../models/UserModel.js"
import Product from "../models/ProductModel.js"

db.once("open", async () => {
    // await Product.deleteMany();

    // create all seeds
    await Product.insertMany([
        {
            "sku": "SKU124",
            "name": "Vanilla Bean",
            "slug": "vanilla-bean",
            "imageUrl": "../assets/imgs/vanilla_bean.webp",
            "imageKey": "vanilla_bean.webp",
            "description": "Madagascar vanilla ice cream with vanilla bean seeds.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU125",
            "name": "Black Cherry Chunk",
            "slug": "black-cherry-chunk",
            "imageUrl": "../assets/imgs/black-cherry-chunk.webp",
            "imageKey": "black-cherry-chunk.webp",
            "description": "Cherry ice cream with cherries and chunks of chocolate.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU126",
            "name": "Caramel Crunch",
            "slug": "caramel-crunch",
            "imageUrl": "../assets/imgs/carmel-crunch.webp",
            "imageKey": "carmel-crunch.webp",
            "description": "Salted caramel ice cream with chocolate covered honeycomb toffee.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU127",
            "name": "Chocolate Love",
            "slug": "chocolate-love",
            "imageUrl": "../assets/imgs/chocolate-love.webp",
            "imageKey": "chocolate-love.webp",
            "description": "Dark chocolate ice cream with a chocolate cookie swirl.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU128",
            "name": "Cookie Dough",
            "slug": "cookie-dough",
            "imageUrl": "../assets/imgs/cookie-dough.webp",
            "imageKey": "cookie-dough.webp",
            "description": "Brown sugar ice cream with chocolate chips and globs of cookie dough.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU129",
            "name": "Cookies and Coffee",
            "slug": "cookies-and-coffee",
            "imageUrl": "../assets/imgs/cookies-and-coffee.webp",
            "imageKey": "cookies-and-coffee.webp",
            "description": "Coffee ice cream with cookie pieces.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU130",
            "name": "Honey Graham",
            "slug": "honey-graham",
            "imageUrl": "../assets/imgs/honey_graham.webp",
            "imageKey": "honey_graham.webp",
            "description": "Graham ice cream with a graham cracker swirl.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU131",
            "name": "Keep Ya Head Up",
            "slug": "keep-ya-head-up",
            "imageUrl": "../assets/imgs/keep-ya-head-up.webp",
            "imageKey": "keep-ya-head-up.webp",
            "description": "Vanilla ice cream with blackberry sauce and oatmeal crisp - our version of a blackberry crumble with a scoop of vanilla ice crema on top.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU132",
            "name": "Key Lime Pie",
            "slug": "key-lime-pie",
            "imageUrl": "../assets/imgs/keep-ya-head-up.webp",
            "imageKey": "keep-ya-head-up.webp",
            "description": "Key lime ice cream with a graham cracker swirl.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU133",
            "name": "Matcha Mochi",
            "slug": "matcha-mochi",
            "imageUrl": "../assets/imgs/matcha-mochi.webp",
            "imageKey": "matcha-mochi.webp",
            "description": "Matcha green tea ice cream studded with mini mochi pieces.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU134",
            "name": "Mintflix and Chillz",
            "slug": "mintflix-and-chillz",
            "imageUrl": "../assets/imgs/mintflix-and-chillz.webp",
            "imageKey": "mintflix-and-chillz.webp",
            "description": "Peppermint ice cream with homemade peppermint patties & a chocolate cookie crumb swirl.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU135",
            "name": "Mintflix and Chillz",
            "slug": "mintflix-and-chillz",
            "imageUrl": "../assets/imgs/mintflix-and-chillz.webp",
            "imageKey": "mintflix-and-chillz.webp",
            "description": "Peppermint ice cream with homemade peppermint patties & a chocolate cookie crumb swirl.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU136",
            "name": "Non-Dairy Chocolate Love",
            "slug": "non-dairy-chocolate-love",
            "imageUrl": "../assets/imgs/non-dairy-chocolate.webp",
            "imageKey": "non-dairy-chocolate.webp",
            "description": "Dark chocolate ice cream with a chocolate cookie swirl.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU137",
            "name": "Non-Dairy Roasted Strawberry",
            "slug": "non-dairy-roasted-strawberry",
            "imageUrl": "../assets/imgs/non-dairy-roasted-strawberry.webp",
            "imageKey": "non-dairy-roasted-strawberry.webp",
            "description": "Non-dairy strawberry ice cream made with coconut milk.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU138",
            "name": "Peanut Butter Cup",
            "slug": "peanut-butter-cup",
            "imageUrl": "../assets/imgs/peanut-butter-cup.webp",
            "imageKey": "peanut-butter-cup.webp",
            "description": "Salted peanut butter ice cream with chunks of crushed peanut butter cups.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU139",
            "name": "Pistachio",
            "slug": "pistachio",
            "imageUrl": "../assets/imgs/pistachio.webp",
            "imageKey": "pistachio.webp",
            "description": "Pistachio ice cream with a touch of almond flavor.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU140",
            "name": "Roasted Strawberry",
            "slug": "roasted-strawberry",
            "imageUrl": "../assets/imgs/roasted-strawberry.webp",
            "imageKey": "roasted-strawberry.webp",
            "description": "Roasted strawberry are the secret ingredients for this flavor - bold strawberry flavor, creamy, dense texture.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
        {
            "sku": "SKU141",
            "name": "Vanilla",
            "slug": "vanilla",
            "imageUrl": "../assets/imgs/vanilla_bean.webp",
            "imageKey": "vanilla_bean.webp",
            "description": "Madagascar vanilla ice cream with specks of vanilla beans.",
            "price": 14.00,
            "taxable": true,
            "isActive": true
        },
    ]);

    console.log("Products seeded");

    // await User.deleteMany();

    await User.create(
        [
            {
                name: "Adrian Henry",
                email: "adrianhenry2115@gmail.com",
                phone: "123-123-1234",
                isAdmin: true,
                isVerified: true
            },
            {
                name: "John Doe",
                email: "john@doe.com",
                phone: "333-333-3333",
                isAdmin: false,
                isVerified: false,
            },
        ]
    );

    console.log("Users seeded");

    process.exit();

});