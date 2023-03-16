import styled, { css } from 'styled-components';
import {
  Home,
  Notifications,
  Email,
  Heart,
  Person,
  Twitter,
  ExitToApp
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 18px 18px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Twitter)`
  width: 48px;
  height: 48px;
  margin-bottom: 24px;

  > path {
    fill: var(--twitter);
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 9px 0;
  outline: 0;
  cursor: pointer;
  border-radius: 24px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 18px;
      font-weight: bold;
      font-size: 18px;
    }
    padding-right: 16px;
  }

  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    margin-top: 32px;
    width: 42px;
    height: 42px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }
`;

export const Botside = styled.div`
    margin-top: 24px;
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--gray);
`;

export const ProfileData = styled.div`
    display: none;

    @media (min-width: 1280px) {
        display: flex;
        flex-direction: column;
        margin-left: 9px;
        font-size: 16px;

        > span {
            color: var(--gray);
        }
    }
`;


const IconCSS = css`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${IconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${IconCSS}
`;
export const EmailIcon = styled(Email)`
  ${IconCSS}
`;
export const FavoriteIcon = styled(Heart)`
  ${IconCSS}
`;
export const ProfileIcon = styled(Person)`
  ${IconCSS}
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
      display: inline-block;
      width: 24px;
      height: 24px;
      margin-left: 32px;
      cursor: pointer;

      &:hover {
          > path {
              color: var(--like);
          }
      }
  }
`;