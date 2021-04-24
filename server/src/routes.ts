
import { Router, Request, Response, RouterOptions } from 'express';

import { multerConfig } from './config/multer';
import multer from 'multer';

import { CountryController } from './controllers/CountryController';
import { ManagerController } from './controllers/ManagerController';
import { RoomController } from './controllers/RoomController';
import { StudentController } from './controllers/StudentController';
import {AuthenticateManager } from './controllers/AuthenticateManager'
import { Auth } from './middlewares/authMiddleware';
import {PostImage} from './controllers/ImagePostController'

const router = Router();
const authenticateManager = new AuthenticateManager()
router.post('/session',authenticateManager.authenticate)


 



const studentController = new StudentController()


router.post("/students",multer(multerConfig).single('file'),studentController.create)


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
router.get("/country",countryController.show)

/**************************************************** */

const managerController = new ManagerController()
router.post("/manager",managerController.create)



const auth = new Auth();
router.get('/manager',auth.authMiddleware,managerController.index)

/**************************************** */

router.get('/foto', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Code83' })
})

/* router.post('/posts',multer(multerConfig).single('file'), (request: Request, response: Response) => {
    
    console.log(request.file)
    
    return response.json({ message: 'Imagem enviada' })
}) */

const imagePostController = new PostImage();

router.post('/posts',multer(multerConfig).single('file'),imagePostController.create)
router.get('/posts',imagePostController.show)
export {router}