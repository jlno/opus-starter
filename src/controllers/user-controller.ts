import { Model, Types } from 'mongoose';
import { User } from '../models/user';

/**
 * UserController
 */
export class UserController {

  /**
   * getUserModel
   */
  getUserModel(): Model<any> {
    return new User().getModelForClass(User);
  }

  /**
   * findAll
   */
  async findAll(): Promise<User[]> {
    return await this.getUserModel().find();
  }

  /**
   * search
   */
  async search(id: string): Promise<User> {
    return await this.getUserModel().findById(id);
  }

  /**
   * save
   * 
   * @param userDTO 
   */
  async save(data: User): Promise<User> {
    const User = this.getUserModel();
    const newUser = new User(data);
    return await newUser.save();
  }

  /**
   * update
   * 
   * @param userDTO 
   */
  async update(id: string, data: User): Promise<any> {
    return await this.getUserModel().updateOne({ _id: id }, data);
  }

  /**
   * remove
   * 
   * @param id 
   */
  async remove(id: string): Promise<any> {
    const target = await this.search(id);
    return await this.getUserModel().deleteOne(target);
  }

}
