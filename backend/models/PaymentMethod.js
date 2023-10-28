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

// format createdAt date
PaymentMethodSchema.virtual("createdAtFormatted").get(function () {
    return date.format(this.createdAt, "dddd MMM DD, YYYY")
})

export default mongoose.model("PaymentMethod", PaymentMethodSchema)

