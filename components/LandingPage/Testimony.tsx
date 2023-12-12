import { NextPage } from 'next';

type TestimonyProps = {
  testimony: string;
  name: string;
  role: string;
};

const Testimony: NextPage<TestimonyProps> = ({ testimony, name, role }) => {
  return (
    <>
      <div className='p-8 flex flex-col gap-8 items-start h-full justify-between rounded border-[0.5px] border-secondary/10 bg-[#F9F9FA] w-[420px]'>
        <p className='text-secondary text-[19.2px] leading-7 self-stretch flex rtl:text-left'>{testimony}</p>
        <div className='w-full'>
          <p className='text-primary-purple-60 font-semibold rtl:text-left w-full'>{name}</p>
          <p className='text-[#7C7A7F] text-[13.3px] leading-[18.5px] rtl:text-left w-full'>{role}</p>
        </div>
      </div>
    </>
  );
};

export default Testimony;
