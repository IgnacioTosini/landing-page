import { useState } from 'react';
import { InstagramPost } from '../../types/instagram';
import '../../styles/components/main/_cardItem.scss';
import { InstagramButton } from '../shared/InstagramButton';
import { Modal } from '../shared/Modal';
import { FaImages, FaPlay } from 'react-icons/fa';

interface CardItemProps {
    post: InstagramPost;
}

export const CardItem = ({ post }: CardItemProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleNextMedia = () => {
        if (post.children?.data && currentMediaIndex < post.children.data.length - 1) {
            setCurrentMediaIndex(prev => prev + 1);
        }
    };

    const handlePrevMedia = () => {
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

    return (
        <div className="card-item">
            <div className="card-image" onClick={handleOpenModal}>
                {isVideo(0) ? (
                    <img
                        src={getThumbnailUrl(0)}
                        alt={post.caption}
                        loading="lazy"
                    />
                ) : (
                    <img
                        src={getMediaUrl(0)}
                        alt={post.caption}
                        loading="lazy"
                    />
                )}
                {post.children?.data && post.children.data.length > 1 && (
                    <div className="image-counter">
                        <FaImages /> {post.children.data.length}
                    </div>
                )}
                {isVideo(0) && (
                    <div className="video-indicator">
                        <FaPlay />
                    </div>
                )}
            </div>
            <div className="card-content">
                <h1>{post.caption.split('\n')[0]}</h1>
                <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-button"
                >
                    <InstagramButton showIcon text="Ver en Instagram" colorButton />
                </a>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className="modal-content">
                    {isVideo(currentMediaIndex) ? (
                        <video controls>
                            <source src={getMediaUrl(currentMediaIndex)} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img src={getMediaUrl(currentMediaIndex)} alt={post.caption} />
                    )}
                    {post.children?.data && post.children.data.length > 1 && (
                        <div className="modal-navigation">
                            <button className="nav-button prev" onClick={handlePrevMedia} disabled={currentMediaIndex === 0}>
                                &lt;
                            </button>
                            <button className="nav-button next" onClick={handleNextMedia} disabled={currentMediaIndex === post.children.data.length - 1}>
                                &gt;
                            </button>
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    );
};