import { toSvg } from "jdenticon";
import Image from "next/image";

const Avatar = ({ className = "", value = "random-string", size = 40 }) => {
  const svgString = toSvg(value, size);

  return (
    <Image
      className={className + " inline"}
      width={size}
      height={size}
      loader={({ src }) => src}
      alt="avatar"
      src={`data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`}
    />
  );
};

export default Avatar;
