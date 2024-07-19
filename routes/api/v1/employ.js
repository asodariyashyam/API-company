
const express=require('express')

const routes=express.Router();

const employCtl=require('../../../controller/api/v1/employ')

routes.get('/employData',employCtl.employData);

routes.post('/employDataInset',employCtl.employDataInset);

routes.get('/deleteEmployData',employCtl.deleteEmployData)

routes.put('/updateEmployData/:id',employCtl.updateEmployData);




module.exports= routes
