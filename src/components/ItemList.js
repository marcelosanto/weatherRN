import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { tempIcons } from '../utils/utils'

const Itemlist = ({ item }) => {
  const TempIcon = () => (
    <FontAwesome5 name={tempIcons(item.condition)} light size={20} solid />
  )

  return (
    <View
      style={{
        width: 50,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 15,
      }}>
      <TempIcon />
      <Text>{item.date}</Text>
      <Text>{item.max}ºC</Text>
    </View>
  )
}

export default Itemlist
