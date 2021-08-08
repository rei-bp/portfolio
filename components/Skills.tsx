export default function Skills(): any {
    return (
        <div id="skills">
            <div className='title'>Skills</div>
            <div className='stack'>
                <div className='key'>Languages</div>
                <div className='tech'>
                    <ul className='techList'>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </div>
            <div className='stack'>
                <div className='key'>Libraries & Frameworks</div>
                <div className='tech'>
                    <ul className='techList'>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Express</li>
                        <li>Node</li>
                        <li>EJS</li>
                        <li>Tailwind CSS</li>
                        <li>BootStrap</li>
                    </ul>
                </div>
            </div>
            <div className='stack'>
                <div className='key'>Databases</div>
                <div className='tech'>
                    <ul className='techList'>
                        <li>MongoDB/Mongoose</li>
                        <li>PostgresSQL/Sequelize</li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .skills {
                    width: 80%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    align-content; center;
                    flex-flow: row wrap;
                    margin: 0 auto;
                }

                .title {
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    text-align: center;
                }

                .stack {
                    display: flex;
                    flex-flow: row wrap;
                }

                .key {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-content: center;
                    text-align: center;
                    width: 30%;
                    font-weight: bold;
                    font-size: 1.1rem;
                    border-right: 2px solid white;

                }
                
                .tech {
                    margin-left: -10px;
                }

                .techList li {
                    display: inline;
                    margin-right: 15px;
                }


                

            `}</style>
        </div>
    )
}