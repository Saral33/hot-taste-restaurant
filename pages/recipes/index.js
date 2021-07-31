import Layout from '../../components/Layout/Layout';
import Products from '../../components/Layout/Products';
import SideBar from '../../components/Layout/SideBar';
import { getAllProducts } from '../../redux/actions/productAction';
import { wrapper } from '../../redux/store';

const Recipes = () => {
  return (
    <Layout title="Our Recipes" content="View our tasty recipes in cheap price">
      <div className="main__container">
        <SideBar />
        <Products />
      </div>
    </Layout>
  );
};

export default Recipes;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      await store.dispatch(getAllProducts(req, query.page, query.sort));
    }
);
