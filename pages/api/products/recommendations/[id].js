import nc from 'next-connect';
import connectDb from '../../../../config/dbconnect';
import { getRecommendations } from '../../../../controllers/productController';
import { errorMiddleWare } from '../../../../middlewares/error';
connectDb();
const router = nc({ onError: errorMiddleWare });

//Routes
router.get(getRecommendations);

export default router;
