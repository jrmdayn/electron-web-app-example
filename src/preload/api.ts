import { ipcRenderer } from 'electron'

// Custom APIs for renderer
export const api = {
  open: (): Promise<void> => {
    return ipcRenderer.invoke('open')
  }
}

export type Api = typeof api
