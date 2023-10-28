import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppWorks from './components/works';
import AppTeams from './components/teams';
import AppTestimonials from './components/testimonials';
import AppPricing from './components/pricin';
import AppBlog from './components/blog';

function App() {
  return (
    <div className="App">
       <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero/>
        <AppAbout/>
        <AppWorks/>
        <AppTeams/>
        <AppTestimonials/>
        <AppPricing/>
        <AppBlog/>

      </main>
    </div>
  );
}

export default App;
