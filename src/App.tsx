import Banner from './components/Banner'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { Main } from './components/main/Main'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    // Agregar Schema.org JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Calzures Artesanales',
      'description': 'Tienda de calzados artesanales personalizados',
      'url': window.location.origin,
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${window.location.origin}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </>
  )
}

export default App
