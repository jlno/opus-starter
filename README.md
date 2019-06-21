# opus-starter

Nodejs api boilerplate, a easy way to create your api.

## Routing improvements

Pure express routing:
```typescript
app.get('/user', function (req, res) {
  ...
})
```

To:
```typescript
@path('/user')
class UserService {

  @get()
  async findAll(request: Request, response: Response): Promise<void> {
    ...
  }
}
```

## Mongodb schema
Uses <a href="https://github.com/szokodiakos/typegoose">typegoose</a> to define model:
```typescript
class User extends Typegoose {

  _id: string;

  @prop({ required: true })
  name: string;

  @prop()
  age: number;

}
```
