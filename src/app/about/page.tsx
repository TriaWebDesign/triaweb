import React from 'react'
import Image from 'next/image'
import andro from '../__images/andro.png'
import blank from '../__images/blank.png'
import kent from '../__images/kent.png'
import geneleen from '../__images/geneleen.png'
import nathan from '../__images/nathan.png'
import peter from '../__images/peter.png'
import kint from '../__images/kint.png'
import add1 from '../__images/add1.png'
import add2 from '../__images/add2.png'
import add3 from '../__images/add3.png'
import Link from 'next/link'

function page() {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-[#ffffff] font-urbanist'>
      
      {/* About */}
      <div className='w-full pt-20'>
        <p className='flex justify-center items-center font-bold text-5xl pb-4 pt-20'>
          About Us
        </p>
        <p className='flex justify-center items-center font-semibold text-[#000000CC] text-lg pb-8'>
          Pulvinar auctor nisl, volutpat turpis enim id.
        </p>
      </div>
      
      {/* top com */}
      <div className='flex justify-evenly pt-24 pb-24 bg-[#C4C4C426] w-full overflow-hidden'>
        <p className='flex justify-center items-center font-semibold text-4xl w-6/12 border-r-4 animate-[slidein_700ms]'>
          You guessed it. We're <br></br> changing the game. 
        </p>
        <p className='flex justify-center items-center text-[#00000080] w-6/12 font-semibold animate-[slideout_700ms]'>Semper bibendum nisl, fermentum mi convallis. Sed vitae tincidunt <br>
        </br>nunc, aliquam orci. Porttitor faucibus morbi sed senectus justo, <br>
        </br>adipiscing augue. Est, in in pretium at libero morbi. Euismod viverra <br>
        </br>arcu nisi eu sit. <br>
        </br>Praesent diam non imperdiet potenti tristique et. Amet nec.</p>
      </div>

      {/* lead */}
      <div className='w-full'>
        <p className='flex justify-center items-center font-semibold text-4xl pt-10'>
          Our Leadership Team
        </p>
        <p className='flex justify-center items-center text-[#00000080] font-semibold text-center'>
          Iterdum ac tincidunt molestie facilisis. Nulla at erat odio bibendum diam quam. Scelerisque mus vel <br>
          </br>egestas justo, purus consequat nibh eget. Non risus feugiat porta integer.
        </p>
      </div>

      {/* img wrap */}
      <div className='flex flex-row flex-wrap justify-center items-center gap-y-10 gap-x-72 w-8/12 pt-10'>
        <div className='text-center'>
          <Image src={nathan} alt='nathan' height={180} width={180} objectFit='contain'/>
          <p className='font-semibold'>Nathaniel Lucero</p>
          <p className='font-semibold text-[#00000080]'>Small PP</p>
        </div>
        <div className='text-center'>
          <Image src={andro} alt='andro' height={180} width={180} objectFit='contain'/>
          <p className='font-semibold'>Andromel Ramirez</p>
          <p className='font-semibold text-[#00000080]'>Medium PP</p>
        </div>
        <div className='text-center'>
          <Image src={kent} alt='' height={180} width={180} objectFit='contain'/>
          <p className='font-semibold'>Kent Louis Arizo</p>
          <p className='font-semibold text-[#00000080]'>Big PP</p>
        </div>
        <div className='text-center'>
          <Image src={blank} alt='lloyd' height={180} width={180} objectFit='contain'/>
          <p className='font-semibold'>Laloyd Semblante</p>
          <p className='font-semibold text-[#00000080]'>Shemale</p>
        </div>
        <div className='text-center'>
          <Image src={geneleen} alt='geneleen' height={180} width={180} objectFit='contain'/>
          <p className='font-semibold'>Geneleen Bernardo</p>
          <p className='font-semibold text-[#00000080]'>Mader</p>
        </div>
        <div className='text-center'>
          <Image src={peter} alt='peter' height={180} width={180} objectFit='contain'/>
          <p className='font-semibold'>Peter Panlaan</p>
          <p className='font-semibold text-[#00000080]'>Little Spoon</p>
        </div>
        <div className='text-center pl-5'>
          <Image src={blank} alt='dexter' height={180} width={180} objectFit='contain'/>
          <p className='font-semibold'>Dexter Pala utog</p>
          <p className='font-semibold text-[#00000080]'>Happy BirthDay To You~~</p>
        </div>
      </div>

      {/* test job ops */}
      <div className='flex justify-evenly pt-24 pb-24  '>
        <div className='bg-[#C4C4C426] px-12 py-12'>
          <p className='flex justify-center items-center font-semibold text-5xl'>
            Join a global team of <br>
            </br>change-makers.
          </p>
          <p className='items-center font-semibold text-[#00000080] pt-6 pb-6'>
            Viverra ut potenti aliquam feugiat dui imperdiet laoreet <br>
            </br>tempus sed. Elit cursus est lorem in est id nec. Quis diam <br>
            </br>posuere at nisl eget turpis sagittis nunc. Aliquet et <br>
            </br>ultrices purus, id. Sagittis erat nunc in parturient.
          </p>
          <button className='bg-[#5188ff] text-white py-2 px-2 rounded-3xl font-bold'>View Job Openings</button>
        </div>
        <div className=''>
          <Image src={kint} alt='kint' height={700} width={700}/>
        </div>
      </div>

      {/* blogs */}
      <div className=''>
        <p className='flex justify-center items-center font-semibold text-5xl'>From The Blog</p>
      </div>

      {/* img-blogs */}
      <div className='flex justify-center items-center gap-10 py-5 px-5 pb-20'>
        <div className=''>
          <Image src={add1} alt='add1' height={440} width={440} className='rounded-tl-lg rounded-tr-md'/>
          <div className='bg-[#F1F1F3] h-44 w-102 py-3 px-3 rounded-bl-xl rounded-br-xl'>
            <Link href='https://www.youtube.com/watch?v=2yJgwwDcgV8' className='font-semibold text-2xl'>Porttitor pharetra, consectetur <br></br>viverra est nisl a, vulputate id. </Link>
              <div className='flex justify-between pt-16'>
                <p className=''>13 Sept, 2021</p>
                <p className=''>Technology</p>
              </div>
            </div>
        </div>

        <div className=''>
          <Image src={add2} alt='add2' height={440} width={440} className='rounded-tl-lg rounded-tr-md'/>
          <div className='bg-[#F1F1F3] h-44 w-102 py-3 px-3 rounded-bl-xl rounded-br-xl'>
            <Link href='https://www.youtube.com/watch?v=mBw3qzf4s18' className='font-semibold text-2xl'>Diam amet non placerat risus <br></br>magna non volutpat. </Link>
            <div className='flex justify-between pt-16'>
              <p className=''>13 Sept, 2021</p>
              <p className=''>Technology</p>
            </div>
          </div>
        </div>

        <div className=''>
          <Image src={add3} alt='add3' height={440} width={440} className='rounded-tl-lg rounded-tr-md'/>
          <div className='bg-[#F1F1F3] h-44 w-102 py-3 px-3 rounded-bl-xl rounded-br-xl'>
            <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className='font-semibold text-2xl'>Volutpat volutpat turpis risus <br></br>nunc in nisl habitasse leo. <br></br>Duis.</Link>
            <div className='flex justify-between pt-8'>
              <p className=''>13 Sept, 2021</p>
              <p className=''>Technology</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page