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
    </ScrollView>
  )
}

export default Categories