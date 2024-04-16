import { View, Text } from "react-native";

const InfoBox = ({ title, subtitle, containerStyles, titleStyles }) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-white text-center ${titleStyles}`} style={{fontFamily:"Poppins-SemiBold"}}>
        {title}
      </Text>
      <Text className="text-sm text-gray-100 text-center" style={{fontFamily:"Poppins-Regular"}}>
        {subtitle}
      </Text>
    </View>
  );
};

export default InfoBox;