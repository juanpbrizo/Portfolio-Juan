import { basics } from '../../cv.json'
import { skills } from '../../cv.json'
import Icons from '../icons'

const { profiles, email, phone, name, image, summary, label } = basics
const { Mail, Phone } = Icons

const About = () => {
  return (
    <div className='flex pt-20 bg-zinc-900 ' id='About'>
      <div className=' pt-10 w-2/4'>
        {/* Titulo */}
        <div className='pl-10 py-5'>
          <h1 className=' text-8xl font-bold mb-2'>
            Juan
            <br />
            Becerra
          </h1>
          <h2 className='text-4xl'>{label}</h2>
        </div>
        {/* Descripción */}
        <div className=' relative pl-10 py-1 z-40'>
          <p className=' text-sm text-justify'>{summary}</p>
        </div>
        {/* Redes y Contacto */}
        <div className=' relative pl-10 flex items-center pt-10 z-40'>
          <span className='text-lg font-serif'>Visita:</span>
          <div className=' flex ml-5'>
            {profiles.map(({ network, url }) => {
              const Icon = Icons[network]
              return (
                <a
                  href={url}
                  title={`${network}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={network}
                  className=' m-2 bg-green-700 h-12 w-12 rounded-full flex justify-center items-center hover:bg-green-500'
                >
                  <Icon style={{ width: '20px', height: '20px' }} />
                </a>
              )
            })}
          </div>
          <div className=' ml-10 flex items-center'>
            <samp className='text-lg font-serif'>Contácteme:</samp>
            <div className=' flex ml-5'>
              {email && (
                <a
                  href={`mailto:${email}`}
                  title={`Enviar un correo electrónico a ${name} al correo ${email}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='  m-2 bg-green-700 h-12 w-12 rounded-full flex justify-center items-center hover:bg-green-500'
                >
                  <Mail style={{ width: '20px', height: '20px' }} />
                </a>
              )}
              {phone && (
                <a
                  href={`https://wa.me/${phone}`}
                  title={`WhatsApp al ${phone}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='  m-2 bg-green-700 h-12 w-12 rounded-full flex justify-center items-center hover:bg-green-500'
                >
                  <Phone style={{ width: '20px', height: '20px' }} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=' w-2/4 pt-16 text-center flex justify-center items-center'>
        <div id='Container' className=' relative' style={{ width: '530px', height: '500px' }}>
          <div
            id='Icon'
            className=' absolute -left-1/2 w-full h-full flex justify-center items-center z-10'
          >
            {skills.map((skill, index) => {
              const Icon = Icons[skill.name]

              const iconStyle =
                skill.name === 'Docker'
                  ? { width: '35px', height: '35px', fill: '#15803D' }
                  : { width: '35px', height: '35px', stroke: '#15803D' }
              return (
                <div
                  title={skill.name}
                  id='imgBx'
                  key={skill.name}
                  className='absolute w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-600'
                  style={{
                    transition: '0.1s',
                    transform: `rotate(${(270 / skills.length) * index - 25.7}deg)`,
                    transformOrigin: '290px',
                  }}
                >
                  <div
                    id='img'
                    style={{
                      transform: `rotate(${-((270 / skills.length) * index - 25.7)}deg)`,
                    }}
                  >
                    <Icon style={iconStyle} />
                  </div>
                </div>
              )
            })}
          </div>
          <figure className=' inline-block'>
            <img src={image} alt='Mi Foto' width={500} />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default About
