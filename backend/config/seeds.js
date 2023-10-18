import connectDB from './db.js'
import User from "../models/UserModel.js"
import Product from "../models/ProductModel.js"
import Image from "../models/ImageModel.js"
import dotenv from 'dotenv'
dotenv.config()

const seedData = async () => {
    try {
        await Product.deleteMany();

        // create all seeds
        await Product.insertMany([
            {
                "sku": "SKU124",
                "name": "Vanilla Bean",
                "slug": "vanilla-bean",
                "image": new Image({
                    "name": "Vanilla Bean",
                    "fileName": "vanilla_bean.webp"
                }),
                "description": "Madagascar vanilla ice cream with vanilla bean seeds.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU125",
                "name": "Black Cherry Chunk",
                "slug": "black-cherry-chunk",
                "image": new Image({
                    "name": "Black Cherry Chunk",
                    "fileName": "black-cherry-chunk.webp"
                }),
                "description": "Cherry ice cream with cherries and chunks of chocolate.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU126",
                "name": "Caramel Crunch",
                "slug": "caramel-crunch",
                "image": new Image({
                    "name": "Carmamel Crunch",
                    "fileName": "carmel-crunch.webp"
                }),
                "description": "Salted caramel ice cream with chocolate covered honeycomb toffee.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU127",
                "name": "Chocolate Love",
                "slug": "chocolate-love",
                "image": new Image({
                    "name": "Chocoloate Love",
                    "fileName": "chocolate-love.webp"
                }),
                "description": "Dark chocolate ice cream with a chocolate cookie swirl.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU128",
                "name": "Cookie Dough",
                "slug": "cookie-dough",
                "image": new Image({
                    "name": "Cookie Dough",
                    "fileName": "cookie-dough.webp"
                }),
                "description": "Brown sugar ice cream with chocolate chips and globs of cookie dough.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU129",
                "name": "Cookies and Coffee",
                "slug": "cookies-and-coffee",
                "image": new Image({
                    "name": "Cookies and Coffee",
                    "fileName": "cookies-and-coffee.webp"
                }),
                "description": "Coffee ice cream with cookie pieces.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU130",
                "name": "Honey Graham",
                "slug": "honey-graham",
                "image": new Image({
                    "name": "Honey Graham",
                    "fileName": "honey_graham.webp"
                }),
                "description": "Graham ice cream with a graham cracker swirl.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU131",
                "name": "Keep Ya Head Up",
                "slug": "keep-ya-head-up",
                "image": new Image({
                    "name": "Keep Ya Head Up",
                    "fileName": "keep-ya-head-up.webp"
                }),
                "description": "Vanilla ice cream with blackberry sauce and oatmeal crisp - our version of a blackberry crumble with a scoop of vanilla ice crema on top.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU132",
                "name": "Key Lime Pie",
                "slug": "key-lime-pie",
                "image": new Image({
                    "name": "Key Lime Pie",
                    "fileName": "key-lime-pie.webp"
                }),
                "description": "Key lime ice cream with a graham cracker swirl.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU133",
                "name": "Matcha Mochi",
                "slug": "matcha-mochi",
                "image": new Image({
                    "name": "Matcha Mochi",
                    "fileName": "matcha-mochi.webp"
                }),
                "description": "Matcha green tea ice cream studded with mini mochi pieces.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU134",
                "name": "Mintflix and Chillz",
                "slug": "mintflix-and-chillz",
                "image": new Image({
                    "name": "Mintflix and Chillz",
                    "fileName": "mintflix-and-chillz.webp"
                }),
                "description": "Peppermint ice cream with homemade peppermint patties & a chocolate cookie crumb swirl.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU135",
                "name": "Non-Dairy Chocolate Love",
                "slug": "non-dairy-chocolate-love",
                "image": new Image({
                    "name": "Non-Dairy Chocolate Love",
                    "fileName": "non-dairy-chocolate.webp"
                }),
                "description": "Dark chocolate ice cream with a chocolate cookie swirl.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU136",
                "name": "Non-Dairy Roasted Strawberry",
                "slug": "non-dairy-roasted-strawberry",
                "image": new Image({
                    "name": "Non-Dairy Roasted Strawberry",
                    "fileName": "non-dairy-roasted-strawberry.webp"
                }),
                "description": "Non-dairy strawberry ice cream made with coconut milk.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU137",
                "name": "Peanut Butter Cup",
                "slug": "peanut-butter-cup",
                "image": new Image({
                    "name": "Peanut Butter Cup",
                    "fileName": "peanut-butter-cup.webp"
                }),
                "description": "Salted peanut butter ice cream with chunks of crushed peanut butter cups.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU138",
                "name": "Pistachio",
                "slug": "pistachio",
                "image": new Image({
                    "name": "Pistachio",
                    "fileName": "pistachio.webp"
                }),
                "imageUrl": "../assets/imgs/pistachio.webp",
                "imageKey": "pistachio.webp",
                "description": "Pistachio ice cream with a touch of almond flavor.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU139",
                "name": "Roasted Strawberry",
                "slug": "roasted-strawberry",
                "image": new Image({
                    "name": "Roasted Strawberry",
                    "fileName": "roasted-strawberry.webp"
                }),
                "description": "Roasted strawberry are the secret ingredients for this flavor - bold strawberry flavor, creamy, dense texture.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "sku": "SKU140",
                "name": "Vanilla",
                "slug": "vanilla",
                "image": new Image({
                    "name": "Vanilla",
                    "fileName": "vanilla_bean.webp",
                }),
                "description": "Madagascar vanilla ice cream with specks of vanilla beans.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
        ]);

        console.log("Products seeded");

        await User.deleteMany();

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
    } catch (error) {
        console.error(`Error seeding data: ${error}`)
        process.exit(1)
    }
};


connectDB()
    .then(() => seedData())
    .catch((error) => {
        console.error(`Error connecting to MongoDB: ${error}`);
        process.exit(1);
    });