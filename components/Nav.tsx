import styles from '../styles/Home.module.css'

export default function Nav (): any {
    return (
        <nav>
            <div className="navButton">
                <a href="#about">About</a>
            </div>
            <div className="navButton">
                <a href="#skills">Skills</a>
            </div>
            <div className="navButton">
                <a href="#projects">Projects</a>
            </div>
            <div className="navButton">
                <a href="#contact">Contact</a>
            </div>
            <style jsx>{`
                nav {
                    display: flex;
                    position: fixed;
                    color: #36eca7;
                }
                    
                .navButton {
                    margin-left: 5px;
                }
            `}</style>
        </nav>
    )   
}