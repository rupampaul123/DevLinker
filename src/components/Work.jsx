import { useState } from "react"
import Useform from "../pages/Form/Useform";
import { useNavigate  } from "react-router-dom";
import Card from "../pages/Card/Card";

export default function Work(){

    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [github, setGithub] = useState("")
    const [img, setImg] = useState("");
    const [prof, setprof] = useState("")



    const handleSubmit = (e) => {
  e.preventDefault();
  const file = e.target.image.files[0];
  
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result;
      setImg(base64Image);
      navigate("/Card", {
        state: {
          name,
          linkedin,
          github,
          prof,
          img: base64Image, // use local var, not stale state
        },
      });
    };
    reader.readAsDataURL(file);
  } else {
    navigate("/Card", {
      state: {
        name,
        linkedin,
        github,
        prof,
        img: "", // no image
      },
    });
  }
};


    return(
        <>
        <Useform 
            name={name} 
            linkedin={linkedin} 
            github={github} 
            img = {img}
            prof = {prof}
            setName={setName}          
            setlinkedin={setLinkedin}    
            setgithub={setGithub}      
            handlesubmit={handleSubmit} 
            setimg={setImg}
            setprof={setprof}
        />
        </>
    )
}