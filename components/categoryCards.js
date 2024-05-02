import { Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCards = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className='mr-2'>
        <Image source={imgUrl} className='h-20 w-20 rounded'/>
        <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCards