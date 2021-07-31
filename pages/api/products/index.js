import nc from 'next-connect';
import connectDb from '../../../config/dbconnect';
import { getAllProducts } from '../../../controllers/productController';
import { errorMiddleWare } from '../../../middlewares/error';

const router = nc({ onError: errorMiddleWare });
connectDb();

//Routes
router.get(getAllProducts);

export default router;
