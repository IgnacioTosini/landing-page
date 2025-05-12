import { useGallery } from '../../hooks/useGallery';
import { InstagramPost } from '../../types/instagram';
import '../../styles/components/main/_cardItem.scss';
import { InstagramButton } from '../shared/InstagramButton';
import { Modal } from '../shared/Modal';
import { FaImages, FaPlay } from 'react-icons/fa';

interface CardItemProps {
    post: InstagramPost;
}

export const CardItem = ({ post }: CardItemProps) => {
    const {
        isModalOpen,
        openModal,
        closeModal,
        currentMediaIndex,
        nextMedia,
        prevMedia,
        getMediaUrl,
        getThumbnailUrl,
        isVideo,
    } = useGallery(post);

    return (
        <div className="card-item">
            <div className="card-image" onClick={openModal}>
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
            <Modal isOpen={isModalOpen} onClose={closeModal}>
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
                            <button className="nav-button prev" onClick={prevMedia} disabled={currentMediaIndex === 0}>
                                &lt;
                            </button>
                            <button className="nav-button next" onClick={nextMedia} disabled={currentMediaIndex === post.children.data.length - 1}>
                                &gt;
                            </button>
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    );
};