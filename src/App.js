import Logo from './img/logo.svg'
import Woman from './img/beach-work.jpg'
function App() {
  return (
    <div className="App">
      <div className='grid lg:grid-cols-2 2xl:grid-cols-5'>

        <div className='px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2'>
          <div className='xl:max-w-xl'>
            <img src={Logo} alt='Workcation' className='h-10' />
            <img src={Woman} alt='Woman workcationing on the beach'
              className="mt-6 rounded-lg shadow-md sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" />
            <h1 className='mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:tex'>You can work from anywhere.
              <br className='hidden lg:inline' />
              <span className=' text-indigo-500'>Take Advantage of it</span></h1>
            <p className='mt-2 text-gray-600 sm:mt-4 sm:text-xl'>Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
              nice weather even when you're not on vacation.</p>
            <div className='mt-4 sm:mt-6'>
              <a href='/' className=' bg-indigo-500 px-4 shadow-lg uppercase font-semibold tracking-wider hover:bg-indigo-400 hover:-translate-y-0.5 transform transition-shadow 
              focus:outline-none focus:ring-indigo-600 active:bg-indigo-600 text-sm sm:text-base
               text-white py-3 inline-block rounded-lg '>Book your escape</a>
            </div>
          </div>
        </div>
        <div className='hidden relative lg:block 2xl:col-span-3'>
          <img src={Woman} alt='Woman workcationing on the beach'
            className="absolute inset-0 w-full h-full object-cover object-center xl:object-cover xl:object-center" />
        </div>
      </div>
    </div>
  );
}

export default App;
