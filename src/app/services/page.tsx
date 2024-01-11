import React from 'react'
import Image from 'next/image'
import mobile from '../__images/Mobile_App.png'
import web from '../__images/Web_Design.png'
import graph from '../__images/Graphic_Design.png'
import digi from '../__images/Digital_Marketing.png'
import nata from '../__images/Nathan_Services.png'

function page() {
  return (
    <div className='flex flex-col items-center w-full justify-center pb-10 font-urbanist'>

        <div className='w-full pt-20'>
            <p className='flex justify-center items-center font-bold text-5xl pb-4 pt-20'>
                Services We Provide
            </p>
            <p className='flex justify-center items-center font-semibold text-[#000000CC] text-lg pb-8'>
                Enim egestas at massa senectus justo ut. Hac est.
            </p>
        </div>

        <div className='flex flex-wrap flex-row justify-between w-10/12 gap-52 pt-14 pb-14 px-14'>
            {/* Mobile App Design */}
            <div className='bg-[#FFFFFF] flex flex-col justify-start container w-4/12 h-full shadow-md rounded-3xl px-5 py-5'>
                <div className='bg-[#F0EEFF] rounded-full w-[100px] h-[100px] flex justify-center items-center p-5'>
                    <Image src={mobile} alt='mobile' width={40} height={40}/>
                </div>

                <div className='w-full pt-5'>
                    <p className='font-bold text-3xl'>
                        Mobile App Design
                    </p>
                    <p className='text-[#00000080] font-semibold text-sm'>
                        Viverra ut potenti aliquam feugiat dui imperdiet laoreet <br>
                        </br>tempus sed. Elit cursus est lorem in est id nec. Quis diam <br>
                        </br>posuere at nisl eget turpis sagittis nunc. Aliquet et <br>
                        </br>ultrices purus, id. Sagittis erat nunc in parturient.
                    </p>
                </div>

                <div className='flex justify-start w-full pt-16 gap-2'>
                    <button className='bg-[#5188ff] text-white py-2 px-2 rounded-3xl font-bold'>Connect now</button>
                    <button className='bg-[#5188ff] text-white py-2 px-2 rounded-3xl font-bold'>Our Works</button>
                </div>
            </div>

            {/* Website Design */}
            <div className='bg-[#FFFFFF] flex flex-col justify-start container w-4/12 h-full shadow-md rounded-3xl px-5 py-5'>
                <div className='bg-[#F0EEFF] rounded-full w-[100px] h-[100px] flex justify-center items-center p-5'>
                    <Image src={web} alt='web' width={40} height={40}/>
                </div>

                <div className='w-full pt-5'>
                    <p className='font-bold text-3xl'>
                        Website Design
                    </p>
                    <p className='text-[#00000080] font-semibold text-sm'>
                        Viverra ut potenti aliquam feugiat dui imperdiet laoreet <br>
                        </br>tempus sed. Elit cursus est lorem in est id nec. Quis diam <br>
                        </br>posuere at nisl eget turpis sagittis nunc. Aliquet et <br>
                        </br>ultrices purus, id. Sagittis erat nunc in parturient.
                    </p>
                </div>

                <div className='flex justify-start w-full pt-16 gap-2'>
                    <button className='bg-[#5188ff] text-white py-2 px-2 rounded-3xl font-bold'>Connect now</button>
                    <button className='bg-[#5188ff] text-white py-2 px-2 rounded-3xl font-bold'>Our Works</button>
                </div>
            </div>

            {/* Graphic Designing */}
            <div className='bg-[#FFFFFF] flex flex-col justify-start container w-4/12 h-full shadow-md rounded-3xl px-5 py-5'>
                <div className='bg-[#F0EEFF] rounded-full w-[100px] h-[100px] flex justify-center items-center p-5'>
                    <Image src={graph} alt='graph' width={40} height={40}/>
                </div>

                <div className='w-full pt-5'>
                    <p className='font-bold text-3xl'>
                        Graphic Designing
                    </p>
                    <p className='text-[#00000080] font-semibold text-sm'>
                        Viverra ut potenti aliquam feugiat dui imperdiet laoreet <br>
                        </br>tempus sed. Elit cursus est lorem in est id nec. Quis diam <br>
                        </br>posuere at nisl eget turpis sagittis nunc. Aliquet et <br>
                        </br>ultrices purus, id. Sagittis erat nunc in parturient.
                    </p>
                </div>

                <div className='flex justify-start w-full pt-16 gap-2'>
                    <button className='bg-[#5188ff] text-white py-2 px-2 rounded-3xl font-bold'>Connect now</button>
                    <button className='bg-[#5188ff] text-white py-2 px-2 rounded-3xl font-bold'>Our Works</button>
                </div>
            </div>

            {/* Digital Marketing */}
            <div className='bg-[#FFFFFF] flex flex-col justify-start container w-4/12 h-full shadow-md rounded-3xl px-5 py-5'>
                <div className='bg-[#F0EEFF] rounded-full w-[100px] h-[100px] flex justify-center items-center p-5'>
                    <Image src={digi} alt='digital' width={40} height={40}/>
                </div>

                <div className='w-full pt-5'>
                    <p className='font-bold text-3xl'>
                        Digital Marketing
                    </p>
                    <p className='text-[#00000080] font-semibold text-sm'>
                        Viverra ut potenti aliquam feugiat dui imperdiet laoreet <br>
                        </br>tempus sed. Elit cursus est lorem in est id nec. Quis diam <br>
                        </br>posuere at nisl eget turpis sagittis nunc. Aliquet et <br>
                        </br>ultrices purus, id. Sagittis erat nunc in parturient.
                    </p>
                </div>

                <div className='flex justify-start w-full pt-16 gap-2'>
                    <button className='bg-[#5188ff] text-white py-2 px-2 rounded-3xl font-bold'>Connect now</button>
                    <button className='bg-[#5188ff] text-white py-2 px-2 rounded-3xl font-bold'>Our Works</button>
                </div>
            </div>
        </div>

        {/* Global Team */}
        <div className='bg-[#C4C4C426] w-full flex flex-row px-10'>
            <div className='flex flex-col justify-evenly pt-24 pb-24'>
                <p className='flex font-semibold text-5xl'>
                    Join a global team of change-makers.
                </p>
                <p className='items-center font-semibold text-[#00000080] pt-6 pb-6'>
                    Viverra ut potenti aliquam feugiat dui imperdiet laoreet tempus sed. Elit cursus est <br>
                    </br>lorem in est id nec. Quis diam posuere at nisl eget turpis sagittis nunc. Aliquet et <br>
                    </br>ultrices purus, id. Sagittis erat nunc in parturient.
                </p>
                <div className=''>
                    <button className='bg-[#5188ff] text-white py-2 px-2 rounded-3xl font-bold'>View Job Openings</button>
                </div>
            </div>

            <div className='w-9/12'>
                <Image src={nata} alt='nata' objectFit='fill' layout='cover'/>
            </div>
        </div>
        

    </div>
  )
}

export default page