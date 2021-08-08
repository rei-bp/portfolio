import Image from "next/image"
import Viberant from '../public/viberant.png'
import NBAbite from '../public/nbabite.png'
import Magikarp from '../public/mtp.gif'

export default function Projects(): any {
    return (
        <div className="projects">
            <div className="title">Projects</div>
            <div className='card'>
                <div className='descriptionContainer'>
                    <div className='projectTitle'>Viberant</div>
                    <div className='tech'>Built with MERN</div>
                    <div className='description'>A social meetup app built from a collabathon with a team of devs and a team of designers. My main contribution was establishing the back-end and support the front-end devs.</div>
                </div>
                <Image className='viberant' src={Viberant} height='250vh' width='300vh' placeholder='blur' blurDataURL='viberant.png'></Image>
            </div>
            <div className='card'>
                <Image className='viberant' src={NBAbite} height='250vh' width='320vh' placeholder='blur' blurDataURL='nbabite.png'></Image>
                <div className='descriptionContainer'>
                    <div className='projectTitle'>NBA-bite</div>
                    <div className='tech'>Built with Express, EJS, and Postgres</div>
                    <div className='description'>NBA statistics app with CRUD capabilities that looks up players and finds their average season stats using the balldontlie API.</div>
                </div>
            </div>
            <div className='card'>
                <div className='descriptionContainer'>
                    <div className='projectTitle'>Magikarp Pro Tourney</div>
                    <div className='tech'>Built with HTML Canvas and JavaScript</div>
                    <div className='description'>A front-end web based game containing animation, movement, applications and basic OOP understanding.</div>
                </div>                
                <Image className='magikarp' src={Magikarp} height='250vh' width='300vh' placeholder='blur' blurDataURL='mtp.gif'></Image>
            </div>
            <style jsx global>{`
                .projects {
                    width: 80%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    align-content; center;
                    flex-flow: column wrap;
                    margin: 5vh auto 0 auto;
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