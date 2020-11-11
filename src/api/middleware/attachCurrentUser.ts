import { Container } from 'typedi';
import mongoose from 'mongoose';
import {IUser} from '../../interfaces/IUser';
import {Logger} from 'winston';

const attachCurrentUser = async(req, res, next) => {
    const Logger: Logger = Container.get('logger');

    try {
        const UserModel = Container.get('userModel') as mongoose.Model<IUser & mongoose.Document>;
        const userRecord = await UserModel.findById(req.token._id);
        if(!userRecord) return res.sensStatus(401);

        const currentUser = userRecord.toObject();
        Reflect.deleteProperty(currentUser, 'password');
        
        req.currentUser = currentUser;
        return next();
    }catch(e){
        Logger.error('There was an error attaching the user: %o', e);
        return next(e);
    }
}

export default attachCurrentUser;