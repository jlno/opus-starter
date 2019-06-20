import { Model, Types } from 'mongoose';
import { User } from '../models/user';

export class UserDAO {

  /**
   * getUserModel
   */
  private getUserModel(): Model<any> {
    return new User().getModelForClass(User);
  }

  /**
   * find
   * 
   * @param conditions 
   */
  async find(conditions?: any): Promise<User[]> {
    return await this.getUserModel().find(conditions);
  }

  /**
   * findById
   * 
   * @param id 
   */
  async findById(id: string): Promise<User> {
    return await this.getUserModel().findById(id);
  }

  /**
   * save
   * 
   * @param data 
   */
  async save(data: User): Promise<User> {
    const User = this.getUserModel();
    const newUser = new User(data);
    return await newUser.save();
  }

  /**
   * update
   * 
   * @param id 
   * @param data 
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
    return await this.getUserModel().deleteOne({ _id: id });
  }

}
