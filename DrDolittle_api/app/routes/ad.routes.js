module.exports = app => {
    const ads = require('../controllers/ad.controller.js');
    const router = require('express').Router();
    const multer = require('multer');

    const upload = multer({
        dest: './app/uploads',
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        },
        fileFilter: (req, file, cb) => {
            if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
                cb(null, true);
            } else {
                cb(null, false);
            }
        }
    });

    // Create a new Ad
    router.post('/', upload.single('adImage'), ads.create);

    // Retrieve all Ads Paginated
    router.get('/', ads.findAll);

    //Retrieve last three ads
    router.get('/lastthree', ads.findLastThree);

    // Retrieve a single Ad by id
    router.get('/:id', ads.findOne);

    // Update an Ad by id
    router.put('/:id', ads.update);

    // Delete an Ad by id
    router.delete('/:id', ads.delete);

    // Delete All Ads
    router.delete('/', ads.deleteAll);

    app.use('/adlist', router);
};