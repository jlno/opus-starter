import { Request, Response } from 'express';
import { UserController } from '../controllers/user-controller';
import { del, get, inject, path, post, put } from '../core/decorators';

/**
 * UserService
 */
@path('/user')
export class UserService {

  /**
   * userController
   */
  @inject
  private userController: UserController;

  /**
   * findAll
   * 
   * @param request 
   * @param response 
   */
  @get()
  async findAll(request: Request, response: Response): Promise<void> {
    try {
      const users = await this.userController.findAll();

      response.send(users);

    } catch (e) {
      response.status(500).send(e);
    }
  }

  /**
   * search
   * 
   * @param request 
   * @param response 
   */
  @get('/:id')
  async search(request: Request, response: Response): Promise<void> {
    try {
      const user = await this.userController.search(request.params.id);

      response.send(user);

    } catch (e) {
      response.status(500).send(e);
    }
  }

  /**
   * save
   * 
   * @param request 
   * @param response 
   */
  @post()
  async save(request: Request, response: Response): Promise<void> {
    try {
      const user = await this.userController.save(request.body);

      response.send(user);

    } catch (e) {
      response.status(500).send(e);
    }
  }

  /**
   * update
   * 
   * @param request 
   * @param response 
   */
  @put('/:id')
  async update(request: Request, response: Response): Promise<void> {
    try {
      const result = await this.userController.update(request.params.id, request.body);

      response.send(result);

    } catch (e) {
      response.status(500).send(e);
    }
  }

  /**
   * remove
   * 
   * @param request 
   * @param response 
   */
  @del('/:id')
  async remove(request: Request, response: Response): Promise<void> {
    try {
      const result = await this.userController.remove(request.params.id);

      response.send(result);

    } catch (e) {
      response.status(500).send(e);
    }
  }

}
