import Image from "next/image"
const About = (props: any): any => {


    return (
        <div className='about'>
            <div className={props.scroll} >About Me</div>
            <div className='container'>
                <div className='description'>
                    <p className='content'>Hello! My full name is <span className='me'>Reinard Pagdilao or Rei</span> for short and my pronouns are he/him. My <span className='me'>passion for coding</span> started with the pc enthusiast in me and naturally became curious about the software side of things. One thing lead to another and now I'm hooked on <span className='me goal'>finding programming solutions</span> and <span className='me goal'>creating awesome stuff for the web.</span></p>
                </div>
                <Image className='rei' src='/rei.png' alt='rei' width='170vh' height='170vh' />
            </div>
            <style jsx>{`
            @keyframes fadeIn {
                0% {opacity: 0;}
                100% {opacity: 1;}
            }

            .me {
                font-weight: bold;
                color: rgba(255, 211, 15);
            }

            .goal {
                color: white;
            }

            .about {
                width: 60%;
                margin: 0 auto;
            }

            .container {
                width: 80%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                margin: 0 auto;
                animation: fadeIn 2s;
            }

            .title {
                transition-duration: .5s;
                font-size: 3rem;
                width: 80%;
                margin: 0 auto 3rem auto;
                text-align: center;
            }

            .scrollTitle {
                transition-duration: 2s;
                color: rgba(255, 211, 15);
            }

            .description {
                width: 70%;
                margin: auto 10px auto 0;
            }

            .rei {
                padding-left: 15px;
                max-width: 150px;
                max-height: 150px;
            }

            @media screen and (max-width: 640px) {
                .about {
                    width: 100%;
                    padding: 0 1rem;
                }

                .container {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .description {
                    width: 100%;
                    margin: 0 auto;
                }                
            }
            

         `}</style>
        </div>
    )
}

export default About