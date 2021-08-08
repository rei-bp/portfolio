import { AiOutlineGithub } from 'react-icons/ai'
import Image from "next/image"

const Projects = (): any => {
    return (
        <div className="projects">
            <div className="title">Projects</div>
            <div className='card'>
                <div className='descriptionContainer'>
                <a href='https://admiring-spence-c2dab0.netlify.app' className='techLink' target="_blank" rel="noopener noreferrer"><div className='projectTitle'>Viberant</div></a>
                    <a href='https://github.com/rei-bp/Viberant-server' className='techLink' target="_blank" rel="noopener noreferrer"><div className='tech'>MERN <AiOutlineGithub fontSize='1.5rem' /></div></a>
                    <div className='description'>A social meetup app built from a collabathon with a team of devs and a team of designers. My main contribution was establishing the back-end and support the front-end devs.</div>
                </div>
                <a href='https://admiring-spence-c2dab0.netlify.app' target="_blank" rel="noopener noreferrer"><Image src='/viberant.png' alt='viberant screenshot' height='250vh' width='300vh' /></a>
            </div>
            <div className='card'>
            <a href='https://nba-bite.herokuapp.com' target="_blank" rel="noopener noreferrer"><Image src='/nbabite.png' alt='nba bite screen shot' height='250vh' width='320vh' /></a>
                <div className='descriptionContainer'>
                <a href='https://nba-bite.herokuapp.com' className='techLink' target="_blank" rel="noopener noreferrer"><div className='projectTitle'>NBA Bite!</div></a>
                    <a href='https://github.com/rei-bp/Nba-bite' className='techLink' target="_blank" rel="noopener noreferrer"><div className='tech'> Express, EJS, Postgres and TS conversion <AiOutlineGithub fontSize='1.5rem'  /></div></a>
                    <div className='description'>NBA statistics app with CRUD capabilities that looks up players and finds their average season stats using the balldontlie API.</div>
                </div>
            </div>
            <div className='card'>
                <div className='descriptionContainer'>
                <a href='https://rei-bp.github.io/Magikarp-pro-tourney' className='techLink' target="_blank" rel="noopener noreferrer"><div className='projectTitle'>Magikarp Pro Tourney</div></a>
                    <a href='https://github.com/rei-bp/Magikarp-pro-tourney' className='techLink' target="_blank" rel="noopener noreferrer"><div className='tech'>HTML Canvas and JavaScript <AiOutlineGithub fontSize='1.5rem'  /></div></a>
                    <div className='description'>A front-end web based game containing animation, movement, applications and basic OOP understanding.</div>
                </div>                
                <a href='https://rei-bp.github.io/Magikarp-pro-tourney' target="_blank" rel="noopener noreferrer"><Image className='magikarp' alt='magikarp pro tourney screenshot' src='/mtp.gif' height='250vh' width='300vh' /></a>
            </div>
            <style jsx global>{`

                .techLink {
                    transition-duration: .3s;
                    color: white;
                    font-weight: bold;
                    text-decoration: none;
                }

                .techLink:hover {
                    transition-duration: .5s;
                    color: rgba(255, 211, 15);
                }


                .projects {
                    width: 80%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    align-content; center;
                    flex-flow: column wrap;
                    margin: 3vh auto 0 auto;
                }

                .title {
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 2rem;
                    text-align: center;
                }

                .card {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    margin: 5vh 0;

                }

                .descriptionContainer {

                    display: flex;
                    flex-flow: column wrap;
                    justify-content: center;
                    width: 30%;
                    max-width: 30%;
                    padding: 0 20px;
                }


                .projectTitle {
                    text-align: center;
                    font-size: 1.2rem;
                    font-weight: bold;
                }

                .tech {
                    text-align: center;
                    margin-top: 25px;
                    margin-bottom: 25px;
                }

                .description {
                }

                .magikarp {
                    border-radius: 15px;
                }
                    
            `}</style>
        </div>
    )
}

export default Projects