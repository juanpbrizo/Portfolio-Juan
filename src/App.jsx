import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        })
      }
    })
  })
  return (
    <div className=' bg-black text-slate-50'>
      <div className='max-w-screen-xl mx-auto relative min-w-[1280px]'>
        {/* Menu principal */}
        <div className='bg-zinc-900 h-20 flex items-center fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl z-50'>
          <div className='p-1 flex items-center space-x-3 ml-20'>
            <figure className='inline-block'>
              <img src='../Logo.png' alt='Logo' width={80} />
            </figure>
            <span className='inline-block text-green-700 text-2xl font-bold'>Porfolio</span>
          </div>
          <div className='flex space-x-5 ml-auto mr-20 items-center'>
            <div>
              <a href='#About' className='text-white hover:text-green-700'>
                About
              </a>
            </div>
            <div>
              <a href='#Projects' className='text-white hover:text-green-700'>
                Projects
              </a>
            </div>
            <div>
              <a
                href='../CV.pdf'
                target='_blank'
                className=' bg-green-700 hover:bg-green-500 text-white py-2 px-4 rounded-md'
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
