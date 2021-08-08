export default function Contact (): any {
    return (
        <div className="contact">
            <div className='title'>Say Hello!</div>
            <p>I am currently looking for opportunities! If you have any questions at all or if you would just like to say hello I'd be more than happy to hear from you.</p>
            <div>
                <a href='mailto:reinard.bp@gmail.com'><button className='git'>Get in Touch</button></a>
                <a href='Reinard-Pagdilao-Resume.docx' download><button>Resume</button></a>
            </div>
            <style jsx>{`
                .contact {
                    width: 80%;
                    margin: 0 auto;
                    text-align: center;
                }

                p {
                    width: 80%;
                    margin: 0 auto;
                }

                .title {
                    font-size: 2rem;
                }

                button {
                    border: 1.5px solid white;
                    border-radius: 25px;
                    background: none;
                    color: white;
                    padding: 5px 10px;
                }

                .git {
                    margin-right: 5px;
                }

                button:hover {
                    transition-duration: .5s; 
                    background: rgba(255, 255, 255, 0.25);
                }
            `}</style>
        </div>
    )
}