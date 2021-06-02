const experess = require('experess');
const router = express.Router();
const db = requiere("../src/db");

router.get('/', function (req, res, next){
    res.render('index', {title: 'Express'})
})