import Layout from '../components/Layout/Layout';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/dist/client/image';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { deleteFromCart } from '../redux/actions/cartAction';
import { motion, AnimatePresence } from 'framer-motion';

function Favourites() {
  const SSR = typeof window === 'undefined'; //Beacuse CSS breaks due to SSR
  const router = useRouter();
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteFromCart(id));
  };
  return (
    <Layout title="My Favourites ❤️">
      <div className="section__contents">
        {!SSR && cartItems.length == 0 ? (
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <Image
              src="/images/favourites.png"
              alt="love"
              height={200}
              width={200}
            />
            <h1>No Favourites Yet! </h1>
            <p className="section__para">
              Like a recipe? Add them to your favourites and see here.
            </p>
            <button
              onClick={() => router.push('/recipes')}
              style={{ backgroundColor: '#01897B' }}
              className="btn-primary"
            >
              Let&apos;s Go and Explore
            </button>
          </div>
        ) : (
          !SSR && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '50px',
                marginBottom: '50px',
              }}
            >
              <div style={{ flex: '0 0 60%' }}>
                <div>
                  <h1>My Favourites</h1>
                  <AnimatePresence>
                    {cartItems.map((el) => (
                      <motion.div
                        key={el.id}
                        initial={{ x: '-80vw', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{
                          x: '-80vw',
                          opacity: 0,
                          transition: { duration: 0.5 },
                        }}
                        style={{
                          padding: '10px 0',
                          marginTop: '30px',
                          marginLeft: '30px',
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          borderBottom: '1px solid',
                        }}
                      >
                        <Image
                          alt="recipe"
                          src={el.image}
                          height={80}
                          width={110}
                        />
                        <p
                          style={{ flex: '0 0 50%' }}
                          className="section__para"
                        >
                          {el.title}
                        </p>
                        <p className="section__para">${el.price}</p>
                        <p
                          onClick={() => deleteHandler(el.id)}
                          style={{ cursor: 'pointer' }}
                          className="section__para"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              <div className="favourites__right">Favourites</div>
            </div>
          )
        )}
      </div>
    </Layout>
  );
}

export default Favourites;
