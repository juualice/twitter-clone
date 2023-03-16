import styled from 'styled-components';
import { Search } from '../../styles/Icons'

export const Container = styled.div`
    display: none;

    @media (min-width: 1000px){
        display: flex;
        flex-direction: column;
        width: min(399px, 100%);
    }
`;

export const SearchWrapper = styled.div`
    padding: 9px 24px;
    width: min(399px, 100%);
    position: fixed;
    top: 0;
    z-index: 2;
    background: var(--primary);
    max-height: 58px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 42px;
    font-size: 16px;
    padding: 0 9px 0 56px;
    border-radius: 18px;
    background: var(--search);
    outline: 0;
    
    &::placeholder {
        color: var(--gray);
    }

    ~ svg {
        position: relative;
        top: -32px;
        left: 16px;
        z-index: 1;
        transition: 180ms ease-in-out;
    }

    &:focus {
        border: 1px solid var(--twitter);

        ~ svg {
            fill: var(--twitter);
        }
    }

`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 56px 24px 192px;
    margin-top: 4px;

    > div + div {
        margin-top: 16px;
    }
`;

export const SearchIcon = styled(Search)`
    width: 24px;
    height: 24px;
    fill: var(--gray);
`;