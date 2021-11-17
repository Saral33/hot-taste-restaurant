const LoadingButton = ({ text = 'Loading...' }) => {
  return (
    <button
      disabled
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        padding: '5px 0',
        backgroundColor: 'gray',
      }}
    >
      <div className="loading__spinner"></div>
      {text}....
    </button>
  );
};

export default LoadingButton;
