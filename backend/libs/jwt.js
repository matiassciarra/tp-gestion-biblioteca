//En este fichero van estar las funciones para crear token

import jwt from 'jsonwebtoken'
import { PALABRA_SECRETA } from '../src/config.js'

export const createAccessToken = (payload) => {
    return new Promise((resolve, reject)=>{
        jwt.sign(payload,PALABRA_SECRETA, (err,token)=>{
            if (err) reject(err)
            resolve(token)
        })
    }) 
}
