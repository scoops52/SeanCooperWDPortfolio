import { FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb"
import { SiJavascript, SiRedux, SiReactrouter, SiStorybook, SiStyledcomponents, SiNextdotjs, SiTailwindcss, SiTypescript, SiExpo } from "react-icons/si";
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
        gitHub: 'https://github.com/scoops52/LizzyMeg3.0',
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
    },
    {
        name: 'Taskr App',
        img: images.Taskr,
        description: 'A productivity web app that I personally use in my day to day. It tracks time spent on tasks, helping you set aside enough time to make progress on whatever you need to work on. Currently in alpha testing with users.',
        icons: [
            {
                icon: <SiTypescript />,
                label: 'TypeScript',
            },
            {
                icon: <SiTailwindcss />,
                label: 'Tailwind CSS',
            },
            {
                icon: <SiNextdotjs />,
                label: 'NextJS',
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
        link: 'https://taskr-nine.vercel.app/',
        gitHub: 'https://github.com/scoops52/Taskr',
    },
    {
        name: 'Taskr Mobile App',
        img: images.TaskrMobile,
        description: 'A productivity mobile app created in React Native that I personally use in my day to day. It tracks time spent on tasks, helping you set aside enough time to make progress on whatever you need to work on. Currently in alpha testing with users.',
        icons: [
            {
                icon: <SiTypescript />,
                label: 'TypeScript',
            },
            {
                icon: <TbBrandReactNative />,
                label: 'React Native',
            },
            {
                icon: <SiExpo />,
                label: 'Expo',
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
        link: 'https://expo.dev/accounts/scoops52/projects/taskr-mobile/updates/54731cad-0a91-4ef3-a0e6-d5b5561da894',
        gitHub: 'https://github.com/scoops52/taskr-mobile',
    },
]

export default projects