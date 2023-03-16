import React from 'react';

import {
  Container,
  Action,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon
} from './styles';

export default function Tweet() {
  return (
    <Container>
      <Action>
        <LikeIcon />
        mzt curtiu
      </Action>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Vinícius Dutra</strong>
            <span>@viniciusdutt</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>É só ball roll que rola.</Description>
          
          <ImageContent />

          <Icons >
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              128
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
            <Status>
              <ShareIcon />
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}
