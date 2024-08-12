import { FunctionComponent, useMemo, useState, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
  group?: string;
  liquidityLocks?: string;
  hoverImage?: string;
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
    <div
      className={`${styles.rectangleContainer} ${className}`}
      onMouseEnter={() => setCurrentImage(hoverImage)}
      onMouseLeave={() => setCurrentImage(group)}
    >
      <img
        className={styles.groupIcon}
        loading="lazy"
        alt={liquidityLocks}
        src={currentImage}
        style={groupIconStyle}
      />
      <div className={styles.liquidityLocks}>{liquidityLocks}</div>
    </div>
  );
};

export default GroupComponent;
