import Vue from 'vue'

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
declare const Template: import('vue/types/vue').ExtendedVue<Vue, unknown, unknown, unknown, unknown>
declare const AuthorList: StylableElement
declare const AuthorName: StylableElement
declare const Blockquote: StylableElement
declare const Date: StylableElement
declare const Description: StylableElement
declare const Desk: StylableElement
declare const Header1: StylableElement
declare const Header2: StylableElement
declare const Paragraph: StylableElement
declare const Title: StylableElement
declare const TitleElement: StylableElement
declare const Description: StylableElement

declare const Article: Vue
declare const ArticleBlock: Vue
declare const ArticleInfo: Vue
declare const Header: Vue
declare const HeaderBlock: Vue
declare const Content: Vue
export const Icon: Component
export const Logo: Component
declare const LinkElement: import('vue/types/vue').ExtendedVue<Vue, {}, {}, {}, { href: string }>
export const ResponsiveImage: Component
declare const HeadlineImage: Vue
declare const HeadlineCaption: Vue
declare const SubscribeForm: Vue
declare const SubscribeEmail: Vue
declare const Site: Vue

declare const ColorArea: import('vue/types/vue').ExtendedVue<
  Vue,
  {},
  {},
  {},
  ElementProps & { backgroundColor: string | Record<string, string> }
>

export {
  Article,
  ArticleBlock,
  ArticleInfo,
  AuthorList,
  AuthorName,
  Authors,
  Blockquote,
  Content,
  Date,
  Description,
  Desk,
  Header,
  HeaderBlock,
  Header1,
  Header2,
  HeadlineCaption,
  HeadlineImage,
  LinkElement,
  Paragraph,
  Site,
  SubscribeEmail,
  SubscribeForm,
  Template,
  Title,
  TitleElement,
}
