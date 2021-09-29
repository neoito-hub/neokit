import React, { useState ,useEffect} from 'react'

import warningIcon from  "../../assets/images/warning.svg"
import errorIcon from  "../../assets/images/error.svg"
import "../../assets/styles/css/tailwind.css"

import "../../assets/styles/css/Home.module.css"

const Banners=({children ,color, appearance , icon})=> {

    const [bannerColor, setBannerColor] = useState('');
    const [bannerBGColor, setBannerBGColor] = useState('');
const [bannerIcon, setBannerIcon] = useState('');
useEffect(() => {
    getProps();
  }, []);
  const getProps = () => {

    if(appearance === 'warning' || !appearance){
     color ? setBannerColor(color): setBannerColor('#253858');
     icon ? setBannerIcon(icon): setBannerIcon(warningIcon);
     setBannerBGColor(' bg-yellow-400 ');
    }
    
    else if(appearance === 'error'){
      color ? setBannerColor(color): setBannerColor('#FFF');
      icon ? setBannerIcon(icon): setBannerIcon(errorIcon);
      setBannerBGColor(' bg-red-500 ');
     }
     else if(appearance === 'announcement'){
      color ? setBannerColor(color): setBannerColor('#FFF');
      setBannerBGColor(' bg-gray-500 ');
     }
  };
    return (
        <div>
           <div className={"flex items-center justify-center  hover:overflow-auto h-12 px-10 rounded" + bannerBGColor }>
              { appearance != 'announcement' && ( <span className="text-base">
                    <img src={bannerIcon} alt={appearance} className=' max-w-max'></img>
                </span>
                )} 
                <div className={`p-1 truncate  flex-initial text-sm font-medium tracking-wide  ${appearance === 'announcement' ? 'hover:whitespace-normal hover:mt-10':''}`} style={{ color: bannerColor }}>
               {children}
                </div>
             </div>

{/* {(() => {
        switch (appearance) {
          case "warning":   
            return (
                <div className="flex items-center justify-center bg-yellow-400 h-12 px-10">
                <span className="text-base">
                    <img src={bannerIcon} alt={appearance} className=' max-w-max'></img>
                </span>
                <div className="p-1 truncate flex-initial text-sm font-medium tracking-wide "  style={{ color: bannerColor }}>
               {children}
                </div>
             </div>
            )
        }
      })()} */}
     </div>
    )
}

export default Banners;



