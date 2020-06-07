import React from 'react';

import { observer } from 'mobx-react'
import { StyledWindowsButtons, StyledWindowsButton } from './style'

import { BrowserWindow, ipcRenderer } from 'electron';
import { 
    CLOSE_PATH, 
    MAXIMISE_PATH, 
    MINIMISE_PATH 
} from './iconPaths';

const onWindowsButtonClick = (type: 'close' | 'maximise' | 'minimise', ipcPrefix: string) => {
    if(type == "close") return ipcRenderer.send(`${ipcPrefix}-close`)
    if(type == "maximise") return ipcRenderer.send(`${ipcPrefix}-maximise`)
    if(type == "minimise") return ipcRenderer.send(`${ipcPrefix}-minimise`)
}

export const WindowsButtons = observer(({ ipcPrefix }: { ipcPrefix: string }) => (
    <StyledWindowsButtons>
        <WindowsButton type={"minimise"} onClick={() => onWindowsButtonClick("minimise", ipcPrefix)} />
        <WindowsButton type={"maximise"} onClick={() => onWindowsButtonClick("maximise", ipcPrefix)} />
        <WindowsButton type={"close"} onClick={() => onWindowsButtonClick("close", ipcPrefix)} />
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