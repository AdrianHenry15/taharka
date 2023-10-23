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
                // "image": "/imgs/black-cherry-chunk.webp",
                "image": "https://taharkabrothers.com/cdn/shop/products/Myproject-1_3.png?v=1671737854&width=360",
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
                "image": "https://taharkabrothers.com/cdn/shop/products/Myproject-1_4.png?v=1671738282&width=360",
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
                "image": "https://taharkabrothers.com/cdn/shop/products/Myproject-1_8.png?v=1671739830&width=360",
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
                "image": "https://taharkabrothers.com/cdn/shop/products/Myproject-1_14.png?v=1673306463",
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
                "image": "https://taharkabrothers.com/cdn/shop/products/Myproject-1_13.png?v=1673306141&width=360",
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
                "image": "https://taharkabrothers.com/cdn/shop/products/Myproject-1_16.png?v=1673306704&width=360",
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
                "image": "https://taharkabrothers.com/cdn/shop/products/Myproject-1_19.png?v=1673307642&width=360",
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
                "image": "https://taharkabrothers.com/cdn/shop/products/Myproject-1_21.png?v=1673308024&width=360",
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
                "image": "https://taharkabrothers.com/cdn/shop/products/Myproject-1_22.png?v=1673308285&width=360",
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
                "image": "https://taharkabrothers.com/cdn/shop/products/Myproject-1_24.png?v=1673308479&width=360",
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
                "image": "https://taharkabrothers.com/cdn/shop/products/Myproject-1_25.png?v=1673308603&width=360",
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
                "image": "https://taharkabrothers.com/cdn/shop/products/Myproject-1_27.png?v=1673309129&width=360",
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
                "image": "https://taharkabrothers.com/cdn/shop/files/updatedpbc3.png?v=1692302790&width=360",
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
                "image": "https://taharkabrothers.com/cdn/shop/products/Myproject-1_28.png?v=1673309318&width=360",
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
                "image": "https://taharkabrothers.com/cdn/shop/products/Myproject-1_30.png?v=1673309441&width=360",
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
                "image": "https://taharkabrothers.com/cdn/shop/products/Myproject-1_31.png?v=1673309512&width=360",
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