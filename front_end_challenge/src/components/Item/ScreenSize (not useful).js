// simple function to get width and height of the screen
export default function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

    /*
    let items_shown = 4;
    if (getWindowDimensions().width < 480) items_shown = 1;
    if (getWindowDimensions().width < 720) items_shown = 2;
    if (getWindowDimensions().width < 1080) items_shown = 3;
    */