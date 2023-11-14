import prismadb from "./prismadb";
import { Products } from "./data";

const seedData = async () => {
    // try {
    //     // Clear existing data (optional, depending on your needs)
    //     await prismadb.product.deleteMany();

    //     // Insert the seed data
    //     const createdProducts = await prismadb.product.createMany({
    //         data: Products,
    //     });

    //     console.log("Product seed data inserted successfully.");
    // } catch (error) {
    //     console.error("Error seeding products:", error);
    // } finally {
    //     await prismadb.$disconnect(); // Disconnect PrismaClient after seeding
    // }

    for (let product of Products) {
        await prismadb.product.create({
            data: product,
        });
    }
};

seedData()
    .catch((e) => {
        console.log(e);

        process.exit(1);
    })
    .finally(() => {
        prismadb.$disconnect();
    });
