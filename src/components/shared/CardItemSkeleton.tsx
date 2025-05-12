import '../../styles/components/shared/_cardItemSkeleton.scss';

export const CardItemSkeleton = () => (
    <div className="card-item skeleton">
        <div className="card-image">
            <div className="skeleton-image" />
            <div className="image-counter skeleton-counter" />
            <div className="video-indicator skeleton-video" />
        </div>
        <div className="card-content">
            <div className="skeleton-title" />
            <div className="skeleton-button" />
        </div>
    </div>
);
