import { AiOutlineGithub } from 'react-icons/ai'
import Image from "next/image"

const Projects = (props: any): any => {
    return (
        <div className="projects">
            <div className={props.scroll}>Projects</div>
            <div className='card'>
                <div className='descriptionContainer'>
                    <a href='https://mypetjustate.herokuapp.com/home' className='techLink' target="_blank" rel="noopener noreferrer">
                        <div className='projectTitle'>
                            My Pet Just Ate
                        </div>
                    </a>
                    <a href='https://github.com/rei-bp/Viberant-server' className='techLink' target="_blank" rel="noopener noreferrer">
                        <div className='tech'>
                            MongoDB, Express, React, and Node (MERN) <AiOutlineGithub fontSize='1.5rem' />
                        </div>
                    </a>
                    <div className='description'>
                        Hackathon produced with a small team of devs and designers. A quick lookup app that identifies if a food is safe or not with integrated emergency contact
                    </div>
                </div>
                <div className='ssContainer'>
                    <a href='https://mypetjustate.herokuapp.com/home' target="_blank" rel="noopener noreferrer">
                        <Image className='magikarp' src='/mypetjustate.png' alt='my pet just ate screenshot' height='400vh' width='500vh' />
                    </a>
                </div>
            </div>
            <div className='card'>
                <div className='descriptionContainer'>
                    <a href='https://admiring-spence-c2dab0.netlify.app' className='techLink' target="_blank" rel="noopener noreferrer">
                        <div className='projectTitle'>
                            Viberant
                        </div>
                    </a>
                    <a href='https://github.com/rei-bp/Viberant-server' className='techLink' target="_blank" rel="noopener noreferrer">
                        <div className='tech'>
                            MongoDB, Express, React, and Node (MERN) <AiOutlineGithub fontSize='1.5rem' />
                        </div>
                    </a>
                    <div className='description'>
                        A social meetup app built from a collabathon with a team of devs and a team of designers. My main contribution was establishing the back-end and support the front-end devs.
                    </div>
                </div>
                <div className='ssContainer'>
                    <a href='https://admiring-spence-c2dab0.netlify.app' target="_blank" rel="noopener noreferrer">
                        <Image src='/viberant.png' alt='viberant screenshot' height='400vh' width='500vh' />
                    </a>
                </div>
            </div>
            <div className='card'>
                <div className='descriptionContainer'>
                    <a href='https://nba-bite.herokuapp.com' className='techLink' target="_blank" rel="noopener noreferrer">
                        <div className='projectTitle'>NBA Bite!</div>
                    </a>
                    <a href='https://github.com/rei-bp/Nba-bite' className='techLink' target="_blank" rel="noopener noreferrer">
                        <div className='tech'> Express, EJS, Postgres and TS conversion <AiOutlineGithub fontSize='1.5rem' />
                        </div>
                    </a>
                    <div className='description'>NBA statistics app with CRUD capabilities that looks up players and finds their average season stats using the balldontlie API.
                    </div>
                </div>
                <div className='ssContainer'>
                    <a href='https://nba-bite.herokuapp.com' target="_blank" rel="noopener noreferrer">
                        <Image src='/nbabite.png' alt='nba bite screen shot' height='400rem' width='500rem' />
                    </a>
                </div>
            </div>
            <div className='card'>
                <div className='descriptionContainer'>
                    <a href='https://rei-bp.github.io/Magikarp-pro-tourney' className='techLink' target="_blank" rel="noopener noreferrer">
                        <div className='projectTitle'>
                            Magikarp Pro Tourney
                        </div>
                    </a>
                    <a href='https://github.com/rei-bp/Magikarp-pro-tourney' className='techLink' target="_blank" rel="noopener noreferrer">
                        <div className='tech'>
                            HTML Canvas and JavaScript <AiOutlineGithub fontSize='1.5rem'  />
                        </div>
                    </a>
                    <div className='description'>A front-end web based game containing animation, movement, applications and basic OOP understanding. (Picture might take a bit of time to load)
                    </div>
                </div>
                <div className='ssContainer'>                
                    <a href='https://rei-bp.github.io/Magikarp-pro-tourney' target="_blank" rel="noopener noreferrer">
                        <Image className='magikarp' alt='magikarp pro tourney screenshot' src='/mtp.gif' height='400rem' width='500rem' placeholder='blur' blurDataURL='mtp.gif'/>
                    </a>
                </div>
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
                    flex-direction: column;
                    margin: 3vh auto 0 auto;
                }

                .title {
                    transition-duration: .5s;
                    font-size: 3rem;
                    font-weight: bold;
                    margin-bottom: 2rem;
                    text-align: center;
                }

                .scrollTitle {
                    transition-duration: 1s;
                    color: rgba(255, 211, 15);
                }

                .card {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    margin: 5vh 0;

                }

                .descriptionContainer {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 20rem;
                    max-width: 20rem;
                    padding: 0 20px;
                }


                .projectTitle {
                    text-align: center;
                    font-size: 2rem;
                    font-weight: bold;
                }

                .tech {
                    text-align: center;
                    margin-top: 25px;
                    margin-bottom: 25px;
                }

                .ssContainer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .magikarp {
                    border-radius: 25px;
                }

                @media screen and (max-width: 900px) {
                    .projects {
                        width: 100%;
                    }

                    .card {
                        flex-direction: column;
                    }

                    .descriptionContainer {
                        width: 100%;
                        max-width: 100%;
                        text-align: center;
                        margin-bottom: 1rem;
                    }

                    .projectTitle {
                        color: rgba(255, 211, 15);
                    }
                }
                    
            `}</style>
        </div>
    )
}

export default Projects