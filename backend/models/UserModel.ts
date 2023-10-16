import mongoose, { Schema } from "mongoose"
import date from "date-and-time"

export interface IUser extends Document {
  name: string
  email?: string
  phone: string
  isAdmin: boolean
  isVerified: boolean
  accountDetails?: string
  reviews: mongoose.Types.ObjectId[]
  accessToken?: string
  refreshToken: string[]
  provider: string
  createdAt: Date
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
      // unique: true
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    phone: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    accountDetails: {
      type: String,
      // default: false
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    accessToken: {
      type: String,
    },
    refreshToken: [String],
    provider: {
      type: String,
      default: "email",
    },
  },
  {
    timestamps: true,
  }
)

// // match user entered password to hashed password in database
// userSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password)
// };

// // encrypt password using bcrypt hashing
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         next()
//     }

//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt)
// })

// get review count
userSchema.virtual("reviewCount").get(function () {
  return this.reviews.length
})

// format createdAt date
userSchema.virtual("createdAtFormatted").get(function () {
  return date.format(this.createdAt, "dddd MMM DD, YYYY")
})

const User = mongoose.model("User", userSchema)

export default User
