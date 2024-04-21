import { randomColor1, randomColor2 } from '../Constants/ConstantsJS';

const BackgroundMain = () => {
   
   const backgroundStyle = {
      background: `linear-gradient(45deg, ${randomColor1}, ${randomColor2})`
   };

   return (
      <div id="BackgroundMain" className="BackgroundMain" style={backgroundStyle}></div>
   )

}

export default BackgroundMain;
