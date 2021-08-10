import Layout from '../../components/Layout/Layout';
import ProductDetails from '../../components/Layout/ProductDetails';
import { getProductDetails } from '../../redux/actions/productAction';
import { wrapper } from '../../redux/store';
import { useSelector } from 'react-redux';
import Recommendations from '../../components/Layout/Recommendations';

const ProductDetailsPage = () => {
  const { product } = useSelector((state) => state.singleProduct);
  return (
    <Layout title={product.title} content={product.description}>
      <ProductDetails />
    </Layout>
  );
};

export default ProductDetailsPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      await store.dispatch(getProductDetails(req, query.id));
    }
);
