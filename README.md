## Routing
* path()
* get()
* post()
* put()
* del()
```typescript
@path('/user')
class UserService {

  @get()
  async findAll(request: Request, response: Response): Promise<void> {
    ...
  }

}
```
## Inject
```typescript
export class UserController {

  @inject
  private userDAO: UserDAO;
  ...
}
```

## Model
```typescript
class User extends Typegoose {
   _id: string;

  @prop({ required: true })	
  name: string;

  @prop()
  age: number;

 }
```
