import { Express } from '../express';

export function del(path: string = ''): Function {
    return (
        target: string,
        propertyKey: PropertyKey,
        propertyDescriptor: PropertyDescriptor
    ): void => {

        let pathList: any[] = Express.getPathList(target);

        if (!pathList) {
            pathList = [];
        }

        const data: any = {
            path: path,
            attach: (scope: Function, endpoint: string) => {
                Express
                    .getApp()
                    .delete(endpoint, (...args: any[]) => propertyDescriptor.value.apply(scope(), args));
            }
        };

        Express.setPathList(target, [...pathList, data]);

    };

}
