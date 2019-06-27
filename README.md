<img src="https://i.imgur.com/QbnHjRQ.png" />
<img src="https://travis-ci.org/jlno/opus-starter.svg?branch=master" />

## Routing
Was created custom decorators for map application endpoints (URIs) to client requests:
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
Creates a instance of the variable type.
```typescript
export class UserController {

  @inject
  private userDAO: UserDAO;
  ...
}
```

## Model
The MongoDB schema definition.
```typescript
class User extends Typegoose {

   _id: string;

  @prop({ required: true })	
  name: string;

  @prop()
  age: number;

 }
```
