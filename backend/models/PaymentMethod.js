import mongoose, { Schema } from 'mongoose'

const PaymentMethodSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true // Associate payment method with user
    },
    type: {
        type: String,
        enum: ["Bank Account", "Credit Card", "Other", "Paypal"],
        required: true
    },
    cardNumber: String,
    expirationDate: String,
    bankName: String,
    accountNumber: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model("PaymentMethod", PaymentMethodSchema)

