import connectDB from './db.js'
import User from "../models/UserModel.js"
import Product from "../models/ProductModel.js"
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
dotenv.config()

// hash the password
const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10) // salt rounds can be adjusted
    return hashedPassword
}

const seedData = async () => {
    try {
        const hashedPassword = await hashPassword(process.env.ADMIN_PASSWORD)
        await Product.deleteMany();

        // create all seeds
        await Product.insertMany([
            {
                "devId": 1,
                "sku": "SKU125",
                "name": "Black Cherry Chunk",
                "slug": "black-cherry-chunk",
                "image": "http://localhost:8000/public/imgs/black-cherry-chunk.webp",
                "description": "Cherry ice cream with cherries and chunks of chocolate.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "devId": 2,
                "sku": "SKU126",
                "name": "Caramel Crunch",
                "slug": "caramel-crunch",
                "image": "http://localhost:8000/public/imgs/caramel-crunch.webp",
                "description": "Salted caramel ice cream with chocolate covered honeycomb toffee.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "devId": 3,
                "sku": "SKU127",
                "name": "Chocolate Love",
                "slug": "chocolate-love",
                "image": "http://localhost:8000/public/imgs/chocolate-love.webp",
                "description": "Dark chocolate ice cream with a chocolate cookie swirl.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "devId": 4,
                "sku": "SKU128",
                "name": "Cookie Dough",
                "slug": "cookie-dough",
                "image": "http://localhost:8000/public/imgs/cookie-dough.webp",
                "description": "Brown sugar ice cream with chocolate chips and globs of cookie dough.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "devId": 5,
                "sku": "SKU129",
                "name": "Cookies and Coffee",
                "slug": "cookies-and-coffee",
                "image": "http://localhost:8000/public/imgs/cookies-and-coffee.webp",
                "description": "Coffee ice cream with cookie pieces.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "devId": 6,
                "sku": "SKU130",
                "name": "Honey Graham",
                "slug": "honey-graham",
                "image": "http://localhost:8000/public/imgs/honey_graham.webp",
                "description": "Graham ice cream with a graham cracker swirl.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "devId": 7,
                "sku": "SKU131",
                "name": "Keep Ya Head Up",
                "slug": "keep-ya-head-up",
                "image": "http://localhost:8000/public/imgs/keep-ya-head-up.webp",
                "description": "Vanilla ice cream with blackberry sauce and oatmeal crisp - our version of a blackberry crumble with a scoop of vanilla ice crema on top.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "devId": 8,
                "sku": "SKU132",
                "name": "Key Lime Pie",
                "slug": "key-lime-pie",
                "image": "http://localhost:8000/public/imgs/key-lime-pie.webp",
                "description": "Key lime ice cream with a graham cracker swirl.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "devId": 9,
                "sku": "SKU133",
                "name": "Matcha Mochi",
                "slug": "matcha-mochi",
                "image": "http://localhost:8000/public/imgs/matcha-mochi.webp",
                "description": "Matcha green tea ice cream studded with mini mochi pieces.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "devId": 10,
                "sku": "SKU134",
                "name": "Mintflix and Chillz",
                "slug": "mintflix-and-chillz",
                "image": "http://localhost:8000/public/imgs/mintflix-and-chillz.webp",
                "description": "Peppermint ice cream with homemade peppermint patties & a chocolate cookie crumb swirl.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "devId": 11,
                "sku": "SKU135",
                "name": "Non-Dairy Chocolate Love",
                "slug": "non-dairy-chocolate-love",
                "image": "http://localhost:8000/public/imgs/non-dairy-chocolate.webp",
                "description": "Dark chocolate ice cream with a chocolate cookie swirl.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "devId": 12,
                "sku": "SKU136",
                "name": "Non-Dairy Roasted Strawberry",
                "slug": "non-dairy-roasted-strawberry",
                "image": "http://localhost:8000/public/imgs/non-dairy-roasted-strawberry.webp",
                "description": "Non-dairy strawberry ice cream made with coconut milk.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "devId": 13,
                "sku": "SKU137",
                "name": "Peanut Butter Cup",
                "slug": "peanut-butter-cup",
                "image": "http://localhost:8000/public/imgs/peanut-butter-cup.webp",
                "description": "Salted peanut butter ice cream with chunks of crushed peanut butter cups.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "devId": 14,
                "sku": "SKU138",
                "name": "Pistachio",
                "slug": "pistachio",
                "image": "http://localhost:8000/public/imgs/pistachio.webp",
                "description": "Pistachio ice cream with a touch of almond flavor.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "devId": 15,
                "sku": "SKU139",
                "name": "Roasted Strawberry",
                "slug": "roasted-strawberry",
                "image": "http://localhost:8000/public/imgs/roasted-strawberry.webp",
                "description": "Roasted strawberry are the secret ingredients for this flavor - bold strawberry flavor, creamy, dense texture.",
                "price": 14.00,
                "taxable": true,
                "isActive": true
            },
            {
                "devId": 16,
                "sku": "SKU140",
                "name": "Vanilla",
                "slug": "vanilla",
                "image": "http://localhost:8000/public/imgs/vanilla_bean.webp",
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
                    phoneNumber: "321-370-0836",
                    password: process.env.ADMIN_PASSWORD,
                    isAdmin: true,
                    isVerified: true
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