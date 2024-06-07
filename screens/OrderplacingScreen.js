import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animation from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'


const OrderplacingScreen = () => {
    const nav =useNavigation();

    useEffect(() => {
        setTimeout(() => {
            nav.navigate("Delivery")
        }, 4000)
    },[])

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
        <Animation.Image
            source={require("../assets/chef.gif")}
            iterationCount={1} 
            animation="slideInUp"
            className="mr-5 rounded-full w-45 h-50"/>
        <Animation.Text
            iterationCount={1} 
            animation="slideInUp"
            className="text-lg my-8 font-bold text-center"
        >Awaiting your Order confirmation by the restaraunt</Animation.Text>
        <Progress.CircleSnail size={50} indeterminate={true} color={"black"} />
    </SafeAreaView>
  )
}

export default OrderplacingScreen