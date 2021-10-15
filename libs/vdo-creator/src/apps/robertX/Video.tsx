import { Composition } from 'remotion'
import { Scene } from './Scene'

// Welcome to the Remotion Three Starter Kit!
// Two compositions have been created, showing how to use
// the `ThreeCanvas` component and the `useVideoTexture` hook.

// You can play around with the example or delete everything inside the canvas.

// The device frame automatically adjusts to the video aspect ratio.
// Change the variable below to try out tablet mode:

export const RemotionVideo: React.FC = () => {
  return <Composition id="Scene" component={Scene} durationInFrames={300} fps={30} width={2000} height={2000} />
}
