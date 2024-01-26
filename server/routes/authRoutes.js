
const {Router} = require('express');
const authContoller = require('../controllers/authController');
const router = Router();

router.post('/register',authContoller.user_register);
router.post('/login',authContoller.user_login);

module.exports = router;