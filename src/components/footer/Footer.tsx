import { FaInstagram } from 'react-icons/fa';
import '../../styles/components/footer/_footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2025 Collares Artesanales. Todos los derechos reservados.</p>
            <div className="contact-info">
                <FaInstagram />
                <span>Instagram</span>
                <a href="mailto:contacto@ejemplo.com">contacto@ejemplo.com</a>
            </div>
        </footer>
    );
}