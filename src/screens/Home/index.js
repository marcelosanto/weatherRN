import React, { useState } from 'react'

import CardTempo from '../../components/CardTempo'
import Itemlist from '../../components/ItemList'

import { data } from '../../utils/utils'
import { Wrapper, Lista, ListaContainer } from './styles'

const Home = () => {
  const [dados, setDados] = useState(data.forecast)
  return (
    <Wrapper>
      <CardTempo data={data} />

      <ListaContainer>
        <Lista
          data={dados}
          renderItem={({ item }) => <Itemlist item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ListaContainer>
    </Wrapper>
  )
}

export default Home
