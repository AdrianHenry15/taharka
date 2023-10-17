import mongoose, { Schema } from 'mongoose'

const paymentMethodSchema = new Schema({
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

const PaymentMethod = mongoose.model("PaymentMethod", paymentMethodSchema)

export default paymentMethodSchema


