import nc from 'next-connect';
import connectDb from '../../../config/dbconnect';
import { getSingleProduct } from '../../../controllers/productController';
import { errorMiddleWare } from '../../../middlewares/error';
connectDb();
const router = nc({ onError: errorMiddleWare });

//Routes
router.get(getSingleProduct);

export default router;
