import { useState } from 'react';
import { InstagramPost } from '../types/instagram';

export function useGallery(post: InstagramPost) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const nextMedia = () => {
        if (post.children?.data && currentMediaIndex < post.children.data.length - 1) {
            setCurrentMediaIndex(prev => prev + 1);
        }
    };

    const prevMedia = () => {
        if (currentMediaIndex > 0) {
            setCurrentMediaIndex(prev => prev - 1);
        }
    };

    const getMediaUrl = (index: number) => {
        if (post.children?.data && post.children.data[index]) {
            return post.children.data[index].media_url;
        }
        return post.media_url;
    };

    const getThumbnailUrl = (index: number) => {
        if (post.children?.data && post.children.data[index]) {
            return post.children.data[index].thumbnail_url || post.children.data[index].media_url;
        }
        return post.thumbnail_url || post.media_url;
    };

    const isVideo = (index: number) => {
        if (post.children?.data && post.children.data[index]) {
            return post.children.data[index].media_type === 'VIDEO';
        }
        return post.media_type === 'VIDEO';
    };

    return {
        isModalOpen,
        openModal,
        closeModal,
        currentMediaIndex,
        nextMedia,
        prevMedia,
        getMediaUrl,
        getThumbnailUrl,
        isVideo,
        setCurrentMediaIndex,
    };
}
