import Layout from '../../components/Layout/Layout';
import CategoriesDetails from '../../components/Layout/CategoriesDetails';
import SideBar from '../../components/Layout/SideBar';
import { wrapper } from '../../redux/store';
import { getCategories } from '../../redux/actions/productAction';

const Categories = () => {
  return (
    <Layout title="Hot Taste Categories" content="View Our tasty Categories">
      <div className="main__container">
        <SideBar />
        <CategoriesDetails />
      </div>
    </Layout>
  );
};

export default Categories;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getCategories(req));
    }
);
