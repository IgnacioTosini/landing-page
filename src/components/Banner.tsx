import { InstagramButton } from "./shared/InstagramButton";
import '@/styles/components/main/_banner.scss';
import { useInstagramPosts } from '../hooks/useInstagramPosts';

export default function Banner() {
    const { instagramUrl } = useInstagramPosts();

    return (
        <div className="banner">
            <div className="banner-background"></div>
            <div className="banner-content">
                <h1>Collares Artesanales Únicos</h1>
                <p className="text-banner">Descubre nuestra colección de collares hechos a mano con amor y dedicación.</p>
                <div className="banner-buttons">
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-button"
                    >
                        <InstagramButton showIcon text="Ver en Instagram" colorButton />
                    </a>
                </div>
            </div>
        </div>
    );
}