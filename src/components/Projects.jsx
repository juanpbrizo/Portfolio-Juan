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
      <div className=' flex flex-wrap '>
        {projects.map((project, index) => {
          // Extracción de datos de proyecto
          const { name, description, url, github, pictures, skills = '' } = project

          //Animaciones de Cards
          const align = index % 2 === 0 ? '' : 'justify-end'
          const animation = index % 2 === 0 ? 'fade-down-right' : 'fade-down-left'
          const animation2 = index % 2 === 0 ? 'fade-up md:fade-left' : 'fade-up md:fade-right'

          // creación de card de proyecto
          return (
            <div
              className={`flex my-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
              key={name + index}
              id='Projects'
            >
              <div
                className={` border-4 border-green-700 w-5/12 pb-4 hidden md:block  `}
                data-aos={animation}
              >
                <Carousel
                  className={` w-full ${index % 2 === 0 ? 'ml-4 -mt-4' : '-m-4 -mt-4'}`}
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
                className={` flex-col h-full md:h-72 w-full md:w-7/12 border-4 border-green-700 md:border-none rounded-xl p-5 md:pt-0 bg-zinc-900 md:bg-transparent ${index % 2 === 0 ? 'pl-6' : 'pr-6 text-right'}`}
                data-aos={animation2}
              >
                <h3 className=' text-3xl font-bold mb-6 inline-block'>{name}</h3>
                <p className=' text-sm mb-6'>{description}</p>
                <div className={` flex items-center mb-6 ${align}`}>
                  <p className=''> Ver en: </p>
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
                <div className={`flex items-center ${align}`}>
                  {skills.map((skill) => {
                    const Icon = Icons[skill.name]
                    return (
                      <div
                        title={`${skill.name}`}
                        key={skill.name}
                        className=' flex items-center mr-3 my-2'
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
