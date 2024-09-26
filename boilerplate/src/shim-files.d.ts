declare module '*.png' {
  const path: string

  export default path
}

declare module '*.scss' {}

declare module '*.jpg' {
  const path: string

  export default path
}

declare module '*.jpeg' {
  const path: string

  export default path
}

declare module '*.webp' {
  const path: string

  export default path
}

declare module '@storipress/block-inspector' {
  import { Component } from 'vue'

  export const Inspector: Component
}
