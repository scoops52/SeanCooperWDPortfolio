import { FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { SiJavascript, SiRedux, SiReactrouter, SiStorybook, SiStyledcomponents, SiNextdotjs } from "react-icons/si";
import { images } from "../../constants";

const projects = [
    {
        name: 'Watchr App',
        img: images.Watchr,
        description: 'An App that takes out the indecision of deciding on something to watch with your partner. Movies are drawn from The Movie Database API',
        icons: [
            {
                icon: <FaHtml5 />,
                label: 'HTML5',
            },
            {
                icon: <FaSass />,
                label: 'SASS',
            },
            {
                icon: <SiJavascript />,
                label: 'JavaScript (ES6)',
            },
            {
                icon: <FaReact />,
                label: 'React JS',
            },
            {
                icon: <SiRedux />,
                label: 'Redux/Redux Toolkit'
            },
        ],
        link: 'https://boisterous-nasturtium-93deed.netlify.app/',
        gitHub: 'https://github.com/scoops52/Watchr',
    },
    {
        name: 'Lizzy Meg Professional Dancer Website',
        img: images.Liz,
        description: 'A mobile-friendly, eye-catching website for a client. With a responsive inquiry form and photo gallery',
        icons: [
            {
                icon: <FaHtml5 />,
                label: 'HTML5',
            },
            {
                icon: <FaSass />,
                label: 'SASS',
            },
            {
                icon: <SiJavascript />,
                label: 'JavaScript (ES6)',
            },
            {
                icon: <FaReact />,
                label: 'React JS',
            },
            {
                icon: <SiReactrouter />,
                label: 'React Router'
            },
        ],
        link: 'https://lizzymeg.com',
        gitHub: 'https://github.com/scoops52/LizzyMeg',
    },
    {
        name: 'Sean Cooper Web Developer Website',
        img: images.SeanWebsite,
        description: 'A site made to showcase my own Front-End web development skills. With many different design features.',
        icons: [
            {
                icon: <FaHtml5 />,
                label: 'HTML5',
            },
            {
                icon: <FaSass />,
                label: 'SASS',
            },
            {
                icon: <SiJavascript />,
                label: 'JavaScript (ES6)',
            },
            {
                icon: <FaReact />,
                label: 'React JS',
            },
            {
                icon: <SiReactrouter />,
                label: 'React Router'
            },
        ],
        link: 'https://seancooperwebdev.netlify.app/',
        gitHub: 'https://github.com/scoops52/SeanCooperWDPortfolio',
    },
    {
        name: 'Ecommerce Component Library',
        img: images.GatherComponentLibrary,
        description: 'A component library used to build and style components to be used in Ecommerce sight. Components are documented in Storybook.',
        icons: 
            [
                {
                    icon: <SiStorybook/>,
                    label: 'Storybook',
                },
                {
                    icon: <SiStyledcomponents />,
                    label: 'Styled Components',
                },
                {
                    icon: <SiJavascript />,
                    label: 'JavaScript (ES6)',
                },
                {
                    icon: <FaReact />,
                    label: 'React JS',
                },
                {
                    icon: <SiNextdotjs />,
                    label: 'Next JS'
                },
            ],
        link: 'https://github.com/scoops52/Gather-Component-Library',
        gitHub: 'https://github.com/scoops52/Gather-Component-Library',
    },
    {
        name: 'Gather Ecommerce Site',
        img: images.Gather,
        description: 'A functioning Ecommerce site with updating cart and product data, styled using designs from Figma files',
        icons: 
            [
                {
                    icon: <SiJavascript />,
                    label: 'JavaScript (ES6)',
                },
                {
                    icon: <FaReact />,
                    label: 'React JS',
                },
                {
                    icon: <SiRedux />,
                    label: 'Redux/Redux Toolkit'
                },
                {
                    icon: <SiStyledcomponents />,
                    label: 'Styled Components',
                },
                {
                    icon: <SiNextdotjs />,
                    label: 'Next JS'
                },
            ],
        link: 'https://github.com/scoops52/Gather-Ecommerce-Site',
        gitHub: 'https://github.com/scoops52/Gather-Ecommerce-Site',
    }
]

export default projects