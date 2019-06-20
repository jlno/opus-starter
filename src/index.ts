import { Database } from './core/database';
import { Express } from './core/express';
import { UserService } from './services/user-service';

Express.getApp().listen(3000, () => {
  new Database();
  new UserService();
});
