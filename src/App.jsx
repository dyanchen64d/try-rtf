import './App.css';

import { Canvas } from '@react-three/fiber';
import Demo from './components/Demo';

function App() {
  return (
    <div className="App">
      <Canvas>
        <color attach="background" args={['#213547']} />
        <fog attach="fog" args={['#213547', 10, 20]} />
        <Demo />
      </Canvas>
    </div>
  );
}

export default App;
