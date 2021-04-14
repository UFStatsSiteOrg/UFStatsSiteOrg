import {Request, Response, NextFunction} from 'express';

export const validateBody = (req : Request, res : Response, next : NextFunction) => {
    const body : any = req.body;
    if ('code' in body) {
        if (Array.isArray(body.code)) {
            return next();
        }
    } 
    return res.send('Invalid request body shape');
    
} 