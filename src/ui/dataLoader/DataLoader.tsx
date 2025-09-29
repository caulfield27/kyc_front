const sizeObj = {
  s: '24px',
  m: '32px',
  l: '64px',
};

export const DataLoader = ({ size }: { size?: 's' | 'm' | 'l' }) => {
  const spinnerStyle: React.CSSProperties = {
    width: size ? sizeObj[size] : '24px',
    height: size ? sizeObj[size] : '24px',
    border: '3px solid #f87102',
    borderTop: '3px solid transparent',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return (
    <>
      <div className="w-full flex py-5 justify-center items-center">
        <div style={spinnerStyle} />
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
};
