import { toast } from '@zerodevx/svelte-toast'

export const success = m => toast.push(m, {
  theme: {
    '--toastBackground': 'hsl(125, 100%, 20%)',
    '--toastColor': 'white',
    '--toastBarBackground': 'hsl(125, 100%, 50%)'
  }
})

export const warning = m => toast.push(m, {
  theme: {
    '--toastBackground': 'hsl(40, 100%, 20%)',
    '--toastColor': 'white',
    '--toastBarBackground': 'hsl(40, 100%, 50%)'
  }
})

export const failure = m => toast.push(m, {
  theme: {
    '--toastBackground': 'hsl(0, 100%, 20%)',
    '--toastColor': 'white',
    '--toastBarBackground': 'hsl(0, 100%, 50%)'
  }
})