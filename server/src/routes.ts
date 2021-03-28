
import {Router} from 'express';
import { CountryController } from './controllers/CountryController';
import { ManagerController } from './controllers/ManagerController';
import { RoomController } from './controllers/RoomController';
import { StudentController } from './controllers/StudentController';
import {AuthenticateManager } from './controllers/AuthenticateManager'
import { Auth } from './middlewares/authMiddleware';


const router = Router();
const authenticateManager = new AuthenticateManager()
router.post('/session',authenticateManager.authenticate)






const studentController = new StudentController()


router.post("/students",studentController.create)


router.get("/students",studentController.show)
router.get("/students/:surname",studentController.showforSurname)
router.put("/students/:id",studentController.update)

router.delete("/students/:id",studentController.delete)
/*/**************************************************/

const roomController = new RoomController()
router.post("/students/rooms", roomController.create)
router.get("/students/rooms", roomController.show)
/************************************************* */
const countryController = new CountryController();
router.post("/students/country",countryController.create)
router.get("/students/country", countryController.show)

/**************************************************** */

const managerController = new ManagerController()
router.post("/manager",managerController.create)



const auth = new Auth();
router.get('/manager',auth.authMiddleware,managerController.index)


export {router}