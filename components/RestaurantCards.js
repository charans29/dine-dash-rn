import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native';

const RestaurantCards = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    shortDescription,
    dishes
}) => {
  
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => {
          navigation.navigate('Restaurant', {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            shortDescription,
            dishes 
          })
      }
    } className="mr-3 bg-white shadow">
      <Image 
        source={{ 
            uri: urlFor(imgUrl).url() 
            }} 
        className="h-36 w-64 rounded"
      />
      <View className="px-3 pb-4">
        <Text className="text-lg font-bold pt-2">{ title }</Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.5} size={22} />
            <Text className=" text-green-500 text-xs">{ rating }
                <Text className="text-xs text-gray-500"> •{genre}</Text>
            </Text>
        </View>
        <View className="flex-row items-center space-x-1">
            <MapPinIcon color="grey" opacity={.4} size={22}/>
            <Text className="text-xs text-gray-500">Nearby • { address }</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCards