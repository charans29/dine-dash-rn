import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'
import client from '../sanity'

const FeaturedRow = ({id, title, description}) => {
    const [Restaraunt, setRestaurant] = useState([])

    useEffect(() => {
        client.fetch(
            `*[_type == 'featured' && _id == $id] {
                ...,
                restaurants[]->{
                  ...,
                  dishes[]->,
                  type-> {
                    name
                  }
                }
            } [0]`,
            { id }
        ).then(data => {
            setRestaurant(data?.restaurants)
        })
    }, [id]);

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
            {
                Restaraunt.map(resto => (
                    <RestaurantCards
                        key={resto._id}
                        imgUrl={resto.image}
                        id={resto._id}
                        title={resto.title}
                        rating={resto.rating}
                        genre={resto.type?.name}
                        address={resto.address}
                        shortDescription={resto.short_description}
                        dishes={resto.dishes}
                    />
                ))
            }

            {/* <RestaurantCards 
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
            /> */}
        </ScrollView>
    </View>
  )
}

export default FeaturedRow