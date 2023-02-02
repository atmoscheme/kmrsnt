export namespace ArticleLong {

  export type PlainTextElement = string;

  export interface HTMLTagElement  {
    tagName: string;// 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'ol' | 'ul' | 'li' | 'hr' | 'a' | 'b' | 'i' | 'span';
    attributes: { [key: string]: string };
    children: (PlainTextElement | HTMLTagElement)[]
  }

  export type Incut = {
    widgetType: 'incut'
    [key:string]:any,
  }

  export type Audio = {
    widgetType: 'audio'
    [key:string]:any,
  }

  export type Vote = {
    widgetType: 'vote'
    [key:string]:any,
  }

  export type Citation = {
    widgetType: 'citation'
    [key:string]:any,
  }

  export type Spravka = {
    widgetType: 'spravka'
    [key:string]:any,
  }

  export type Illustration = {
    widgetType: 'illustration'
    [key:string]:any,
  }

  export type AdaptivePhoto = {
    widgetType: 'adaptive_photo'
    [key:string]:any,
  }

  export type Video = {
    widgetType: 'video'
    [key:string]:any,
  }

  export type Gallery = {
    widgetType: 'gallery'
    [key:string]:any,
  }

  export type Collapse = { // врез расхлоп
    widgetType: 'collapse'
    [key:string]:any,
  }

  export type Table = { // врез таблица
    widgetType: 'table';
    [key:string]:any,
  }


  export type Free = { // свободный врез
    widgetType: 'free'
    [key:string]:any,
  }

  export type Socials = {
    widgetType: 'socials'
    [key:string]:any,
  }

  export type PoseidonWidget = {
    widgetType: 'poseidonWidget';
    [key:string]:any,
  }

  export type Vvodka = { // <vvodka>, <vvodka_main>
    widgetType: 'vvodka';
    [key:string]:any,
  }

  export type Title2 = {
    widgetType: 'title2';
    [key:string]:any,
  }

  export type Author = { // <author>
    widgetType: 'author';
    [key:string]:any,
  }

  export type Para = {
    widgetType: 'para';
    bodyElements: (PlainTextElement | HTMLTagElement)[];
  }

  export type List = {
    widgetType: 'list';
    [key:string]:any,
  }


  export type WidgetElement = Collapse
    | Vvodka
    | Title2
    | Author
    | Para
    | Gallery
    | List
    | Table
    | PoseidonWidget
    | Video
    | AdaptivePhoto
    | Illustration
    | Spravka
    | Citation
    | Vote
    | Audio
    | Incut
    | Free
    | Socials

  export type DocBodyElement = PlainTextElement | WidgetElement | HTMLTagElement

  export interface IArticleLong {
    dataHash?: string,
    data: {
      [key:string]:any,

      content: {
        [key:string]:any,
        docBodyElements: DocBodyElement[]
      },
    }
  }

  export interface APIDataStructure extends IArticleLong {
  }
}

