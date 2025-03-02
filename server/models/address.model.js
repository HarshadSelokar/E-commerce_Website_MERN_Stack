import mongoose, { Mongoose } from "mongoose";

const addressSChema = new mongoose.Schema({

    address_line :{

        type : String,
        default : ""
    },
    city : {

        type : String,
        default : ""
    },
    state : {

        type : String
    },
    pincode : {

        type : String
    },
    country : {

        type : String
    }, 
    mobile : {

        type : Number,
        default : null
    },
    status : {
        type : Boolean,
        default : true
    }
}, 
{

    timestamps : true
}

)

const AddressModel = mongoose.model('address', addressSChema)


export default AddressModel