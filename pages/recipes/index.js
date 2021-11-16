import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import Products from '../../components/Layout/Products';
import SideBar from '../../components/Layout/SideBar';
import { getAllCarts } from '../../redux/actions/cartAction';
import { getAllProducts } from '../../redux/actions/productAction';
import { GET_CART } from '../../redux/constants/cartConstants';
import { wrapper } from '../../redux/store';

const Recipes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCarts());
  }, [dispatch]);
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
      await store.dispatch(
        getAllProducts(
          req,
          query.page,
          query.sort,
          query.category && query.category,
          query.search
        )
      );
    }
);
