import express from 'express';
import cors from 'cors'

const setup = (app: express.Application) => {
    app.use(cors());
    app.use(express.json());
    app.use(
        express.urlencoded({
            extended: true,
        })
    );

    app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
        res.setHeader("Access-Control-Allow-Origin", "*");

        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        );

        res.setHeader(
            "Access-Control-Allow-Headers",
            "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-Access-Token, XKey, Authorization"
        );
        
        next();
    });

    return app;
};

export default setup;
