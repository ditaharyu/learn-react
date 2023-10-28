import React, { useState } from "react"
import Logo from "../Assets/Logo.svg"
import { BsCart2 } from "react-icons/bs"
import { HiOutlineBars3 } from "react-icons/hi2"
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
// import HomeIcon from "@mui/icons-material/Home"
// import InfoIcon from "@mui/icons-material/Info"
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
// import { Phone, WidthFull } from "@mui/icons-material"
import { menuOptions } from "../controller/index.js"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  // const menuOptions = useMemo(() => {
  //   return [
  //     {
  //       text: "Home",
  //       icon: <HomeIcon />
  //     },
  //     {
  //       text: "About",
  //       icon: <InfoIcon />
  //     },
  //     {
  //       text: "Testimonial",
  //       icon: <CommentRoundedIcon />
  //     },
  //     {
  //       text: "Contact",
  //       icon: <PhoneRoundedIcon />
  //     },
  //     {
  //       text: "Cart",
  //       icon: <ShoppingCartRoundedIcon />
  //     },
  //   ]
  // }, [])

  // only for manipulate DOM component
  // useState => nyimpen state
  // useEffect => perubahan data
  // useCallback => function
  // useLayoutEffect 

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {/* v-for="index, items" in menuOptions */}
        {/* item.title */}
        {/* const list = [1,2,3,4,5]
        {list.map((item, i) => (
          <a href="/" key={i}>{item}</a>
        ))} */}
        {
          menuOptions.map((data, index) => (
            <a href={data.path} key={index}>{data.text}</a>
          ))
        }
        {/* <a href="">Home</a>
        <a href="">About</a>
        <a href="">Menu</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a> */}
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">
          Book Now
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ Width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}>
          <List>
            {menuOptions.map((item, i) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar