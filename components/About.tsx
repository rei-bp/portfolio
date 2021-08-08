import Image from 'next/image'
import Rei from '../public/rei.png'

export default function About (): any {


    return (
        <div className='about'>
            <div className='title'>About Me</div>
            <div className='container'>
                <div className='description'>
                    <p className='content'>Hello! I go by Rei for short and my pronouns are he/him. My passion for coding started with the pc enthusiast in me and naturally became curious about the software side of things. One thing lead to another and now I'm hooked on finding programming solutions and creating awesome stuff for the web.</p>
                </div>
                <Image className='rei' src={Rei} width='150px' height='150px' placeholder='blur' blurDataURL='rei.png'/>
            </div>
            <style jsx>{`
            @keyframes fadeIn {
                0% {opacity: 0;}
                100% {opacity: 1;}
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
                flex-flow: row wrap;
                margin: 0 auto;
                animation: fadeIn 2s;
            }

            .title {
                font-weight: bold;
                font-size: 2rem;
                width: 80%;
                margin: 0 auto;
                text-align: center;
            }

            .description {
                width: 65%;
                margin: auto 15px auto 0;
            }

            .rei {
                padding-left: 15px;
                max-width: 150px;
                max-height: 150px;
            }
            

         `}</style>
        </div>
    )
}