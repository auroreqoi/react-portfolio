import './index.scss'
import LogoA from '../../../assets/images/logo-aurore2.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.timeline()
    .to(bgRef.current , {
      duration: 1,
      opacity: 1,
    }).from(outlineLogoRef.current, {
      drawSVG: 0,
      duration: 20,
    })

    gsap.fromTo(
      solidLogoRef.current, {
        opacity: 0,
      }, {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className='logo-container' ref={bgRef}>
      <img ref={solidLogoRef} className='solid-logo' src={LogoA} alt="S" />
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="559.000000pt" height="897.000000pt" viewBox="0 0 559.000000 897.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,897.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
        </g>
      </svg>
    </div>
  )
}

export default Logo
