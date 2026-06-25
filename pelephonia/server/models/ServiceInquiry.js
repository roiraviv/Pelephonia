import mongoose from 'mongoose'

const serviceInquirySchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, 'שם הלקוח הוא שדה חובה'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'מספר טלפון הוא שדה חובה'],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    deviceType: {
      type: String,
      enum: ['phone', 'tablet', 'computer', 'other'],
      required: true,
    },
    deviceBrand: {
      type: String,
      trim: true,
    },
    deviceModel: {
      type: String,
      trim: true,
    },
    issueDescription: {
      type: String,
      required: [true, 'תיאור התקלה הוא שדה חובה'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed', 'cancelled'],
      default: 'pending',
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
)

const ServiceInquiry = mongoose.model('ServiceInquiry', serviceInquirySchema)

export default ServiceInquiry
