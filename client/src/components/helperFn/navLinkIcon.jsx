import {FaFacebook, FaTwitter, FaGithub, FaBars} from 'react-icons/fa';

function NavLinkIcon({iconType}) {
    const iconHandler = () => {
        switch(iconType) {
            case 'facebook':
                return  <FaFacebook />;
            case 'twitter':
                return <FaTwitter />;
            case 'github':
                return <FaGithub />;
            case 'bars':
                return <FaBars />;
            default:
                return;
        }
    }

    const icon = iconHandler();
  return (
    <div>{icon}</div>
  )
}

export {NavLinkIcon}