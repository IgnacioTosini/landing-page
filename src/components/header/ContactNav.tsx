import '../../styles/components/header/_contactNav.scss';
import { InstagramButton } from '../shared/InstagramButton';
import { useInstagramPosts } from '../../hooks/useInstagramPosts';

export default function ContactNav() {
    const { instagramUrl } = useInstagramPosts();

    const handleScrollToSection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <ul>
                <li>
                    <a href="#productos" onClick={(e) => handleScrollToSection(e, 'productos')}>
                        Productos
                    </a>
                </li>
                <li>
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-button"
                    >
                        <InstagramButton showIcon text="Ver en Instagram" colorButton />
                    </a>
                </li>
            </ul>
        </nav>
    );
}