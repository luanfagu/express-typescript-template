import { IUser } from '../interfaces/IUser'
import mongoose from 'mongoose';

const User = new mongoose.Schema(
    {
        name: {
            type: String
            , required: true
            , index: true
        }
        , email: {
            type: String
            , unique: true
            , required: true
            , index: true
        }
        , password: {
            type: String
            , required: true
        }
        , role: {
            type: String
            , default: 'user'
        }
    }
    , { timestamps: true }
);

export default mongoose.model<IUser & mongoose.Document>('User', User);