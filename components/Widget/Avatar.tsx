import { toSvg } from "jdenticon";
import Image from "next/image";

const Avatar = (props) => {
  const svgString = toSvg(props.value || "random-string", 32);

  return (
    <Image
      className="inline"
      layout="fill"
      alt="avatar"
      src={`data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`}
    />
  );
};

export default Avatar;
