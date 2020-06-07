import * as colors from 'colors';

interface LoggerOptions {
    caller: string
}

export const log = (payload: any, options: LoggerOptions) => {
    if(!options) options = { caller: (process && (process as any).type === 'renderer') ? 'Renderer' : 'Main' }

    console.log(colors.blue.bold(options.caller), payload)
}