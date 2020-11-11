import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export default ({ app }:  {app: express.Application}) => {
    app.use(cors());

    app.use(bodyParser.json());


}