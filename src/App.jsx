import logo from "./assets/gartcod.webp";
import background from "./assets/background.svg"
import './App.css'
import { useState , useEffect} from "react";
import { Clock } from "./Clock";

function App() {
  const images = [
    {
      src: 'https://gartcod.cloud/_next/static/media/chrome.db58996d.svg',
      initialOpacity: 1,
      initialTranslate: 2,
    },
    {
      src: 'https://gartcod.cloud/_next/static/media/mobile.548cdf6e.svg',
      initialOpacity: 1,
      initialTranslate: 2,
    },
    {
      src: 'https://gartcod.cloud/_next/static/media/desktop.6a735a94.svg',
      initialOpacity: 1,
      initialTranslate: 2,
    },
  ];
  const colors = ["-yellow-300", "-red-300", "-neutral-300"];
  
  const [textColor, setTextColor] = useState(colors[0]);
  const [currIndex, setCurrIndex] = useState(0);
  const [imageStyle, setImageStyle] = useState(images[0]);

  useEffect(() => {

    const handleTranslation = () => {
      const claimButton = document.querySelector('.claim-btn');
      claimButton.style.transition = 'transform 700ms ease-in-out 0s';
      claimButton.style.transform = 'translateY(150px)';
    };
    setTimeout(handleTranslation, 1500);


    const updateInterval = setInterval(() => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % colors.length);
  
      setTextColor(colors[currIndex]);
  
      setImageStyle(images[currIndex]);
    }, 2000);

  
    return () => {
      clearInterval(updateInterval);
    };
  }, [colors, currIndex]);



  return (
    <>
    <div className= {`fixed inset-0 transition-color delay-100 duration-700 opacity-25
      ${(textColor === "-yellow-300") ? "bg-yellow-300" : (textColor === "-red-300" ? "bg-red-300" : "bg-neutral-300")}
    `}></div>

      <div className="fixed inset-0 opacity-30" style={{backgroundSize:"30px", backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8997f779f33b430bb22ca667d1b73ade')"}}>
      </div>
      <img src={background} width="1200" height="1200" data-nimg="1" className="fixed inset-0 w-screen h-screen object-cover" style={{color:"transparent"}} alt="" />
      <div className="bg-black fixed inset-0 transition-opacity duration-1000 opacity-[0.7]"></div>


      <div className="max-w-7xl mt-20 mx-auto">
        <div className="flex flex-col items-center relative">
          <h1 className="text-7xl text-center max-w-3xl mb-12 font text-white leading-snug">
            <img src={logo} alt="" width="100" height="100" className="inline-block mr-8 -mt-2 " style={{color: "transparent"}}/>
            {"for "}
            <div className="mx-2 -mt-2 align-middle inline-flex relative h-[80px] w-[80px]">
            
              <img
                alt="Widget icon"
                width="80"
                height="80"
                className={`w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300`}
                style={{ color: "transparent", opacity: `${imageStyle.opacity}`, transform: `translateY(-${imageStyle.translate}rem)` }}
                src={imageStyle.src}
              />

          </div>
          <span className={`transition-colors duration-200 ${(textColor === "-yellow-300" ? "text-yellow-300" : (textColor === "-red-300") ? "text-red-300" : "text-neutral-300")}`} > & Cloud gaming</span>
          </h1>
          <p className="mb-8">
            <span className="text-gray-300">
              Join us on the launch of gartcod by 
            </span>
            <img alt="Provoke Developers" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" className="inline-block ml-1 -mt-1" style={{color:"transparent"}} src="https://gartcod.cloud/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprovoke_logo.d9109ac6.png&amp;w=128&amp;q=75" />
          </p>
          <div className="mb-8">
            <button className={`claim-btn text-black px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200 
              ${(textColor === "-yellow-300") ? "bg-yellow-300" : (textColor === "-red-300" ? "bg-red-300" : "bg-neutral-300")}
            `}
            >
              Claim Ticket
            </button>
          </div>
          <Clock textColor={textColor}/>
          
        </div>
        <img
        src="https://gartcod.cloud/_next/static/media/designer.cf165e6f.svg"
        width={80}
        height={50}
        alt="cursor"
        className="cursor duration-700 absolute transition-all ease-in-out z-50 your-image-class-name"
        style={{ color: "transparent", top: "-10%", left: "-10%", transformOrigin: "top left", animation: "moveImage 3s ease-in-out forwards" }}
      />
      </div>
    </>
  )
}

export default App
