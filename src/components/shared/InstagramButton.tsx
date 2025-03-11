import { FaInstagram } from 'react-icons/fa';
import '@/styles/components/shared/_instagramButton.scss';

type InstagramButtonProps = {
    showIcon: boolean;
    text: string;
    colorButton: boolean;
    onClick?: () => void;
}

export const InstagramButton: React.FC<InstagramButtonProps> = ({
    showIcon,
    text,
    colorButton,
    onClick
}) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const ripple = button.querySelector('.ripple');

        if (ripple) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            (ripple as HTMLElement).style.left = `${x}px`;
            (ripple as HTMLElement).style.top = `${y}px`;
            ripple.classList.remove('active');
            ripple.classList.add('active');
        }

        onClick?.();
    };

    return (
        <button
            className={colorButton ? `instagram-button` : 'instagram-button instagram-button--white'}
            onClick={handleClick}
        >
            <div className="ripple"></div>
            {showIcon && <FaInstagram className='icon' />}
            <span className='text-button'>{text}</span>
        </button>
    );
};