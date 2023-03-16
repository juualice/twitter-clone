import React from 'react';

import Button from '../Button';
import {
  Container,
  Topside,
  Logo,
  MenuButton,
  Botside,
  Avatar,
  ProfileData,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  ExitIcon  
} from './styles';

export default function MenuBar() {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
          <Avatar />
          <ProfileData>
              <strong>Vinícius Dutra</strong>
              <span>@ViniciusDutt</span>
          </ProfileData>
          <ExitIcon />
      </Botside>

    </Container>
  );
}
