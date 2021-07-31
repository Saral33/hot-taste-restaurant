import Layout from '../../components/Layout/Layout';
import ProductDetails from '../../components/Layout/ProductDetails';
import { getProductDetails } from '../../redux/actions/productAction';
import { wrapper } from '../../redux/store';

const ProductDetailsPage = () => {
  return (
    <Layout>
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
