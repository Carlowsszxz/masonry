import Iridescence from './components/Iridescence';
import MasonryContainer from './components/MasonryContainer';
import backgroundMusic from './assets/images/background.mp3';
import './App.css';

function App() {
  return (
    <div className="relative w-screen min-h-screen">
      <div className="fixed inset-0 z-0">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{
          width: '100%',
          maxWidth: 720,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(16px, 12vw, 160px)',
          paddingRight: 'clamp(16px, 12vw, 160px)',
          paddingTop: 48,
          paddingBottom: 48
        }}
      >
        <div className="bg-black/50 rounded-lg shadow-lg p-6 mb-8">
          <h1
            className="text-white font-extrabold mb-6"
            style={{
              fontFamily: 'Great Vibes',
              fontSize: 'clamp(2.25rem, 6vw, 3.5rem)',
              lineHeight: 1.02
            }}
          >
            Happy Monthsary!
          </h1>
          <p
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
              fontFamily: 'Roboto, sans-serif',
              lineHeight: 1.6
            }}
          >
            Happy monthsary baby! sorry if this is my only 
            gift for you, im sorry for the nights
            that we're always fighting, and i thank you for 
            being patient with me. i am doing my best
            not to be swallowed by anger and stuffs, and i 
            appreciate you for being by my side through
            it all. i love you so much, and i hope we can 
            celebrate more monthsaries to come! Happy 30th
            monthsary my baby!
          </p>
          <p
            className="text-white"
            style={{
              fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
              fontFamily: 'Roboto, sans-serif',
              fontStyle: 'italic'
            }}
          >
            - Carlos
          </p>
        </div>
        <div style={{ width: '100%' }}>
          <MasonryContainer />
        </div>
      </div>
      <audio autoPlay loop src={backgroundMusic} style={{ display: 'none' }} />
    </div>
  );
}

export default App;
