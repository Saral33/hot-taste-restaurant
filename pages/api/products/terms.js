import nc from 'next-connect';
import connectDb from '../../../config/dbconnect';
import { searchautoCompleteTerms } from '../../../controllers/productController';
import { errorMiddleWare } from '../../../middlewares/error';

const router = nc({ onError: errorMiddleWare });
connectDb();

//Routes
router.get(searchautoCompleteTerms);

export default router;
