import { Request, Response } from 'express';
import { UserController } from '../controllers/user-controller';
import { del, get, path, post, put } from '../core/decorators';

/**
 * UserService
 */
@path('/user')
export class UserService {

    /**
     * getController
     */
    getController(): UserController {
        return new UserController();
    }

    /**
     * findAll
     * 
     * @param request 
     * @param response 
     */
    @get()
    async findAll(request: Request, response: Response): Promise<void> {
        try {
            const users = await this.getController()
                .findAll();

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
            const user = await this.getController()
                .search(request.params.id);

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
            const user = await this.getController()
                .save(request.body);

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
            const user = await this.getController()
                .update(request.params.id, request.body);

            response.send(user);

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
            const user = await this.getController()
                .remove(request.params.id);

            response.send(user);

        } catch (e) {
            response.status(500).send(e);
        }
    }

}
