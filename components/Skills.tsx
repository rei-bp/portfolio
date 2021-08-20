
const Skills = (props: any): any => {

    return (
        <div className="skills">
            <div className={props.scroll}>Skills</div>
            <div  className='stack'>
                <div className='key'>Languages</div>
                <div className='tech'>
                    <ul className='techList'>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Python</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                    </ul>
                </div>
            </div>
            <div className='stack'>
                <div className='key'>Libraries & Frameworks</div>
                <div className='tech'>
                    <ul className='techList'>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
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
                        <li>PostgreSQL/Sequelize</li>
                    </ul>
                </div>
            </div>
            <style jsx>{`

                .title {
                    transition-duration: .5s;
                    font-size: 3rem;
                    font-weight: bold;
                    margin-bottom: 3rem;
                    text-align: center;
                }

                .scrollTitle {
                    transition-duration: 1s;
                    color: rgba(255, 211, 15);
                }

                .stack {
                    transition-duration: .5s;
                    display: flex;
                    flow-direction: row;
                    height: 8vh;
                }

                .stack:hover>* {
                    transition-duration: .5s;
                    color: rgba(255, 211, 15);
                    border-color: rgba(255, 211, 15);
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
                    width: 75%;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    align-content: center;
                    justify-content: center;
                    margin:0 0 0 -10px;
                    height: 8vh;
                }

                .techList {
                    display : flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .techList li {
                    display: inline;
                    margin-right: 15px;
                }

                @media screen and (max-width: 900px) {

                    .stack {
                        padding: auto 1rem;
                    }

                    .key {
                        color: rgba(255, 211, 15);
                    }
                }


            `}</style>
        </div>
    )
}

export default Skills