import express from 'express';
import { exampleRoute, mysqlQueryExample } from '../controller/example';
import createRoute from './createRoute';

const routes = (app: express.Application) => {
    createRoute(app, 'GET', '', exampleRoute)
    createRoute(app, 'GET', 'mysql/example-query', mysqlQueryExample)
}

export {
    routes
}