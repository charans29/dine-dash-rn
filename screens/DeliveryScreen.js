import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useSelector } from 'react-redux'
import { selecRestaurant } from '../features/restaurantSlice'
import * as Animation from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import MapView, { MarkerAnimated } from 'react-native-maps'

const DeliveryScreen = () => {
    const nav = useNavigation();
    const restaraunt = useSelector(selecRestaurant);

  return (
    <View className="bg-cyan-400 flex-1">
        <SafeAreaView className="z-50">
            <View className="flex-row p-5 items-center">
                <TouchableOpacity onPress={() => nav.navigate("Home")} className="flex-1">
                    <XMarkIcon color={"white"} size={30} />
                </TouchableOpacity>
                <Text className="font-light text-white text-lg">Order Help?</Text>
            </View>
            <View className="bg-white mx-5 rounded-md z-50 shadow-md">
                <View className="flex-row">
                    <View className="flex-1 p-3">
                        <Text className="text-gray-400 text-lg">Estimated Arrival</Text>
                        <Text className="font-bold text-3xl">35 - 45 Minutes</Text>
                        <Progress.Bar className="mt-2" indeterminate={true} color='cyan'/>
                    </View>
                    <Animation.Image
                    source={require("../assets/bike.gif")}
                    iterationCount={1} 
                    animation="slideInUp"
                    className="w-20 h-20 mx-3 z-50 bg-white"/>
                </View>
                <Text className="text-gray-500 px-3 pb-5 pt-1">Your food is being prepared at { restaraunt.title }</Text>
            </View>
        </SafeAreaView> 
        <MapView
            initialRegion={{
                latitude:restaraunt.lat,
                longitude:restaraunt.lon,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }}
            mapType='mutedStandard'
            className="flex-1 -mt-20 z-0"
        >
            <MarkerAnimated
                coordinate={{
                    latitude:restaraunt.lat,
                    longitude:restaraunt.lon
                }}
                title={restaraunt.title}
                description={restaraunt.shortDescription}
                identifier="origin"
                pinColor={"cyan"}
            >

            </MarkerAnimated>
        </MapView>
        <SafeAreaView className="bg-white h-28">
            <View className="-mt-14 px-3.5 flex-row items-center space-x-5 py-2">
                <Image source={require('../assets/boy.png')} className="h-12 w-12 bg-gray-300 rounded-full"/>
                <View className="flex-1">
                    <Text className="text-lg">Delivery Hero</Text>
                    <Text className="text-gray-500">Your Rider</Text>
                </View>
                <Text className="text-cyan-500 font-bold text-lg mr-5">Call</Text>
            </View>
        </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen