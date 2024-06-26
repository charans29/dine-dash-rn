import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState }from 'react'
import {useNavigation} from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../components/categories'
import FeaturedRow from '../components/FeaturedRow'
import client from '../sanity'

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategory, setFeaturedCategory] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        })
    }, [])

    useEffect(() => {
      client.fetch(
        `*[_type == 'featured'] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->
            }
          }`
      ).then(data => {
        setFeaturedCategory(data)
      })
    }, [])
     
  return (
    <SafeAreaView className='bg-white pt-5'>

      <View className="flex-row pb-3 items-center mx-3 space-x-2">
        <Image source={require('../assets/boy.png')} className="h-7 w-7 bg-gray-300 p-5 rounded-full"/>
        <View className='flex-1'>
            <Text className="font-bold text-gray-400 text-xs ml-0.5">Deliver Now!</Text>
            <Text className="font-bold text-xl">Current Location
                <ChevronDownIcon size={20} color='#00CCBB' />
            </Text>
        </View>
        <UserIcon size={35} color='#00CCBB'/>
      </View>

      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
          <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
              <MagnifyingGlassIcon color='gray'/>
              <TextInput placeholder='Reastaurants and Cuisines ' keyboardType='default' className='flex-1'/>  
          </View>
          <AdjustmentsVerticalIcon color='#00CCBB'/>
      </View>

      <ScrollView className="bg-gray-100" contentContainerStyle={{
          paddingBottom: 100
        }}>
          <Categories />
          {
            featuredCategory.map(category => (
              <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
            ))
          }
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen