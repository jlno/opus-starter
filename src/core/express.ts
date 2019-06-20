import bodyParser from 'body-parser';
import express, { Express as App } from 'express';

export namespace Express {
    const app: App = express();
    const servicePath: any = {};

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    export function getApp(): App {
        return app;
    };

    export function getPathList(key: string): any[] {
        return servicePath[key];
    };

    export function setPathList(key: string, value: any[]): void {
        servicePath[key] = value;
    };

}
