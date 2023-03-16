import styled from 'styled-components';

import Button from '../Button'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        align-items: center;
    }
`;

export const Avatar = styled.div`
    width: 48px;
    height: 48px;
    background: var(--gray);
    border-radius: 50%;
    margin-right: 9px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;

    > span {
        color: var(--gray);
    }
`;

export const FollowButton = styled(Button)`
    padding: 4px 16px;
`;