import { FaSearch, FaEnvelope, FaShoppingBag } from 'react-icons/fa';
import { InstagramButton } from '../shared/InstagramButton';
import { IconContainer } from '../shared/IconContainer';
import { useInstagramPosts } from '../../hooks/useInstagramPosts';
import '../../styles/components/main/_howToBuy.scss';

export const HowToBuy = () => {
    const { instagramUrl } = useInstagramPosts();

    return (
        <section className="how-to-buy">
            <h2>¿Cómo Comprar?</h2>
            <p className="subtitle">Todos nuestros productos están disponibles para compra a través de Instagram</p>

            <div className="steps-container">
                <div className="step-card">
                    <IconContainer icon={<FaSearch />} />
                    <h3>Explora</h3>
                    <p>Navega por nuestra colección de collares artesanales</p>
                </div>

                <div className="step-card">
                    <IconContainer icon={<FaEnvelope />} />
                    <h3>Contacta</h3>
                    <p>Visita nuestro perfil de Instagram y envíanos un mensaje</p>
                </div>

                <div className="step-card">
                    <IconContainer icon={<FaShoppingBag />} />
                    <h3>Recibe</h3>
                    <p>Coordinaremos el envío a la entrega de tu collar</p>
                </div>
            </div>

            <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-button"
            >
                <InstagramButton showIcon text='Visitar Perfil' colorButton />
            </a>
        </section>
    );
};