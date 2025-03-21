import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //one who is `SUBSCRIBING` ex: me
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, //one to whom `subscriber` is SUBSCRIBING ex: MrBeast
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
