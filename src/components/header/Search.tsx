
import LogoSearch from '@/assets/icon-search.svg';
import Image from 'next/image';


export default function Search(){
    return(
        <>
        <div className='flex items-center gap-4'>
            <Image src={LogoSearch} alt='Search'  />
            <input type="text" placeholder='Buscar' className=' bg-transparent outline-none pr-5 text-white placeholder:text-white'   />
        </div>
        
        </>
    );
}