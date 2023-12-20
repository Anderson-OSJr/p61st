/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';

const Topnav = () => {
  return (
    <div className='flex flex-row h-28 justify-between items-center 
                    shadow-lg rounded-md mx-1 mt-1
                    border-2 border-indigo-100'>
        <div className='w-16 h-16 m-4 flex 
                        justify-center'>
           <Image 
            src="/sixone.png"
            width={50}
            height={50}
            alt="P61st Icon"
            className='object-scale-down'/>
        </div>

        {/* <div className='[&>svg]:w-7'>
        
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7">
            <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
        </div> */}

        <div className=''>
            <nav>
                <ul className='text-indigo-500 flex flex-col sm:flex-row sm:gap-10 mr-4 p-2 text-base'>
                    <li className='hover:text-indigo-700'>
                        <Link href='/'>
                           <p className='drop-shadow-md'>Home</p>
                        </Link>
                    </li>

                    <li className='hover:text-blue-700'>
                        <Link href="/fte_adapt">
                            <p className='drop-shadow-md'>FTE Adapt</p>
                        </Link>
                    </li>
                    
                    <li className='hover:text-blue-700'>
                        <Link href="/links">
                            <p className='drop-shadow-md'>Utilities</p>
                        </Link>
                    </li>
                   
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Topnav