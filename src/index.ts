import { APP_PORT } from './config';
import { Database } from './core/database';
import { Express } from './core/express';
import { UserService } from './services/user-service';

Express.getApp().listen(APP_PORT, () => {
  new Database();
  new UserService();
});
