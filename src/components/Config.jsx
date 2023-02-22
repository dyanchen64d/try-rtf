import { useTextureContext } from '../textureContext';

const Config = () => {
  const { changeTexture } = useTextureContext();

  return (
    <div className="config">
      <button>
        <div onClick={() => changeTexture('cliff')}>TEXTURE 1</div>
      </button>
      <button>
        <div onClick={() => changeTexture('wood')}>TEXTURE 2</div>
      </button>
    </div>
  );
};

export default Config;
