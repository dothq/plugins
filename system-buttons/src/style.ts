import styled, { css } from "styled-components";

export const StyledWindowsButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    -webkit-app-region: drag;
    user-drag: none;
    flex: 1;
`;

export const StyledWindowsButton = styled.div`
    width: 45px;
    height: 100%;
    transition: 0.2s background-color;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-app-region: no-drag;

    ${({ isClose }: { isClose?: boolean }) => css`
        &:hover {
            background-color: ${isClose ? "#e81123" : "#e5e5e5"};

            svg {
                filter: ${isClose ? "invert(1)" : ""};
            }
        }
    `};
`;