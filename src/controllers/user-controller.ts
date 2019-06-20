import { User } from '../models/user';
import { UserDAO } from '../dao/user-dao';

/**
 * UserController
 */
export class UserController {

  /**
   * getUserDAO
   */
  private getUserDAO(): UserDAO {
    return new UserDAO();
  }

  /**
   * findAll
   */
  async findAll(): Promise<User[]> {
    return await this.getUserDAO().find();
  }

  /**
   * search
   * 
   * @param id 
   */
  async search(id: string): Promise<User> {
    return await this.getUserDAO().findById(id);
  }

  /**
   * save
   * 
   * @param userDTO 
   */
  async save(data: User): Promise<User> {
    return await this.getUserDAO().save(data);
  }

  /**
   * update
   * 
   * @param userDTO 
   */
  async update(id: string, data: User): Promise<any> {
    return await this.getUserDAO().update(id, data);
  }

  /**
   * remove
   * 
   * @param id 
   */
  async remove(id: string): Promise<any> {
    return await this.getUserDAO().remove(id);
  }

}
