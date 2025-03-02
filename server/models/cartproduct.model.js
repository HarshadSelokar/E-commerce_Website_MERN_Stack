import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema({

    productId : {

        type : String,
        ref : 'product'
    },
    quantity : {
        type : Number,
        default : 1

    },
    userId : {

        type : mongoose.Schema.ObjectId,
        ref : "User"
    }

},{

    timestamps : true
}
)

const CartProduct = mongoose.model('carProduct', cartProductSchema)

export default CartProduct