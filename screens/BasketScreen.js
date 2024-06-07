import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selecRestaurant } from '../features/restaurantSlice'
import { Basket, removeFromBasket, selectbasketItems } from '../features/basketSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { urlFor } from '../sanity'

const BasketScreen = () => {
    const navigate = useNavigation();
    const restaurant = useSelector(selecRestaurant);
    const items = useSelector(selectbasketItems);
    const dispatch = useDispatch();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const basketTotal =  useSelector(Basket);

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        },{})
        setGroupedItemsInBasket(groupedItems); 
    },[items])

  return (
    <SafeAreaView className="flex-1">
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
        <View className="my-14  bg-white p-3 w-full flex-row justify-between items-center border border-gray-200">
            <View className="flex-row items-center space-x-2">
                <Image source={require('../assets/boy.png')} className="h-7 w-7 bg-gray-300 p-5 rounded-full"/>
                <Text> Deliver in 30 - 45 mins</Text>
            </View>
            <TouchableOpacity onPress={navigate.goBack}>
                <Text className="text-cyan-400 font-medium mr-3">Change</Text>
            </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
            {
                Object.entries(groupedItemsInBasket).map(([key, items]) => (
                    <View key={key} className="bg-white flex-row items-center space-x-3 px-5 py-2">
                        <Text className="text-cyan-400">{items.length} x </Text>
                        <Image source={{uri: urlFor(items[0].imgUrl).url()}} className="h-12 w-12 rounded-full" />
                        <Text className="flex-1">{items[0]?.dish}</Text>
                        <Text className="text-gray-600">${items[0].price}</Text>
                        <TouchableOpacity onPress={() => dispatch(removeFromBasket({ id:key }))}>
                            <Text className="text-cyan-400 font-medium">Remove</Text>
                        </TouchableOpacity>
                    </View>
                ))
            }
        </ScrollView>
        <View className="absolute bottom-0 w-full bg-white px-5 py-4 border-t border-gray-200">
            <View className="flex-row justify-between px-1">
                <Text className="text text-gray-400 pt-3">Subtotal</Text>
                <Text className="text text-gray-400 pt-3">${ basketTotal }</Text>
            </View>
            <View className="flex-row justify-between px-1">
                <Text className="text text-gray-400 pt-4">Delivery Fee</Text>
                <Text className="text text-gray-400 pt-3">$5.55</Text>
            </View>
            <View className="flex-row justify-between px-1">
                <Text className="text text-gray-900 pt-4">Order Total</Text>
                {
                    items.length > 0 ?
                    <Text className="text text-gray-900 pt-3 font-bold">${5.55 + basketTotal}</Text> :
                    <Text className="text text-gray-400 pt-3 font-bold">${basketTotal}</Text>
                }
            </View>
            <TouchableOpacity className={`${items.length === 0 ? 'bg-cyan-400 opacity-50' : 'bg-cyan-600'} w-full flex-center p-4 rounded-lg items-center mb-10 mt-5`}
                              onPress={() => {
                                if (items.length > 0) {
                                    navigate.navigate("Ordering",{})
                                } 
                            }}
                            disabled={items.length === 0} 
            >
                <Text className="text-white font-extrabold text-lg">Place Order</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default BasketScreen