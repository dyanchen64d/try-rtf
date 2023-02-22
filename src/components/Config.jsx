import { useTextureContext } from '../textureContext';

const Config = () => {
  const { changeTexture, texture } = useTextureContext();

  // console.log('texture', texture);

  return (
    <div className="config">
      <button className={texture.name === 'cliff' ? '__active' : ''}>
        <div onClick={() => changeTexture('cliff')}>CLIFF</div>
      </button>
      <button className={texture.name === 'wood' ? '__active' : ''}>
        <div onClick={() => changeTexture('wood')}>WOOD</div>
      </button>
    </div>
  );
};

export default Config;
