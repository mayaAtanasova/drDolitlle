module.exports = app => {
    const services = require('../controllers/service.controller.js');
    const router = require('express').Router();
    const { verifyToken, isAdmin } = require('../middleware/authJwt');

    // Create a new Service
    router.post('/', verifyToken, isAdmin, services.create);

    // Retrieve all Services
    router.get('/', services.findAll);

    // Update a Service by id
    router.put('/:id', verifyToken, isAdmin, services.update);

    // Delete a Service by id
    router.delete('/:id', verifyToken, isAdmin, services.delete);

    app.use('/servicelist', router);
};