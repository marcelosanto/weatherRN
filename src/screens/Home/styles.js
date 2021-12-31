import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
  background: ${props => props.theme.background};
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
`

export const Title = styled.Text`
  color: ${props => props.theme.color};
  font-size: 44px;
`

export const ListaContainer = styled.View``
export const Lista = styled.FlatList``
