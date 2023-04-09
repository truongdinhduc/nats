import express from 'express';

const exampleRoute = async (req: express.Request, res: express.Response) => {
    try {
        res.send('Connect to server successfully.')
    } catch (error) { }
}

export {
    exampleRoute
}