import { useTextureContext } from '../textureContext';

const Config = () => {
  const { changeTexture } = useTextureContext();

  return (
    <div className="config">
      <button>
        <div onClick={() => changeTexture('cliff')}>CLIFF</div>
      </button>
      <button>
        <div onClick={() => changeTexture('wood')}>WOOD</div>
      </button>
    </div>
  );
};

export default Config;
