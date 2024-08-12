import { FunctionComponent, useMemo, useState, type CSSProperties } from "react";
import "./GroupComponent.css";

export type GroupComponentType = {
  className?: string;
  group?: string;
  liquidityLocks?: string;
  hoverImage?:string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};


const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  group,
  propWidth,
  liquidityLocks,
  hoverImage,
}) => {

  const [currentImage, setCurrentImage] = useState(group);
  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`rectangle-container ${className}`}
    onMouseEnter={() => setCurrentImage(hoverImage)} 
    onMouseLeave={() => setCurrentImage(group)}    
    >
      
      <img
        className="group-icon"
        loading="lazy"
        alt=""
        src={currentImage}
        style={groupIconStyle}
      />
      <div className="liquidity-locks">{liquidityLocks}</div>
      <div className="hover-image" data-hover-image={hoverImage}></div>
    </div>
  );
};

export default GroupComponent;
