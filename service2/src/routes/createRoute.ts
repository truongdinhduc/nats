import express from "express";

const API_PREFIX = process.env.API_PREFIX

const createRoute = (app: express.Application, method: string, endpoint: string, callback: (req: express.Request, res: express.Response, next: express.NextFunction) => void) => {
    let path = `${API_PREFIX}${endpoint}`
    switch (method) {
        case `POST`:
            app.post(path,
                function (req, res, next) {
                    callback(req, res, next)
                });
            break;
        case `GET`:
            app.get(path,
                function (req, res, next) {
                    callback(req, res, next)
                });
            break;
        case `DELETE`:
            app.delete(path,
                function (req, res, next) {
                    callback(req, res, next)
                });
            break;
        case `PUT`:
            app.put(path,
                function (req, res, next) {
                    callback(req, res, next)
                });
            break;
        default:
            break;
    }
}

export default createRoute;
