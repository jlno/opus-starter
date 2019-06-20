import { prop, Typegoose } from 'typegoose';

/**
 * User
 */
export class User extends Typegoose {

    _id: string;

    @prop({ required: true })
    name: string;

    @prop()
    age: number;

}
