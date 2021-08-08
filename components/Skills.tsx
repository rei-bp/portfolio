



export default function Skills(): any {

    return (
        <div className="skills">
            <div className='title'>Skills</div>
            <div  className='stack'>
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

                .title {
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 3rem;
                    text-align: center;
                }

                .stack {
                    display: flex;
                    flow-direction: row;
                    height: 8vh;
                }

                .stack:hover {
                    transition-duration: .5s;
                    color: #ffbf0f;
                    border: #ffbf0f;
                }



                .key {
                    width: 25%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-content: center;
                    text-align: center;
                    font-weight: bold;
                    font-size: 1.1rem;
                    border-right: 2px solid white;


                }

                
                .tech {
                    display: flex;
                    align-items: center;
                    align-content: center;
                    justify-content: center;
                    margin:0 0 0 -10px;
                    height: 8vh;
                }

                .techList li {
                    display: inline;
                    margin-right: 15px;
                }


                

            `}</style>
        </div>
    )
}