import './App.css';

import { Canvas } from '@react-three/fiber';
import Demo from './components/Demo';

import { TextureProvider } from './textureContext';
import Config from './components/Config';

const App = () => {
  return (
    <TextureProvider>
      <div className="App">
        <Canvas>
          <color attach="background" args={['#213547']} />
          <fog attach="fog" args={['#213547', 10, 20]} />
          <Demo />
        </Canvas>
        <Config />
      </div>
    </TextureProvider>
  );
};

export default App;
