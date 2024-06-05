import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline'

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
  const [count, setCount] = useState(0);

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
                    <TouchableOpacity onPress={() => {
                        if ( count > 0 ) {
                            setCount(prevCount => prevCount - 1)
                        }
                    }}>
                        <MinusCircleIcon size={30} color={"#00CCBB"}/>
                    </TouchableOpacity>
                    <Text className="text-cyan-400 opacity-5000">{ count }</Text>
                    <TouchableOpacity onPress={() => {
                        setCount(prevCount => prevCount + 1)
                    }}>
                        <PlusCircleIcon size={30} color={"#00CCBB"}/>
                    </TouchableOpacity>
                </View>
            )
        }
    </View>
  );
}

export default DishRow