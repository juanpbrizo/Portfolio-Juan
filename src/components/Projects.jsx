import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { projects } from '../../cv.json'
import Icons from '../icons'

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 500 })
  }, [])
  return (
    <div className=' p-10 bg-zinc-800 '>
      <h2 className=' text-2xl font-bold inline-block'>Proyectos:</h2>
      <div className=' flex flex-wrap'>
        {projects.map((project, index) => {
          // Extracción de datos de proyecto
          const { name, description, url, github, pictures, skills = '' } = project

          //Animaciones de Cards
          const align = index % 2 === 0 ? 'left-0' : 'right-0'
          const align2 = index % 2 === 0 ? 'right-0' : 'left-0 text-right pr-4'
          const align3 = index % 2 === 0 ? '' : 'justify-end'
          const animation = index % 2 === 0 ? 'fade-down-right' : 'fade-down-left'
          const animation2 = index % 2 === 0 ? 'fade-left' : 'fade-right'

          // creación de card de proyecto
          return (
            <div
              className=' relative m-10'
              style={{ width: '1200px', height: '290px' }}
              key={name + index}
              id='Projects'
            >
              <div
                className={` border-4 border-green-700 h-72 absolute ${align}`}
                data-aos={animation}
                style={{ width: '460px' }}
              >
                <Carousel
                  className=' w-full ml-4 -mt-4'
                  animationHandler='fade'
                  showArrows={false}
                  showStatus={false}
                  showIndicators={false}
                  showThumbs={false}
                  useKeyboardArrows={false}
                  emulateTouch={false}
                  autoPlay
                  infiniteLoop
                  interval={5000}
                >
                  {pictures.map((imagen) => {
                    return (
                      <div key={imagen}>
                        <img src={imagen} alt='' style={{ height: '280px' }} />
                      </div>
                    )
                  })}
                </Carousel>
              </div>
              <div
                className={` h-72 pl-10 absolute ${align2}`}
                style={{ width: '640px' }}
                data-aos={animation2}
              >
                <h3 className=' text-3xl font-bold mb-10'>{name}</h3>
                <p className=' text-sm'>{description}</p>
                <div className={` flex items-center p-2  ${align3}`}>
                  <p className=' mr-2'> Ver en: </p>
                  {url && (
                    <a href={url} target='_blank' rel='noreferrer' className=' p-2 '>
                      <Icons.WorldMap style={{ with: '25px', height: '25px' }} />
                    </a>
                  )}
                  {github && (
                    <a href={github} target='_blank' rel='noreferrer' className=' p-2 '>
                      <Icons.GitHub style={{ with: '25px', height: '25px' }} />
                    </a>
                  )}
                </div>
                <div className={`flex items-center ${align3}`}>
                  {skills.map((skill) => {
                    const Icon = Icons[skill.name]
                    return (
                      <div
                        title={`${skill.name}`}
                        key={skill.name}
                        className=' m-2 h-12 w-12 flex justify-center items-center'
                      >
                        <Icon style={{ width: '25px', height: '25px' }} />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
