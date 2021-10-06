import { Engine, EngineOptions, Scene, SceneOptions } from '@babylonjs/core';
import React, { useEffect, useRef } from 'react';

interface Props extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  antialias?: boolean;
  engineOptions?: EngineOptions;
  adaptToDeviceRatio?: boolean;
  sceneOptions?: SceneOptions;
  onRender(scene: Scene): void;
  onSceneReady(scene: Scene): void;
}

const Babylon: React.FC<Props> = ({
  antialias,
  engineOptions,
  adaptToDeviceRatio,
  sceneOptions,
  onRender,
  onSceneReady,
  ...rest
}) => {
  const reactCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (reactCanvas.current) {
      const engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio);
      const scene = new Scene(engine, sceneOptions);
      if (scene.isReady()) {
        onSceneReady?.(scene);
      } else {
        scene.onReadyObservable.addOnce((scene) => onSceneReady?.(scene));
      }

      engine.runRenderLoop(() => {
        onRender?.(scene);
        scene.render();
      });

      const resize = () => {
        scene.getEngine().resize();
      };

      window?.addEventListener('resize', resize);

      return () => {
        scene.getEngine().dispose();
        window?.removeEventListener('resize', resize);
      };
    }
  }, [reactCanvas]);

  return <canvas ref={reactCanvas} {...rest} />;
};

export default Babylon;
