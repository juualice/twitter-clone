import React from 'react';

import { Container, Item, Title } from './styles';

interface Props {
  title: string;
  elements: React.ReactNode[];
}

export default function List({ title, elements }: Props) {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>

        {elements.map((element, index) => (
          <Item key={index}>{element}</Item>
        ))}
      </Item>
    </Container>
  );
}
