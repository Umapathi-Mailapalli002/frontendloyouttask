import { useEffect, useState } from "react";

const useBodyScrollLock = () => {
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const bodyStyle = document.body.style;

    if (isLocked) {
      bodyStyle.overflowY = "hidden";
    } else {
      bodyStyle.overflowY = "auto";
    }

    // Cleanup to ensure scroll is unlocked when component unmounts or state changes
    return () => {
      bodyStyle.overflowY = "auto";
    };
  }, [isLocked]);

  const toggleScrollLock = () => setIsLocked(prevState => !prevState);

  return [isLocked, toggleScrollLock];
};

export default useBodyScrollLock;
