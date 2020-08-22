import React, { useState } from 'react';
import { pages } from './pages'
import headerImage from '../assets/CharlesLogoSA.png';
import headerStyles from '../components/header.module.css';
import classNames from 'classname'
export default function Header() {
    let [header, setHeaderBackground] = useState(headerStyles.header)
    let [menuStateValue, setMenuStateValue] = useState('MENU')
    let [buttonSwitch, switchButton] = useState(false);
    let menuState = classNames(headerStyles.menuButton, headerStyles.menuButtonA);
    let [menu, setMenu] = useState(classNames(headerStyles.menu, headerStyles.menuHideBottom));
    let [menuItem, setMenuItem] = useState(classNames(headerStyles.menuItemSlide, headerStyles.menuItem));
    buttonSwitch ? menuState = classNames(headerStyles.menuButton, headerStyles.show) : menuState = classNames(headerStyles.menuButton, headerStyles.menuButtonA);
    let toggleNav = () => {
        switchButton(buttonSwitch = !buttonSwitch);
        if (buttonSwitch) {
            menuItem = setMenuItem(classNames(headerStyles.menuItemSlideDown, headerStyles.menuItem))
            clearTimeout(timer)
            setMenu(menu = classNames(headerStyles.menuShow, headerStyles.menu));
            setMenuStateValue(menuStateValue = 'HIDE');
        } else {
            menuItem = setMenuItem(classNames(headerStyles.menuItemSlide, headerStyles.menuItem))
            setMenu(menu = classNames(headerStyles.menu, headerStyles.menuHide))
            timer = setTimeout(() => {
                setMenu(menu = classNames(headerStyles.menu, headerStyles.menuHideBottom))
            }, 400)
            setMenuStateValue(menuStateValue = 'MENU')
        }
    }
    let timer;
    document.addEventListener('scroll', () => {
        if (Math.round(window.scrollY) >= 70) {
            if (!buttonSwitch) return setHeaderBackground(header = classNames(headerStyles.header, headerStyles.addBg))
        }
        return setHeaderBackground(header = headerStyles.header)
    })

    const goToSelectedSection = (e) => {
        switchButton(buttonSwitch = !buttonSwitch);
        menuItem = setMenuItem(classNames(headerStyles.menuItemSlide, headerStyles.menuItem));
        timer = setTimeout(() => {
            setMenu(menu = classNames(headerStyles.menu, headerStyles.menuHideBottom))
        }, 1)
        setMenuStateValue(menuStateValue = 'MENU');
        e.preventDefault();
        const href = e.target.getAttribute("href");
        if (href.indexOf('#') === -1) {
            window.location.href = href;
            return;
        }
        const offsetTop = document.querySelector(href).offsetTop;
        window.scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }

    return (
        <React.Fragment>
            <header className={header}>
                <div className={headerStyles.navbarHeader}>
                    <a href="#App"><img className={headerStyles.navbarHeaderImg} src={headerImage} alt="Portfolio Logo" /></a>
                </div>
                <div id="menuButton" className={menuState} onClick={toggleNav}>
                    <p>{menuStateValue}</p>
                    <div className={classNames(headerStyles.menuButtonLine, headerStyles.menuButtonLine1)}></div>
                    <div className={classNames(headerStyles.menuButtonLine, headerStyles.menuButtonLine2)}></div>
                    <div className={classNames(headerStyles.menuButtonLine, headerStyles.menuButtonLine3)}></div>
                </div>
            </header>
            <div className={menu}>
                <div className={menuItem}>
                    <h4><a href='/'>MENU</a></h4>
                    <ul>
                        {pages.map(p => (<li key={p.title}><a href={p.url} onClick={goToSelectedSection}>{p.title}</a></li>))}
                    </ul>
                </div>
                <div className={headerStyles.menuFooter}>
                    &copy; 2020 Ikeh Charles
                </div>
            </div>

        </React.Fragment>
    )
}
