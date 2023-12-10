import { NextPage } from 'next';

type CustomCommunityProps = {
  children: React.ReactNode;
  props?: any;
};

const CustomCommunity: NextPage<CustomCommunityProps> = ({ children, ...props }) => {
  const style = {
    padding: '16px 32px',
    borderRadius: '4px',
    fontSize: '20px',
    lineHeight: '30px',
    fontWeight: 500,
    color: '#817799',
  };
  return (
    <>
      <h4 style={style} className='bg-secondary-purple-10' {...props}>
        {children}
      </h4>
    </>
  );
};

export default CustomCommunity;
