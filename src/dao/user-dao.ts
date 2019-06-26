import { Model } from 'mongoose';
import { User } from '../models/user';

export class UserDAO {

  /**
   * model
   */
  private get model(): Model<any> {
    return new User().getModelForClass(User);
  }

  /**
   * find
   * 
   * @param conditions 
   */
  async find(conditions?: any): Promise<User[]> {
    return await this.model.find(conditions);
  }

  /**
   * findById
   * 
   * @param id 
   */
  async findById(id: string): Promise<User> {
    return await this.model.findById(id);
  }

  /**
   * save
   * 
   * @param data 
   */
  async save(data: User): Promise<User> {
    const Model = this.model;
    const content = new Model(data);
    return await content.save();
  }

  /**
   * update
   * 
   * @param id 
   * @param data 
   */
  async update(id: string, data: User): Promise<any> {
    return await this.model.updateOne({ _id: id }, data);
  }

  /**
   * remove
   * 
   * @param id 
   */
  async remove(id: string): Promise<any> {
    return await this.model.deleteOne({ _id: id });
  }

}
