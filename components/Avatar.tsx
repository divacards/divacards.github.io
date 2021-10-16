import { toSvg } from "jdenticon";

const Avatar = (props) => {
  const svgString = toSvg(props.value || "random-string", 32);

  return (
    <img
      className="inline"
      src={`data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`}
    />
  );
};

export default Avatar;
