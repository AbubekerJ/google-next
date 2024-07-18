import HomeHeader from '@/app/components/HomeHeader'
import Image from 'next/image';
import HomeSearchInput from './components/HomeSearchInput';
import Link from 'next/link';
export default function Home() {
  return (
     <main>
      <HomeHeader/>
       <div className='flex flex-col gap-10  items-center mt-5'>
        <Link className='cursor-pointer'  href='/' >
        <Image
        src={'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'}
          width={300} 
         height={100}
         alt='Google-logo'
        />
        </Link>

        <HomeSearchInput/>

       </div>
     </main>
  );
}
