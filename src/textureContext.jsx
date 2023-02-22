import { createContext, useContext, useState } from 'react';

const textures = {
  cliff: {
    name: 'cliff',
    map: '/texture_rock/CliffJagged004_COL_VAR1_1K.jpg',
    // displacementMap: '/texture_rock/CliffJagged004_DISP_VAR1_1K.jpg',
    normalMap: '/texture_rock/CliffJagged004_NRM_1K.jpg',
    roughnessMap: '/texture_rock/CliffJagged004_GLOSS_1K.jpg',
    aoMap: '/texture_rock/CliffJagged004_AO_1K.jpg',
  },
  wood: {
    name: 'wood',
    map: '/texture_wood/WoodFlooringMahoganyAfricanSanded001_COL_1K.jpg',
    // displacementMap: '/texture_wood/WoodFlooringMahoganyAfricanSanded001_DISP_1K.jpg',
    normalMap: '/texture_wood/WoodFlooringMahoganyAfricanSanded001_NRM_1K.jpg',
    roughnessMap:
      '/texture_wood/WoodFlooringMahoganyAfricanSanded001_GLOSS_1K.jpg',
    aoMap: '/texture_wood/WoodFlooringMahoganyAfricanSanded001_AO_1K.jpg',
  },
};

const TextureContext = createContext();

export const TextureProvider = ({ children }) => {
  const [texture, setTexture] = useState(textures.cliff);

  const changeTexture = (type) => {
    if (type === 'cliff') {
      setTexture(textures.cliff);
    }
    if (type === 'wood') {
      setTexture(textures.wood);
    }
  };

  return (
    <TextureContext.Provider value={{ texture, changeTexture }}>
      {children}
    </TextureContext.Provider>
  );
};

export const useTextureContext = () => {
  const context = useContext(TextureContext);
  return context;
};
