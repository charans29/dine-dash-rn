import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

const FeaturedRow = ({id, title, description, featuredCategory}) => {
  return (
    <View>
        <View className="mt-4 flex-row justify-between items-center px-3.5">
            <Text className="text-lg font-bold">
                {title}
            </Text>
            <ArrowRightIcon color='#00CCBB'/>
        </View>
        <View>
            <Text className="ml-4 text-xs text-gray-500">
                {description}
            </Text>
        </View>
        <ScrollView 
            horizontal
            contentContainerStyle = {
                {
                    paddingHorizontal: 15
                }
            }
            showsHorizontalScrollIndicator = { false }
            className="pt-4" 
        >
            <RestaurantCards 
                id="1"
                imgUrl={require('../assets/Wings.jpg')}
                title="RC!"
                rating={4.5}
                genre="Inidan"
                address="hyderabad"
                shortDescription="This is heaven"
                dishes={[]}
                long={-12.888} 
                lat={+12.999}
            />
            <RestaurantCards 
                id="1"
                imgUrl={require('../assets/Wings.jpg')}
                title="RC!"
                rating={3.5}
                genre="Inidan"
                address="hyderabad"
                shortDescription="This is heaven"
                dishes={[]}
                long={-12.888} 
                lat={+12.999}
            />
            <RestaurantCards 
                id="1"
                imgUrl={require('../assets/Wings.jpg')}
                title="RC!"
                rating={3.5}
                genre="Inidan"
                address="hyderabad"
                shortDescription="This is heaven"
                dishes={[]}
                long={-12.888} 
                lat={+12.999}
            />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow