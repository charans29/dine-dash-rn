import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Basket, selectbasketItems } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketBar = () => {
    const items = useSelector(selectbasketItems);
    const navigation = useNavigation();
    const basketTotal =  useSelector(Basket);

    if (items.length === 0 ) return null;

  return (
    <TouchableOpacity className="absolute bottom-12 px-4 z-50"
        onPress={() => { 
            navigation.navigate("Basket",{})
        }}
    >
        <View className="bg-cyan-400 w-full flex-row justify-between p-4 rounded-lg items-center">
            <Text className="bg-cyan-500 py-1 px-2 text-white font-extrabold text-lg">{ items.length }</Text>
            <Text className="text-white font-extrabold text-lg">View Basket</Text>
            <Text className="text-white font-extrabold text-lg">${ basketTotal }</Text>
        </View>
    </TouchableOpacity>
  )
}

export default BasketBar