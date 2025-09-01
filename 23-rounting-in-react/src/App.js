import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { EMICalculator } from './components/EMICalculator';
function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <header className='bg-dark d-flex justify-content-around text-white p-2'>
          <div className='fs-5 fw-bold'>Shopper.</div>
          <div className='fs-4'>
            <Link to="/" className='link-light text-decoration-none '>Home</Link>
            <Link to="men" className='link-light text-decoration-none mx-3 '>Men's fashion</Link>
            <Link to="women" className='link-light text-decoration-none mx-3'>women's fashion</Link>
            <Link to="kid" className='link-light text-decoration-none mx-3'>Kid's Fashion</Link>
            <Link to="emi" className='link-light text-decoration-none '>EMI</Link>
          </div>
          <div>
            <span className='bi bi-person-fill'></span>
            <span className='bi bi-heart-fill mx-3'></span>
            <span className='bi bi-cart'></span>
          </div>
        </header>
        <section>
          <Routes>
            <Route path='/' element={<div><h1>Welcome to Online Shopping App</h1><p>Men's|Women's|Kid's Fashion</p></div>}/>
            <Route path='men' element={<div><h3>Men's Fashion</h3><img src='https://tse2.mm.bing.net/th/id/OIP.8RbTx_4tsHAgJ33DroHxmAHaHY?pid=Api&P=0&h=180' width={"200"} height={"200"}/></div>}/>
            <Route path='women' element={<div><h3>Women's Fashion</h3><img src='https://tse1.mm.bing.net/th/id/OIP.Y0hhlk3j0oJ4PCNWLQ_6UwHaE8?pid=Api&P=0&h=180' width={"200"} height={"200"}/></div>}/>
            <Route path='Kid' element={<div><h3>Kid's Fashion</h3><img src='https://tse2.mm.bing.net/th/id/OIP.UX4lfFeet2GEbAUunlqW_QHaFL?pid=Api&P=0&h=180' width={"200"} height={"200"}/></div>}/>
            <Route path='emi' element={<EMICalculator />}/>
            <Route path='*' element={<div><h3 className='text-danger text-center fs-1 '>Looking for something?</h3><code>Sorry Unable to find your request</code></div>}/>
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
