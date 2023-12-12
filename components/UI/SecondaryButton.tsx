import { NextPage } from 'next';

type SecondaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  props?: any;
};

const SecondaryButton: NextPage<SecondaryButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className='btn bg-[#F9F5FF] border border-[#E9D7FE] text-primary-purple-70 hover:bg-primary-milk-10 hover:border-[#E9D7FE] hover:text-[#53389E] active:bg-[#F9F5FF] active:border-[#E9D7FE] active:text-[#6941C6] disabled:bg-[#FCFAFF] disabled:border-[#FCFAFF] disabled:text-[#D6BBFB]  px-10 py-2.5 capitalize rounded-lg text-sm transition-all duration-200 ease-linear'
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
