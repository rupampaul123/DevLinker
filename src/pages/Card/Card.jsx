import ProfileCard from "../../components/ProfileCard"
import { useLocation } from "react-router-dom";

export default function Card(){

      const location = useLocation();
      const { name, github, linkedin, img, prof } = location.state || {};

    return(
        <>
        <ProfileCard
            name={name}
            title={prof}
            handle={github}
            handle1={linkedin}
            status="Online"
            contactText="Contact Me"
            avatarUrl= {img || "/images/Forms-bro.png"}
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
            />
        </>
    )
}