import { Image, Text, View } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from './CustomButton'
import { router } from "expo-router";

const EmptyState = ({title, subtitle}) => {
  return (
    <View className="justify-center items-center px-4">
      <Image source={images.empty} className="w-[270px] h-[215px]" resizeMode='contain' />
      <Text className="text-2xl text-white" style={{fontFamily:"Poppins-SemiBold"}}>{title}</Text>
      <Text className="text-sm text-gray-100 mt-2" style={{fontFamily:"Poppins-Medium"}}>{subtitle}</Text>

      <CustomButton
      title="Add Video"
      handlePress={() => router.push('/create')}
      containerStyles="w-full my-5" />
    </View>
  )
}

export default EmptyState
