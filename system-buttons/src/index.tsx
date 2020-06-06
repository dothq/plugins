import React from 'react';

import { observer } from 'mobx-react'
import { StyledWindowsButtons, StyledWindowsButton } from './style'

import { BrowserWindow } from 'electron';
import { 
    CLOSE_PATH, 
    MAXIMISE_PATH, 
    MINIMISE_PATH 
} from './iconPaths';

const onWindowsButtonClick = (type: 'close' | 'maximise' | 'minimise', windowHook: BrowserWindow) => {
    if(type == "close") return windowHook.close()
    if(type == "maximise") {
        if(windowHook.isMaximized()) return windowHook.unmaximize()
        return windowHook.maximize()
    }
    if(type == "minimise") return windowHook.minimize()
}

export const WindowsButtons = observer(({ window }: { window: BrowserWindow }) => (
    <StyledWindowsButtons>
        <WindowsButton type={"minimise"} onClick={() => onWindowsButtonClick("minimise", window)} />
        <WindowsButton type={"maximise"} onClick={() => onWindowsButtonClick("maximise", window)} />
        <WindowsButton type={"close"} onClick={() => onWindowsButtonClick("close", window)} />
    </StyledWindowsButtons>
))

const WindowsButton = observer(({ type, onClick }: { type: 'close' | 'maximise' | 'minimise'; onClick: any }) => {
    const path = type == 'close' 
                    ? CLOSE_PATH
                    : type == 'maximise'
                        ? MAXIMISE_PATH
                        : MINIMISE_PATH

    return (
        <StyledWindowsButton isClose={type == 'close'} onClick={onClick}>
            <svg aria-hidden="true" width="10" height="10">
                <path d={path}></path>
            </svg>
        </StyledWindowsButton>
    )
})