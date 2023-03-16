import styled, { css } from 'styled-components';
import { Chat, Heart, Retweet, ShareAlternative } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-bottom: 1px solid var(--outline);
    max-width: 100%;
`;
export const Action = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: var(--gray);
    margin-left: 56px;
`;
export const Body = styled.div`
    display: flex;
    margin-top: 4px;
    position: relative;
`;
export const Avatar = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--gray);
    position: absolute;
    top: 0;
    left: 0;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 4px;
    padding-left: 58px;
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    white-space: nowrap;

    > strong {
        margin-right: 4px;
    }

    > span, time {
        color: var(--gray);
    }

    > strong, span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;
export const Dot = styled.div`
    background: var(--gray);
    width: 2px;
    height: 2px;
    margin: 0 12px;
`;
export const Description = styled.p`
    font-size: 12px;
    margin-top: 4px;
`;
export const ImageContent = styled.div`
    margin-top: 12px;
    width: 100%;
    height: min(285px, max(175px, 41vw));
    background: var(--outline);
    border-radius: 12px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;
export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-right: 11px auto 0;
    width: 100%;

    @media (min-width: 330px){
        width: 63%;
    }
`;
export const Status = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    transition: ease-out 0.2s;

    &:nth-child(1){
        color: var(--gray);

        > svg path {
            fill: var(--gray);
        }
        &:hover {
            color: var(--twitter-light-hover);

            > svg path {
                fill: var(--twitter-light-hover);
            }
        }
    }
    &:nth-child(2){
        color: var(--gray);

        > svg path {
            fill: var(--gray);
        }
        &:hover {
            color: var(--retweet);

            > svg path {
                fill: var(--retweet);
            }
        }
    }
    &:nth-child(3){
        color: var(--gray);
        
        > svg path {
                fill: var(--gray);
            }
        
        &:hover {
            color: var(--like);

            > svg path {
                fill: var(--like);
            }
        }
    }
    &:nth-child(4){
        color: var(--gray);
        
        > svg path {
                fill: var(--gray);
            }
        
        &:hover {
            color: var(--twitter-light-hover);

            > svg path {
                fill: var(--twitter-light-hover);
            }
        }
    }
`;

const iconCSS = css`
    width: 16px;
    height: 16px;
    fill: var(--gray);
    margin-right: 4px;
`;


export const CommentIcon = styled(Chat)`${iconCSS}`;
export const RetweetIcon = styled(Retweet)`${iconCSS}`;
export const LikeIcon = styled(Heart)`${iconCSS}`;
export const ShareIcon = styled(ShareAlternative)`${iconCSS}`;