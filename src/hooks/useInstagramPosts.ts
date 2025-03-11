import { useState, useEffect } from 'react';
import { InstagramPost } from '../types/instagram';
import { createInstagramService } from '../services/instagramService';

const instagramService = createInstagramService(import.meta.env.VITE_IG_TOKEN);

export const useInstagramPosts = (limit: number = 9) => {
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [instagramUrl, setInstagramUrl] = useState<string>('');
    const [nextPage, setNextPage] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchInstagramData = async () => {
            setLoading(true);
            const { posts: fetchedPosts, nextPage: fetchedNextPage } = await instagramService.getPosts(limit);
            setPosts(fetchedPosts);
            setNextPage(fetchedNextPage);

            const url = await instagramService.getInstagramUrl();
            setInstagramUrl(url);
            setLoading(false);
        };

        fetchInstagramData();
    }, [limit]);

    const loadMorePosts = async () => {
        if (!nextPage) return;

        setLoading(true);
        const { posts: fetchedPosts, nextPage: fetchedNextPage } = await instagramService.getPosts(limit, nextPage);
        setPosts(prevPosts => [...prevPosts, ...fetchedPosts]);
        setNextPage(fetchedNextPage);
        setLoading(false);
    };

    return { posts, instagramUrl, loadMorePosts, loading, hasMore: !!nextPage };
};