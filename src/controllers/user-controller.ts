import { inject } from '../core/decorators';
import { UserDAO } from '../dao/user-dao';
import { User } from '../models/user';

/**
 * UserController
 */
export class UserController {

  /**
   * userDAO
   */
  @inject
  private userDAO: UserDAO;

  /**
   * findAll
   */
  async findAll(): Promise<User[]> {
    return await this.userDAO.find();
  }

  /**
   * search
   * 
   * @param id 
   */
  async search(id: string): Promise<User> {
    return await this.userDAO.findById(id);
  }

  /**
   * save
   * 
   * @param userDTO 
   */
  async save(data: User): Promise<User> {
    return await this.userDAO.save(data);
  }

  /**
   * update
   * 
   * @param userDTO 
   */
  async update(id: string, data: User): Promise<any> {
    return await this.userDAO.update(id, data);
  }

  /**
   * remove
   * 
   * @param id 
   */
  async remove(id: string): Promise<any> {
    return await this.userDAO.remove(id);
  }

}
