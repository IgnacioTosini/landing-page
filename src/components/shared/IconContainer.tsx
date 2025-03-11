import '../../styles/components/shared/_iconContainer.scss';

interface IconContainerProps {
    icon: React.ReactNode;
}

export const IconContainer: React.FC<IconContainerProps> = ({ icon }) => {
    return <div className="icon-container">{icon}</div>;
};