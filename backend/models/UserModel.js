import mongoose, { Schema } from "mongoose"
import date from "date-and-time"

// export interface IUser extends Document {
//   name: string
//   email?: string
//   savedLocations?: Types.ObjectId[]
//   phone: string
//   isAdmin: boolean
//   isVerified: boolean
//   reviews: Types.ObjectId[]
//   accessToken?: string
//   refreshToken: string[]
//   provider: string
//   createdAt: Date
//   phoneVerificationCode?: string
//   phoneVerificationExpiry?: Date
//   birthday?: string
// }

const UserSchema = new Schema(
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
    phoneVerificationCode: String,
    phoneVerificationExpiry: Date,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    savedLocations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Location",
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
    birthday: {
      type: String,
      match: [
        /^\d{2}\/\d{2}\/\d{4}$/,
        "Please enter a valid birthday 01/01/3030",
      ],
    },
  },
  {
    timestamps: true,
  }
)

// get review count
UserSchema.virtual("reviewCount").get(function () {
  return this.reviews.length
})

// format createdAt date
UserSchema.virtual("createdAtFormatted").get(function () {
  return date.format(this.createdAt, "dddd MMM DD, YYYY")
})

const User = mongoose.model("User", UserSchema)

export default User

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