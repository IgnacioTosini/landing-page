export interface InstagramMedia {
    id: string;
    media_url: string;
    media_type: string;
    thumbnail_url?: string;
}

export interface InstagramPost {
    id: string;
    media_type: string;
    media_url: string;
    thumbnail_url?: string;
    caption: string;
    permalink: string;
    children?: {
        data: InstagramMedia[];
    };
}