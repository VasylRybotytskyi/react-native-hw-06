// import React from "react";
// import {
//   ImageBackground,
//   Text,
//   View,
//   StyleSheet,
//   Dimensions,
//   TouchableWithoutFeedback,
//   Keyboard,
//   KeyboardAvoidingView,
// } from "react-native";
// import { Button } from "react-native-elements";
// import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// const ProfileScreen = () => {
//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.container}>
//         <ImageBackground
//           source={require("../assets/images/photoBg.png")}
//           style={styles.imageBackground}
//         >
//           <View style={styles.contentContainer}>
//             <View style={styles.image}>
//               <AntDesign style={styles.add} name="pluscircleo" size={25} />
//             </View>
//             <Text style={styles.title}>Name</Text>
//             <Ionicons
//               style={styles.logout}
//               name="exit-outline"
//               size={24}
//               color="rgba(189, 189, 189, 1)"
//             />
//             <View>
//               <Text>View</Text>
//             </View>
//           </View>
//           {/* <View style={styles.iconsContainer}>
//             <View style={styles.tool}>
//               <Feather name="grid" size={24} color="black" />
//             </View>
//             <View style={styles.buttonAdd}>
//               <Feather name="user" size={24} color="white" />
//             </View>
//             <View style={styles.user}>
//               <Ionicons name="ios-add-outline" size={24} color="black" />
//             </View>
//           </View> */}
//         </ImageBackground>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };
// export default ProfileScreen;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   imageBackground: {
//     flex: 1,
//     width: windowWidth,
//     height: windowHeight,
//   },
//   contentContainer: {
//     display: "flex",
//     gap: 16,
//     backgroundColor: "rgba(255, 255, 255, 1)",
//     paddingTop: 92,
//     paddingBottom: 144,
//     paddingLeft: 16,
//     paddingRight: 16,
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     width: windowWidth,
//     alignItems: "center",
//   },
//   title: {
//     fontWeight: "500",
//     fontSize: 30,
//     lineHeight: 35,
//     textAlign: "center",
//     color: "#212121",
//   },
//   image: {
//     position: "absolute",
//     width: 120,
//     height: 120,
//     backgroundColor: "#F6F6F6",
//     borderRadius: 16,
//     top: -60,
//   },
//   add: {
//     position: "absolute",
//     bottom: 20,
//     right: -12,
//     color: "rgba(255, 108, 0, 1)",
//   },
//   logout: {
//     position: "absolute",
//     right: 16,
//     top: 15,
//   },
//   // iconsContainer: {
//   //   flexDirection: "row",
//   //   justifyContent: "space-between",
//   //   paddingHorizontal: 93,
//   //   paddingBottom: 42,
//   //   paddingTop: 9,
//   //   borderTopWidth: 1,
//   //   backgroundColor: "#FFFFFF",
//   //   position: "absolute",
//   //   bottom: 0,
//   //   left: 0,
//   //   width: windowWidth,
//   // },
//   // buttonAdd: {
//   //   color: "#FFFFFF",
//   //   alignItems: "center",
//   //   justifyContent: "center",
//   //   backgroundColor: "#FF6C00",
//   //   borderRadius: 20,
//   //   width: 70,
//   //   height: 40,
//   // },
//   // tool: {
//   //   height: 40,
//   //   alignItems: "center",
//   //   justifyContent: "center",
//   // },
//   // user: {
//   //   height: 40,
//   //   alignItems: "center",
//   //   justifyContent: "center",
// });
import { ImageBackground } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { StyleSheet, View, Image, Text } from "react-native";

import photoBG from "../assets/images/photoBg.png";
import { TouchableOpacity } from "react-native";
import SvgAddButton from "../../assets/svg/SvgAddButton";
import { Dimensions } from "react-native";
import { useState } from "react";

const ProfileScreen = () => {
  const [avatar, setAvatar] = useState(null);

  const onLoadAvatar = async () => {
    const avatarImg = await DocumentPicker.getDocumentAsync({
      type: "image/*",
    });

    if (avatarImg.type === "cancel") return setAvatar(null);

    setAvatar(avatarImg);
  };

  return (
    <ImageBackground source={photoBG} style={styles.bgContainer}>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatar} source={avatar} />
            <TouchableOpacity
              style={avatar ? styles.btnAddAvatarLoad : styles.btnAddAvatar}
              onPress={onLoadAvatar}
            >
              <SvgAddButton
                style={
                  avatar ? styles.btnAddAvatarSvgLoad : styles.btnAddAvatarSvg
                }
              />
            </TouchableOpacity>
          </View>
          <Text style={{ ...styles.title, marginTop: 92 }}>Name</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingHorizontal: 16,
    // paddingVertical: 32,
    // backgroundColor: '#fff',
  },

  bgContainer: {
    // flexDirection: 'row',
    // alignItems: 'flex-start',

    resizeMode: "cover",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  contentWrapper: {
    paddingHorizontal: 16,

    width: "100%",
    height: "100%",
    marginTop: 247,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    // fontFamily: 'Roboto',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",

    marginTop: 32,
    marginBottom: 32,
    color: "#212121",
  },
  avatarWrapper: {
    position: "absolute",
    top: -60,
    alignSelf: "center",

    width: 120,
    height: 120,

    backgroundColor: "#f6f6f6",
    borderRadius: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  btnAddAvatar: {
    position: "absolute",
    bottom: 14,
    right: -12.5,

    alignItems: "center",
    alignContent: "center",

    width: 25,
    height: 25,

    color: "#ff6c00",
    backgroundColor: "#ffffff",
    borderRadius: 50,
  },
  btnAddAvatarLoad: {
    position: "absolute",
    bottom: 14,
    right: -12.5,

    alignItems: "center",
    alignContent: "center",

    width: 25,
    height: 25,

    color: "#ff6c00",
    backgroundColor: "#ffffff",
    borderRadius: 50,

    transform: [{ rotate: "45deg" }],
  },
  btnAddAvatarSvg: {
    fill: "#ff6c00",
    stroke: "#ff6c00",
    backgroundColor: "#ffffff",
  },
  btnAddAvatarSvgLoad: {
    fill: "#bdbdbd",
    stroke: "#e8e8e8",
    backgroundColor: "#ffffff",
  },
});
