import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selecRestaurant } from '../features/restaurantSlice'
import { selectbasketItems } from '../features/basketSlice'
import { SafeAreaView } from 'react-native-safe-area-context'

const BasketScreen = () => {
    const navigate = useNavigation();
    const restaurant = useSelector(selecRestaurant);
    const items = useSelector(selectbasketItems);
    const dispatch = useDispatch();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        },{})
        setGroupedItemsInBasket(groupedItems); 
    },[items])
    console.log(groupedItemsInBasket);
  return (
    <SafeAreaView>
        <View className="absolute bg-white p-5 w-full border-b border-gray-200">
            <View className="flex-row justify-between items-center">
                <View/>
                <View>
                    <Text className="font-bold text-lg text-center">
                        Basket
                    </Text>
                    <Text className="text-gray-400 text-center">
                        { restaurant.title }
                    </Text>
                </View>
                <TouchableOpacity onPress={navigate.goBack}>
                    <XCircleIcon color={"#00B4D8"} size={40}/>
                </TouchableOpacity>
            </View>
        </View>
        <View className="mt-14  bg-white p-3 w-full flex-row justify-between items-center">
            <View className="flex-row items-center space-x-2">
                <Image source={require('../assets/boy.png')} className="h-7 w-7 bg-gray-300 p-5 rounded-full"/>
                <Text> Deliver in 30 - 45 mins</Text>
            </View>
            <TouchableOpacity onPress={navigate.goBack}>
                <Text className="text-cyan-400 font-bold mr-3">Change</Text>
            </TouchableOpacity>
        </View>
        {/* <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
            <Image source={require('../assets/boy.png')} className="h-7 w-7 bg-gray-300 p-5 rounded-full"/>
            <Text className="flex-1"> Deliver in 30 - 45 mins</Text>
            <TouchableOpacity>
            <Text className="text-cyan-400 font-bold mr-3">
            Change                
            </Text>
            </TouchableOpacity>
        </View> */}
        <ScrollView>
            {
                Object.entries(groupedItemsInBasket).map(([key, items]) => (
                    <View key={key}>
                        <Text>{items.length} x {items[0]?.dish}</Text>
                    </View>
                ))
            }
        </ScrollView>
    </SafeAreaView>
  )
}

export default BasketScreen