import { randomTheme } from '../Constants/ConstantsJS';

const BackgroundMain = () => {
   
   const backgroundStyle = {
      background: `linear-gradient(45deg, ${randomTheme.main}, ${randomTheme.second})`
   };

   return (
      <div id="BackgroundMain" className="BackgroundMain" style={backgroundStyle}></div>
   );
};

export default BackgroundMain;