import { NextPage } from 'next';

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  props?: any;
};

const PrimaryButton: NextPage<PrimaryButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className='btn bg-primary-purple-60 border border-primary-purple-60 text-white hover:bg-primary-milk-60 hover:border-primary-purple-30 hover:text-primary-purple-70 active:bg-secondary-purple-60 active:border-secondary-purple-50 active:text-primary-purple-60 disabled:bg-[#E9D7FE] disabled:border-[#E9D7FE] disabled:text-secondary-purple-30  px-10 py-2.5 capitalize rounded-lg text-sm transition-all duration-200 ease-linear'
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
