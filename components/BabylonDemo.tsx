import { FreeCamera, HemisphericLight, Mesh, MeshBuilder, Scene, Vector3 } from '@babylonjs/core';
import React from 'react';

import Babylon from './Babylon';

interface Props {
  id?: string;
  style?: React.CSSProperties;
}

const BabylonDemo: React.FC<Props> = ({ id, style }) => {
  const box = React.useRef<Mesh>();

  const onSceneReady = React.useCallback((scene: Scene) => {
    // This creates and positions a free camera (non-mesh)
    const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());

    const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'box' shape.
    box.current = MeshBuilder.CreateBox('box', { size: 2 }, scene);

    // Move the box upward 1/2 its height
    box.current.position.y = 1;

    // Our built-in 'ground' shape.
    MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene);
  }, []);

  /**
   * Will run on every frame render.  We are spinning the box on y-axis.
   */
  const onRender = React.useCallback((scene: Scene) => {
    if (box.current !== undefined) {
      const deltaTimeInMillis = scene.getEngine().getDeltaTime();

      const rpm = 10;
      box.current.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  }, []);

  return (
    <Babylon
      // antialias
      onSceneReady={onSceneReady}
      onRender={onRender}
      id={id}
      style={style}
    />
  );
};

export default BabylonDemo;
