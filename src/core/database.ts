import mongoose from 'mongoose';
import { DB_HOST, DB_NAME } from '../config';

export class Database {

  constructor() {
    this.connect();
  }

  connect(): void {
    mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`, { useNewUrlParser: true })
      .then(() => {
        console.log('Database connection successful');
      })
      .catch(err => {
        console.error('Database connection error:', err);
      })
  }

}
