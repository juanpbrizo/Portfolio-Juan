import { basics } from '../../cv.json'
import Icons from '../icons'
const { profiles } = basics
function Footer() {
  return (
    <div className=' bg-zinc-900 flex h-20'>
      <div className='flex w-1/3 items-center space-x-3 pl-5 md:pl-20'>
        <img src='../Logo.png' alt='Logo' className=' w-14 md:w-16' />
      </div>
      <div className=' flex w-1/3 justify-center items-center text-sm'>
        <p>2024 Freelancer</p>
      </div>
      <div className=' flex w-1/3 pr-5 md:pr-20 justify-end items-center'>
        {profiles.map(({ network, url }) => {
          const Icon = Icons[network]
          return (
            <a
              href={url}
              title={`${network}`}
              target='_blank'
              rel='noopener noreferrer'
              key={network}
              className=' m-2 bg-green-700 min-h-10 min-w-10 rounded-full flex justify-center items-center hover:bg-green-500'
            >
              <Icon style={{ width: '16px', height: '16px' }} />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
