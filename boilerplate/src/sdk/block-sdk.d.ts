interface ElementProps {
  kind: string
  blockType: string
  component: string
}

type StylableProp<T> = T | Record<'xs' | 'md' | 'lg', T>

interface StylableProps extends ElementProps {
  fontSize: StylableProp<number>
  fontFamily: StylableProp<string>
  bold: StylableProp<boolean>
  italic: StylableProp<boolean>
  underline: StylableProp<boolean>
  uppercase: StylableProp<boolean>
  lowercase: StylableProp<boolean>
  align: StylableProp<string>
  color: StylableProp<string>
  lineHeight: StylableProp<number>
  hoverColor: StylableProp<string>
}

type StylableElement = import('vue/types/vue').ExtendedVue<Vue, {}, {}, {}, StylableProps>

declare const Authors: import('vue/types/vue').ExtendedVue<
  Vue,
  {},
  {},
  {},
  StylableProps & {
    authorComponent: string
    separator: string
    authorClass: string
    separatorClass: string
  }
>

declare const TextElement: StylableElement
declare const TextInput: StylableElement
declare const ColorArea: import('vue/types/vue').ExtendedVue<
  Vue,
  {},
  {},
  {},
  ElementProps & { backgroundColor: string | Record<string, string> }
>

export { Authors, ColorArea, TextElement, TextInput }

type Component = import('vue').Component

export const Article: Component
export const ArticleBlock: Component
export const Block: Component
export const DeskList: Component
export const DeskSection: Component
export const FooterBlock: Component
export const HeroBlock: Component
export const Icon: Component
export const LinkElement: Component
export const Logo: Component
export const Nav: Component
export const Navigation: Component
export const PageList: Component
export const Portal: Component
export const ResponsiveImage: Component
export const HeadlineImage: Component
/** @private */
export const PortalTarget: Component
export const Site: Component
export const SiteInfo: Component
export const Spacing: Component
export const SpacingProvider: Component
/** @private */
export const SwappableImage: Component
export const SubscribeEmail: Component
export const SubscribeForm: Component
