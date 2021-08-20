import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { useRef, useEffect } from 'react'



const Contact = () : any => {

    const nameRef: any = useRef(null)

    const copyAgain = (): void => {
        nameRef.current.title='click to copy!'
    }

    const copy = (): void => {
        navigator.clipboard.writeText(nameRef.current.innerText)
        nameRef.current.title = 'Copied!'
        setTimeout(function(){nameRef.current.title='click to copy!'} , 5000)
    }

    return (
        <div className="contact">
            <div className='title'>Say hello at <button title='click to copy!' className='me' onClick={copy} ref={nameRef}>reinard.bp@gmail.com</button></div>
            <div className='description'>I am currently open to opportunities! If you have any questions at all or if you would just like to say hello I'd be more than happy to hear from you.</div>
            <div className='resume'>
                <a href='Reinard-Pagdilao-Resume.pdf'><button>Resume</button></a>
            </div>
            <div className='socials'>
                <a href='https://www.linkedin.com/in/reibp' className='icon' target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin fontSize='1.5rem' className='icon' /></a>
                <a href='https://github.com/rei-bp' className='icon' target="_blank" rel="noopener noreferrer"><AiOutlineGithub fontSize='1.5rem'  /></a>
            </div>
            <style jsx>{`

                .me {
                    background: none;
                    border: none;
                    font-size: 2.5rem;
                    transition-duration: .4s;
                    font-weight: bold;
                    color: rgba(255, 211, 15);
                    text-shadow: 2px 2px 4px #000000ad;
                }

                .me:hover {
                    transition-duration: 1s;
                    text-shadow: -10px 10px 20px #000000;
                    background: none;
                    cursor: pointer;
                }

                .me:active {
                    transition-duration .1s;
                    color: #fff;
                }

                a {
                    color: lightgrey;
                }

                .contact {
                    width: 80%;
                    margin: 0 auto;
                    text-align: center;
                }
                
                .description {
                    width: 70%;
                    margin: -10px auto 15px auto;
                    padding-bottom: 0;
                }
                
                .title {
                    font-size: 2.5rem;
                }
                
                .email {
                    margin: 10px auto 15px auto;
                    font-weight: bold;
                }
                
                
                button {
                    transition-duration: .3s;
                    align-items: center;
                    border: none;
                    border-radius: 25px;
                    background: rgb(0,0,0, 0.3);
                    color: white;
                    padding: 5px 10px;
                    font-size: .9rem;
                }
                
                button:hover {
                    transition-duration: .5s; 
                    background: rgba(255, 211, 15, .6);
                }
                
                .git {
                    margin-right: 5px;
                }
                
                .socials {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    margin-top: 15px;
                }
                
                .icon {
                    margin:0 5px;
                }

                .icon:hover {
                    transition-duration: .5s;
                    color: rgba(255, 211, 15);
                }

                @media screen and (max-width: 900px) {
                    .contact {
                        width: 100%;
                    }

                    .description {
                        width: 100%;
                    }
                }
                
                `}</style>
        </div>
    )
}

export default Contact