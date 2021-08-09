import { AiOutlineGithub } from 'react-icons/ai'

const Footer = ():any => {
    return (
        <div>
            <a href='https://github.com/rei-bp/portfolio' target="_blank" rel="noopener noreferrer">
                <div className='footer'>
                    designed and built by myself
                    <br></br>with vanilla CSS, Next.js, and TypeScript <AiOutlineGithub fontSize='.9rem' />
                </div>
            </a>
            <style jsx>{`
        .footer {
            transition-duration: .3s;
            text-align: center;
            font-size: .9rem;
            color: lightgrey;
        }

        .footer:hover {
            transition-duration: .5s;
            color: rgba(255, 211, 15);
        }
        a {
            text-decoration: none;
        }
        `}</style>
        </div>
    )
}

export default Footer