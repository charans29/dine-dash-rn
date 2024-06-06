import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, putItem, removeFromBasket } from '../features/basketSlice'

const DishRow = (
    {
        id,
        dish,
        description,
        price,
        imgUrl
    }
) => {
    
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => putItem(state, id))

  const addItemToBaket = () => {
    dispatch(addToBasket({ 
        id,
        dish,
        description,
        price,
        imgUrl
    }))
  }
  
  const removeItemFromBaket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ 
        id,
    }))
  }

  return (
    <View className="bg-white border border-gray-50">
        <TouchableOpacity className="p-4"
            onPress={() => setIsPressed(!isPressed)}
            activeOpacity={1}>
            <View className="flex-row">
                <View className="flex-1">
                    <Text className="text-lg">{dish}</Text>
                    <Text className="text-gray-500">{description}</Text>
                </View>
                <Image source={{uri: urlFor(imgUrl).url()}}  className="w-20 h-20"/>
            </View>
            <View>
                <Text className="text-gray-500 mt-3">${price}</Text>
            </View>
        </TouchableOpacity>
        {
            isPressed && (
                <View className="px-3 pb-4 flex-row items-center space-x-2">
                    <TouchableOpacity onPress={ removeItemFromBaket } disabled={!items.length}>
                        <MinusCircleIcon size={30} color={items.length > 0 ? "#00CCBB" : "gray"}/>
                    </TouchableOpacity>
                    {
                        items.length > 0 ?
                        <Text className="text-cyan-400 opacity-5000">{ items.length }</Text> :
                        <Text className="text-gray-500">{ items.length }</Text>
                    }
                    <TouchableOpacity onPress={ addItemToBaket }>
                        <PlusCircleIcon size={30} color={items.length > 0 ? "#00CCBB" : "gray"}/>
                    </TouchableOpacity>
                </View>
            )
        }
    </View>
  );
}

export default DishRow