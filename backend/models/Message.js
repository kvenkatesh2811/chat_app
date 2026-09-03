import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    senderId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    receiverId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    content: {type: String, required: true, minlength: 2, maxlength: 1000},
    text:{type: String, required: true, minlength: 2, maxlength: 1000},
    seen: {type: Boolean, default: false},   
},{timestamps: true});
const Message = mongoose.model('Message', messageSchema);
export default Message;