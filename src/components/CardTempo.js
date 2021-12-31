import React from 'react'
import { View, Text } from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { tempIcons } from '../utils/utils'

export default function CardTempo({ data }) {
  const TempIcon = () => (
    <FontAwesome5
      name={tempIcons(data.condition_slug)}
      light
      size={128}
      solid
    />
  )

  return (
    <View
      style={{
        height: 400,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 30,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          borderRadius: 10,
          width: 100,
          height: 30,
          marginTop: 30,
          marginBottom: 30,
        }}>
        <Text
          style={{
            color: 'yellow',
            fontWeight: 'bold',
          }}>
          {data.city}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
          height: 250,
        }}>
        <Text>{data.date}</Text>
        <TempIcon />
      </View>

      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <Text style={{ fontSize: 50 }}>{data.temp}ºC</Text>
        <Text>{data.description}</Text>
      </View>
    </View>
  )
}
