export interface IFont {
  id: string;
  family: string;
  fullName: string;
  postScriptName: string;
  preview: string;
  style: string;
  url: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  userId: string | null;
}

export interface ICompactFont {
  family: string;
  styles: IFont[];
  default: IFont;
  name?: string;
}

export interface IDataState {
  fonts: IFont[];
  compactFonts: ICompactFont[];
  setFonts: (fonts: IFont[]) => void;
  setCompactFonts: (compactFonts: ICompactFont[]) => void;
}

export type IPropertyType = "textContent" | "fontSize" | "color";
type ITrackType = "main" | "text" | "image" | "video" | "audio" | "helper";
export type ItemType =
  | "text"
  | "element"
  | "image"
  | "video"
  | "audio"
  | "helper";

export interface ITrack {
  id: string;
  type: ITrackType;
  items: string[];
  metadata?: Partial<IMetadata>;
  accepts?: ItemType[];
  index?: number;
}

export type ITrackItem =
  | (ITrackItemBase & { type: "text"; details: ITextDetails })
  | (ITrackItemBase & { type: "image"; details: IImageDetails })
  | (ITrackItemBase & { type: "video"; details: IVideoDetails })
  | (ITrackItemBase & { type: "audio"; details: IAudioDetails })
  | (ITrackItemBase & { type: "helper"; details: ICommonDetails });

export interface ITrackItemBase {
  id: string;
  name: string;
  type: ItemType;
  preview?: string;
  position?: IPosition | null;
  display: IDisplay;
  details: Record<string, any>;
  trim?: ITrim;
  metadata: Record<string, any>;
  isMain?: boolean;
  animation?: any;
}

export interface IPosition {
  top: number;
  left: number;
  transform: string;
}

export interface ILayerBase {
  id: string;
  name: string;
  type: ItemType;
  preview?: string;
  position?: IPosition | null;
  details: Record<string, any>;
  metadata: Record<string, any>;
  isMain?: boolean;
  animation?: any;
  trim?: {
    from: number;
    to: number;
  };
  display?: {
    from: number;
    to: number;
  };
}

export interface IAudio extends ILayerBase {
  type: ItemType;
  details: { volume: number; src: string; duration: number };
}

export interface IText extends ILayerBase {
  type: ItemType;
  details: ITextDetails;
}

export interface IImage extends ILayerBase {
  type: "image";
  details: {
    src: string;
    width: number;
    height: number;
    background?: string;
    opacity?: number;
    transform?: string;
    border?: number | string;
    borderRadius?: number | string;
    boxShadow?: string;
    top?: number | string;
    left?: number | string;
    duration?: number;
  };
}

export interface IVideo extends ILayerBase {
  type: "video";
  details: IVideoDetails;
}
export interface IMetadata {
  resourceId: string;
  order: number;
}

type TextAlign = "left" | "right" | "center" | "justify";
type FontWeight = "normal" | "bold" | "bolder" | "lighter" | number; // number for values like 100, 200, etc.
type TextDecoration = "none" | "underline" | "overline" | "line-through";
type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase";
type FontStyle = "normal" | "italic" | "oblique";
type Display = "block" | "inline" | "inline-block" | "flex" | "grid";
type Position = "static" | "relative" | "absolute" | "fixed" | "sticky";

interface ICommonDetails {
  width?: number;
  height?: number;
  transform?: string;
  opacity?: number;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  top?: number | string;
  left?: number | string;
}

export interface ITextDetails extends ICommonDetails {
  text: string;
  fontSize: number;
  fontFamily: string;
  fontUrl: string;
  color: string;
  align: string;
  lineHeight: number;
  letterSpacing: number;
  fontWeight: number;
  fontStyle: string;
  textDecoration: string;
  textAlign: string;
  wordSpacing: number;
  textShadow: string;
  backgroundColor: string;
  opacity: number;
  width: number;
  height: number;
  top: number | string;
  left: number | string;
  border: string;
  wordWrap: string;
  wordBreak: string;
  WebkitTextStrokeColor: string;
  WebkitTextStrokeWidth: string;
}

interface IImageDetails extends ICommonDetails {
  src: string;
}

interface IAudioDetails extends ICommonDetails {
  src: string;
  duration: number;
}

export interface IVideoDetails extends ICommonDetails {
  src: string;
  duration: number;
  frames: number;
  background?: string;
  stream?: ReadableStream<Uint8Array>;
  blob?: Blob;
  width: number;
  height: number;
}

export type ILayer =
  | (ILayerBase & { type: "textbox"; details: ITextDetails })
  | (ILayerBase & { type: "image"; details: IImageDetails })
  | (ILayerBase & { type: "video"; details: IVideoDetails });

export interface ILayersMap {
  [id: string]: ILayer;
}

export interface IDesign {
  id: string | number;
  size: {
    width: number;
    height: number;
    type?: string; // landscape | portrait | square | custom
  };
  duration: number; // in miliseconds
  itemIds: string[];
  itemsMap: ILayersMap;
}

export interface IDisplay {
  from: number;
  to: number;
}

export interface ITrim {
  from: number;
  to: number;
}
