import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useRef, useState, useEffect } from 'react'


export default function Home() {

  //state
  const [one, setOne] = useState<string>('base one')
  const [two, setTwo] = useState<string>('base two')
  const [three, setThree] = useState<string>('base three')
  const [bg, setBg] = useState<string>('background bg')

  const [scrollAbout,setScrollAbout] = useState<string>('title')
  const [scrollSkills,setScrollSkills] = useState<string>('title')
  const [scrollProjects,setScrollProjects] = useState<string>('title')

  const [aboutNav,setAboutNav] = useState<string>('navButton')
  const [skillsNav,setSkillsNav] = useState<string>('navButton')
  const [projectsNav,setProjectsNav] = useState<string>('navButton')
  const [contactNav,setContactNav] = useState<string>('navButton')


  
  
  //ref
  const aboutRef : any = useRef<HTMLElement | null>(null)
  const aboutNavRef: any =useRef<HTMLDivElement | null>(null)

  const skillsRef: any = useRef<HTMLDivElement | null>(null)
  const skillsNavRef: any = useRef<HTMLDivElement | null>(null)

  const projectsRef: any = useRef<HTMLDivElement | null>(null)
  const projectsNavRef: any = useRef<HTMLDivElement | null>(null)

  const contactRef: any = useRef<HTMLDivElement | null>(null)
  const contactNavRef: any = useRef<HTMLDivElement | null>(null)
  
  const footerRef: any = useRef<HTMLDivElement | null>(null)
  

  useEffect(() => {
    const node = aboutRef.current
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  },[])


  //background animation functions
  function landingTheme(): void {
    setOne('base one')
    setTwo('base two')
    setThree('base three')
    setBg('background bg')
  }


  function aboutTheme(): void {
    setOne('base aboutOne')
    setTwo('base aboutTwo')
    setThree('base aboutThree')
    setBg('background aboutBg')
    setAboutNav('navButton highlight')
    setSkillsNav('navButton')
    setProjectsNav('navButton')
    setContactNav('navButton')
    setScrollAbout('title scrollTitle')
    setScrollSkills('title')
    setScrollProjects('title')
  }

  function skillsTheme(): void {
    setOne('base skillsOne')
    setTwo('base skillsTwo')
    setThree('base skillsThree')
    setBg('background skillsBg')
    setAboutNav('navButton')
    setSkillsNav('navButton highlight')
    setProjectsNav('navButton')
    setContactNav('navButton')
    setScrollAbout('title')
    setScrollSkills('title scrollTitle')
    setScrollProjects('title')
  }

  function projectsTheme(): void {
    setOne('base projectsOne')
    setTwo('base projectsTwo')
    setThree('base projectsThree')
    setBg('background projectsBg')
    setAboutNav('navButton')
    setSkillsNav('navButton')
    setProjectsNav('navButton highlight')
    setContactNav('navButton')
    setScrollAbout('title')
    setScrollSkills('title')
    setScrollProjects('title scrollTitle')
  }

  function contactTheme(): void {
    setOne('base contactOne')
    setTwo('base contactTwo')
    setThree('base contactThree')
    setBg('background contactBg')
    setAboutNav('navButton')
    setSkillsNav('navButton')
    setProjectsNav('navButton')
    setContactNav('navButton highlight')
  }


  //nav highlight animation functions
  function noHighlight(): void {
    setAboutNav('navButton')
    setSkillsNav('navButton')
    setProjectsNav('navButton')
    setContactNav('navButton')
  }


  const onScroll = () => {
    if (window.scrollY > aboutRef.current.getBoundingClientRect().top && window.scrollY < aboutRef.current.offsetTop + aboutRef.current.clientHeight / 3) {
      aboutTheme()
    } else if (window.scrollY > skillsRef.current.getBoundingClientRect().top && window.scrollY <  skillsRef.current.offsetTop + skillsRef.current.clientHeight / 3) {
      skillsTheme()
    } else if (window.scrollY > projectsRef.current.getBoundingClientRect().top && window.scrollY < projectsRef.current.offsetTop + projectsRef.current.clientHeight / 1.5) {
      projectsTheme()
    } else if (window.scrollY > contactRef.current.getBoundingClientRect().top) {
      contactTheme()
    } else if (window.scrollY < aboutRef.current.getBoundingClientRect().top) {
      landingTheme()
      noHighlight()
    }
  }


  const aboutClick = (): void => {
    if(aboutRef.current){
        aboutRef.current.scrollIntoView({ 
           behavior: "smooth",
           block: "center"
      })
    }
  }

  const skillsClick = (): void => {
    if(skillsRef.current){
      skillsRef.current.scrollIntoView({ 
         behavior: "smooth",
         block: "center"
      })
    }
  }

  const projectsClick = (): void => {
    if(projectsRef.current){
      projectsRef.current.scrollIntoView({ 
         behavior: "smooth",
         block: "center"
      })
    }
  }

  const contactClick = (): void => { 
    if(contactRef.current){
      contactRef.current.scrollIntoView({ 
         behavior: "smooth",
         block: "center"
      })
    }
  }

  
  return (
    <div className="indexComponent">
      <Head>
        <title>Rei Pagdilao</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <button onClick={aboutClick} ref={aboutNavRef} className={aboutNav}>About</button>
        <button onClick={skillsClick} ref={skillsNavRef} className={skillsNav}>Skills</button>
        <button onClick={projectsClick} ref={projectsNavRef} className={projectsNav}>Projects</button>
        <button onClick={contactClick} ref={contactNavRef} className={contactNav}>Contact</button>
      </nav>
      <div className={bg}>
        <div id="one" className={one}></div>
        <div id="two" className={two}></div>
        <div id="three" className={three}></div>
      </div>

      <div className='index'>
        <div className="welcome">
          <Welcome />
        </div>
        <div ref={aboutRef} className="about">
          <About scroll={scrollAbout} /> 
        </div>
        <div ref={skillsRef} className="skills">
          <Skills scroll={scrollSkills}/>
        </div>
        <div ref={projectsRef} className="projects">
          <Projects scroll={scrollProjects} />
        </div>
        <div ref={contactRef} className="contact">
          <Contact />
        </div>
        <div ref={footerRef} className="footer">
          <Footer />
        </div>
      </div>
      <style jsx>{`

        .indexComponent {
            display: flex;
            flex-direction: column;
        }
        
        .index {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #ffffff;
        }

        .welcome {
          display: flex;
          align-items: center;
          min-height: 100vh;
          height: 100vh;
        }

        .about {
          display: flex;
          min-height: 50vh;
          height: 50vh;
          align-items: center;
        }

        .skills {
          display: flex;
          min-height: 70vh;
          height: 70vh;
          align-items: center;
        }

        .projects {
          display: flex;
          min-height: 150vh;
          height: 150vh;
          align-items: center;
        }

        .contact {
          display: flex;
          min-height: 100vh;
          height: 100vh;
          align-items: center;
        }

        nav {
            display: flex;
            position: fixed;
            z-index: 5;
            width: 100%;
            // background: #071b3a66;
            // height: 30px;
        }

        .highlight {
          transition-duration: .5s; 
          background: rgba(255, 255, 255, .3)
        }
        
        button {
          transition-duration: .3s;
          border: none;
          border-radius: 25px;
          background: rgb(0,0,0, 0.3);
          backdrop-filter: blur(5px);
          color: white;
          padding: 5px 10px;
          font-size: .75rem;
          margin: 3px 2.5px;
        }

        button:hover {
          transition-duration: .5s; 
          background: rgba(255, 211, 15, .6);
        }

 

        @keyframes fly {
          100% {
            transform:rotate(1turn) translate(100px) rotate(-1turn);
          }
        }
        
        @keyframes flyPlus {
          100% {
            transform:rotate(-1turn) translate(100px) rotate(1turn);
          }
        }

        .background {
          width: 100%;
          height: 100%;
          position: fixed;
          z-index: -1;
          transition-duration: 1s;
        }

        .bg {
          background: #071b3a;
        }

        .aboutBg {
          background: #3E5D58;
        }

        .skillsBg {
          background: #9E5758;
        }

        .projectsBg {
          background: #DF5E5E;
        }

        .contactBg {
          background: #6e304b;
        }

        .base {
          position: absolute;
          filter: blur(10vh);
          opacity: .8;
        }

        .one {
          border-radius: 100%;
          width: 80vh;
          height: 80vh;
          background-color: #373372;
          top:-20vh;
          left: 80vh;
          z-index: 3;
          animation: fly 10s linear infinite;
          transform:rotate(0) translate(5vh) rotate(0);
          transition-duration: 1s;
        }

        .aboutOne {
          border-radius: 100%;
          width: 80vh;
          height: 80vh;
          background-color: #474c4e;
          top:-20vh;
          left: 80vh;
          z-index: 3;
          animation: fly 10s linear infinite;
          transform:rotate(0) translate(80px) rotate(0);
          transition-duration: 1s;
        }

        .skillsOne {
          border-radius: 100%;
          width: 80vh;
          height: 80vh;
          background-color: #9E5758;
          top:-20vh;
          left: 80vh;
          z-index: 3;
          animation: fly 10s linear infinite;
          transform:rotate(0) translate(80px) rotate(0);
          transition-duration: 1s;
        }

        .projectsOne {
          border-radius: 100%;
          width: 80vh;
          height: 80vh;
          background-color: #492F10;
          top:-20vh;
          left: 80vh;
          z-index: 3;
          animation: fly 10s linear infinite;
          transform:rotate(0) translate(80px) rotate(0);
          transition-duration: 1s;
        }

        .contactOne {
          border-radius: 100%;
          width: 80vh;
          height: 80vh;
          background-color: #6e304b;
          top:-20vh;
          left: 80vh;
          z-index: 3;
          animation: fly 10s linear infinite;
          transform:rotate(0) translate(80px) rotate(0);
          transition-duration: 1s;
        }
        
        .two {
          border-radius: 70%;
          width: 80vh;
          height: 100vh;
          background-color: #7C336C;
          bottom:-30px;
          left:-80px;
          transition-duration: 1s;
          transform:rotate(0) translate(80px) rotate(0);
        }

        .aboutTwo {
          border-radius: 70%;
          width: 500px;
          height: 800px;
          background-color: #92ACA0;
          bottom:-30px;
          left:-80px;
          transition-duration: 1s;
          transform:rotate(0) translate(80px) rotate(0);
        }

        .skillsTwo {
          width: 500px;
          height: 800px;
          background-color: #183B5B;
          bottom:-30px;
          left:-80px;
          transition-duration: 1s;
          transform:rotate(0) translate(80px) rotate(0);
        }

        .projectsTwo {
          border-radius: 70%;
          width: 400px;
          height: 700px;
          background-color: #FDD2BF;
          bottom:-30px;
          left:-80px;
          transition-duration: 1s;
          transform:rotate(0) translate(80px) rotate(0);
        }

        .contactTwo {
          width: 500px;
          height: 800px;
          background-color: #a37c82;;
          bottom:-30px;
          left:-80px;
          transition-duration: 1s;
          transform:rotate(0) translate(80px) rotate(0);
        }
        
        .three {
          border-radius: 100%;
          width: 500px;
          height: 500px;
          bottom:10px;
          right:-50px;
          opacity: .4;
          background-color: #B3588A;
          animation: flyPlus 18s linear infinite;
          transform:rotate(0) translate(80px) rotate(0);
          transition-duration: 1s;
        }

        .aboutThree {
          border-radius: 100%;
          width: 500px;
          height: 500px;
          bottom:10px;
          right:-50px;
          opacity: .8;
          background-color: #55827b;
          animation: flyPlus 18s linear infinite;
          transform:rotate(0) translate(80px) rotate(0);
          transition-duration: 1s;
        }

        .skillsThree {
          border-radius: 100%;
          width: 500px;
          height: 500px;
          bottom:10px;
          right:-50px;
          opacity: .5;
          background-color: #2D99A5;
          animation: flyPlus 18s linear infinite;
          transform:rotate(0) translate(80px) rotate(0);
          transition-duration: 1s;
        }

        .projectsThree {
          border-radius: 100%;
          width: 500px;
          height: 500px;
          bottom:10px;
          right:-50px;
          opacity: .9;
          background-color: #DF5E5E;
          animation: flyPlus 18s linear infinite;
          transform:rotate(0) translate(80px) rotate(0);
          transition-duration: 1s;
        }

        .contactThree {
          border-radius: 100%;
          width: 500px;
          height: 500px;
          bottom:10px;
          right:-50px;
          opacity: .8;
          background-color: #b36f8c;
          animation: flyPlus 18s linear infinite;
          transform:rotate(0) translate(80px) rotate(0);
          transition-duration: 1s;
        }
      `}</style>
    </div>
  )
}
