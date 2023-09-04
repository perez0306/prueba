import React, { useState } from "react";
//Libs
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// Utils
import logoGrande from "../../static/img/menu/icon.jpeg";
import icoTelefono from "../../static/img/menu/IcoTelefono.png";
// Style
import MenuWrapper from "./menu.style";
import { size } from "../../styles/contantStyles";

const MenuComponent = () => {
  const isMobile = useMediaQuery(`(max-width: ${size.mobile.max})`);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const pages = [
    { text: "Inicio", path: "/" },
    { text: "Productos", path: "/" },
  ];

  return (
    <MenuWrapper data-testid='Menu-Wrapper'>
      <div className="imagen">
        <img src={logoGrande} alt="icon-logo" className="imaLogo" />
      </div>
      <div className="contacto">
        {isMobile ? (
          <>
            <IconButton data-testid="menu-icon-button" onClick={() => setOpen(!open)}>
              <MenuIcon />
            </IconButton>
            <Menu
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {pages.map((item, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  <p className="link-menu">{item.text}</p>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <>
            <div className="Icotelefono">
              <img
                src={icoTelefono}
                alt="telefono contacto"
                className="tamIcoTele"
              />
              <p className="text2">300 0000000</p>
            </div>
            <p className="text1">
              Uno de nuestros asesores lo atenderá en breve
            </p>
          </>
        )}
      </div>
      <div className="barra"></div>
    </MenuWrapper>
  );
};

export default MenuComponent;
