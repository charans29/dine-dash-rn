import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';

const RestaurantScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      shortDescription,
      dishes
    }
  } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [])
  
  return (
    <ScrollView>
      <View className="relative">
        <Image source={{uri: urlFor(imgUrl).url()}} className="w-full h-56 p-4 bg-gray-300" />
        <TouchableOpacity  onPress={navigation.goBack} className="absolute mt-14 ml-5 p-2 bg-gray-50 rounded-full">
          <ArrowLeftIcon size={ 22 } color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{ title }</Text>
          <View className="flex-row items-center space-x-2.5 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} fill={30}/>
              <Text className=" text-gray-500 ">{rating} • {genre}</Text>
            </View>
            <View className="flex-row items-center space-x-0.5">
              <MapPinIcon color="grey" opacity={.4} size={22} fill={50}/>
              <Text className="text-gray-500">Nearby • { address }</Text>
            </View>
          </View>
           <Text className="text-gray-500 mt-1 pb-4">{ shortDescription }</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-200">
          <QuestionMarkCircleIcon color="gray"/>
          <Text className="pl-2 flex-1 font-bold">Any food allergies we should be aware of?</Text>
          <ChevronRightIcon color={"#00CCBB"}/>
        </TouchableOpacity>
      </View>
      <Text className="px-4 pt-4 font-bold text-xl pb-4">Menu</Text>
      <View>
        {
          dishes.map(dish => (
            <DishRow 
              key={dish._id}
              id={dish._id}
              dish={dish.name}
              description={dish.short_description}
              price={dish.price}
              imgUrl={dish.image}
            />
          ))
        }
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen