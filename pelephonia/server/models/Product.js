import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'שם המוצר הוא שדה חובה'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'מחיר הוא שדה חובה'],
      min: [0, 'מחיר לא יכול להיות שלילי'],
    },
    category: {
      type: String,
      enum: ['phones', 'accessories', 'computers'],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      trim: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    condition: {
      type: String,
      enum: ['new', 'refurbished', 'used'],
      default: 'new',
    },
  },
  { timestamps: true },
)

const Product = mongoose.model('Product', productSchema)

export default Product
