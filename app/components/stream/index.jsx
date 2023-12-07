import Image from "next/image";
import useUserMedia from "../../useUserMedia";
import frame from "../../assets/frame.png";
import "./index.css";

export const Stream = () => {
  const { stream, error } = useUserMedia({ audio: false, video: true });

  return (
    <div className="stream-box" id="stream">
      <Image className="frame" id="frame-top" src={frame} alt="*" />
      {!error && (
        <video
          className="video"
          muted
          autoPlay
          ref={(video) => {
            if (video) {
              video.srcObject = stream;
            }
          }}
        />
      )}
    </div>
  );
};
