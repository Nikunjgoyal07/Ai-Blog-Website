// pages/404.js
import Image from 'next/image';

const Custom404 = () => {
    return (
      <div className="text-center">
        <br />
        <h1 className='text-4xl'><b>404 - Page Not Found</b></h1>
        <br />
        {/* Add your custom content here */}
        <div className='flex justify-center items-center'>
        <Image src="/american-psycho-christian-bale.gif" alt="" width={500} height={500} />
        </div>
        <br />
        <div className="text-center text-2xl">
          Made By - <br/> <strong>Badmos Chore of Amaitye</strong>
        </div>
      </div>
    );
  };
  
  export default Custom404;
  