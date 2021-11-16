import nc from 'next-connect';
import connectDb from '../../../config/dbconnect';
import { registerUser } from '../../../controllers/userController';
import { errorMiddleWare } from '../../../middlewares/error';

const router = nc({ onError: errorMiddleWare });
connectDb();

//Routes
router.post(registerUser);

export default router;
