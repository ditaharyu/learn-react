// import { useMemo } from "React"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import React from "react"

const App = React.lazy(() => import('../App'))
const Menu = React.lazy(() => import('../views/Menu'))

export const menuOptions = [
    {
        text: "Home",
        icon: <HomeIcon />,
        path: "/",
        element: <App />,
    },
    {
        text: "About",
        icon: <InfoIcon />,
        path: "/",
        element: <App />,

    },
    {
        text: "Menu",
        icon: <InfoIcon />,
        path: "/menu",
        element: <Menu />,

    },
    {
        text: "Testimonial",
        icon: <CommentRoundedIcon />,
        path: "/",
        element: <App />,
    },
    {
        text: "Contact",
        icon: <PhoneRoundedIcon />,
        path: "/",
        element: <App />,
    },
    {
        text: "Cart",
        icon: <ShoppingCartRoundedIcon />,
        path: "/",
        element: <App />,
    },
]