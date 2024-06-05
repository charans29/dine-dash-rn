import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCards from './categoryCards'
import client, { urlFor } from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    client.fetch(
      `*[_type == 'category']`
    ).then(data => {
        setCategories(data)
    })
  }, [])
  
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
        {
          categories.map(itm => (
            <CategoryCards 
            key={itm._id}
            imgUrl={urlFor(itm.image).url()}
            title={itm.name}
            />
          ))
        }
        {/* <CategoryCards 
        imgUrl={require('../assets/Chickpea.jpg')}
        title="Food 1" />
        <CategoryCards 
        imgUrl={require('../assets/burger.png')}
        title="Food 2"/>
        <CategoryCards 
        imgUrl={require('../assets/chicken.png')}
        title="Food 3"/>
        <CategoryCards 
        imgUrl={require('../assets/Wings.jpg')}
        title="Food 4"/>
        <CategoryCards 
        imgUrl={require('../assets/bred.jpg')}
        title="Food 5"/>
        <CategoryCards 
        imgUrl={require('../assets/Rice.jpg')}
        title="Food 6"/>
        <CategoryCards 
        imgUrl={require('../assets/cheeto.jpg')}
        title="Food 7"/>
        <CategoryCards 
        imgUrl={require('../assets/samosa.jpg')}
        title="Food 8"/> */}
    </ScrollView>
  )
}

export default Categories