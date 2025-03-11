import { InstagramPost } from '../types/instagram';

const INSTAGRAM_API_URL = 'https://graph.instagram.com/me';

export class InstagramService {
    private accessToken: string;

    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }

    async getPosts(limit: number = 9, after?: string): Promise<{ posts: InstagramPost[], nextPage?: string }> {
        try {
            const url = new URL(`${INSTAGRAM_API_URL}/media`);
            url.searchParams.append('fields', 'id,media_type,media_url,thumbnail_url,caption,permalink,children{media_url,media_type,thumbnail_url}');
            url.searchParams.append('limit', limit.toString());
            url.searchParams.append('access_token', this.accessToken);
            if (after) {
                url.searchParams.append('after', after);
            }

            const response = await fetch(url.toString());

            if (!response.ok) {
                throw new Error('Error al obtener posts de Instagram');
            }

            const data = await response.json();
            const posts = data.data.map((post: any) => ({
                id: post.id,
                media_type: post.media_type,
                media_url: post.media_url,
                thumbnail_url: post.thumbnail_url,
                caption: post.caption || 'Sin descripción',
                permalink: post.permalink,
                children: post.children ? { data: post.children.data.map((child: any) => ({
                    id: child.id,
                    media_url: child.media_url,
                    media_type: child.media_type,
                    thumbnail_url: child.thumbnail_url
                })) } : undefined
            }));

            return {
                posts,
                nextPage: data.paging?.cursors?.after
            };
        } catch (error) {
            console.error('Error fetching Instagram posts:', error);
            return { posts: [] };
        }
    }

    async getProfilePicture(): Promise<string> {
        try {
            const response = await fetch(
                `${INSTAGRAM_API_URL}?fields=profile_picture_url&access_token=${this.accessToken}`
            );

            if (!response.ok) {
                throw new Error('Error al obtener la imagen de perfil de Instagram');
            }

            const data = await response.json();
            return data.profile_picture_url;
        } catch (error) {
            console.error('Error fetching Instagram profile picture:', error);
            return '';
        }
    }

    async getInstagramUrl(): Promise<string> {
        try {
            const response = await fetch(
                `${INSTAGRAM_API_URL}?fields=username&access_token=${this.accessToken}`
            );

            if (!response.ok) {
                throw new Error('Error al obtener la URL de Instagram');
            }

            const data = await response.json();
            return `https://www.instagram.com/${data.username}`;
        } catch (error) {
            console.error('Error fetching Instagram URL:', error);
            return '';
        }
    }
}

export const createInstagramService = (accessToken: string) => {
    return new InstagramService(accessToken);
};