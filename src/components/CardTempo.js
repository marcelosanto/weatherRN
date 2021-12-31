import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function CardTempo() {
  const Ficon = () => <FontAwesome5 name={'sun'} light size={128} solid />

  return (
    <View
      style={{
        height: 300,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          borderRadius: 10,
          width: 150,
          height: 25,
          marginTop: 30,
          marginBottom: 30,
        }}>
        <Text
          style={{
            color: 'yellow',
            fontWeight: 'bold',
          }}>
          Serra Dourada - ES
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
          height: 200,
        }}>
        <Text>30/12/2021</Text>
        <Ficon />
      </View>

      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <Text style={{ fontSize: 50 }}>30ºC</Text>
        <Text>Dia limpo</Text>
      </View>
    </View>
  )
}
