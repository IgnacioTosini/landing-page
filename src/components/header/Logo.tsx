import { useState, useEffect } from 'react';
import { createInstagramService } from '../../services/instagramService';
import '../../styles/components/header/_logo.scss';

const instagramService = createInstagramService(import.meta.env.VITE_IG_TOKEN);

export default function Logo() {
    const [profilePictureUrl, setProfilePictureUrl] = useState<string>('');

    useEffect(() => {
        const fetchProfilePicture = async () => {
            const url = await instagramService.getProfilePicture();
            setProfilePictureUrl(url);
        };

        fetchProfilePicture();
    }, []);

    return (
        <div className="containerLogo">
            <img src={profilePictureUrl || '/logoSoHumDesing.png'} alt="Logo de Eterna" />
        </div>
    );
}