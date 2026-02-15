import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    border: none;
    cursor: pointer;

    color: #fff;
    padding: 8px 16px;
    min-width: 120px;
    width: 100%;
    font-size: 14px;
    font-weight: 600;

    transition: all 0.3s ease;

    &:hover {
        opacity: 0.8;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }

    ${({$variant})=> $variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background: #E4105D;

        &:hover {
            background: #c4104d;
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
            transition: all 0.3s ease;
        }

        &:hover::after {
            border-color: #c4104d;
        }
    `}
`