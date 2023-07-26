import { ImageBackground } from "react-native";
import bgImage from "../assets/images/photoBg.png";

const BgImage = ({ children }) => {
  return (
    <ImageBackground
      source={bgImage}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      {children}
    </ImageBackground>
  );
};
export default BgImage;
