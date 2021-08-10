import Image from 'next/image';

const Loader = () => {
  return (
    <div className="loader">
      <Image src="/images/logo.png" alt="loading" height={90} width={90} />
    </div>
  );
};

export default Loader;
