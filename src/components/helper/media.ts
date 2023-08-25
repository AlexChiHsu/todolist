import { useEffect, useState } from "react";
import { imageURL } from "../../api/tmdb/commonURL";

export function imagePath(path: string) {
  return imageURL + path;
}

export function useDevice(width: number) {
  const [device, setDevice] = useState("pc");

  useEffect(() => {
    if (width < 720) {
      setDevice("mobile");
    } else if (width < 1024 && width > 720) {
      setDevice("tablet");
    } else {
      setDevice("pc");
    }
  }, [width]);

  return device;
}
