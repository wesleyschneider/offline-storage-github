import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Name, Description, Stats, Stat, StarCount} from './styles';

export default function Repository({data}) {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>

      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333" />
          <StarCount>{data.stars}</StarCount>
        </Stat>
        <Stat>
          <Icon name="code-fork" size={16} color="#333" />
          <StarCount>{data.forks}</StarCount>
        </Stat>
      </Stats>
    </Container>
  );
}
