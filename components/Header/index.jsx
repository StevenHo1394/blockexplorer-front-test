import React, { useState } from 'react'
import { BurgerButton, HeaderNav, HeaderWrapper } from './styled'
import HeaderSearchBar from './SearchBar'
import HeaderLogo from './Logo'
import HeaderNavLinks from './NavLinks'
import Burger from './Burger'

export default function Header() {
    const [hidden, setHidden] = useState(true)

    return (
        <HeaderWrapper>
            <HeaderNav>
                <HeaderLogo />
                <HeaderSearchBar />
                <HeaderNavLinks />
                <BurgerButton onClick={() => setHidden(!hidden)} />
                {
                    !hidden ? <Burger /> : null
                }
            </HeaderNav>
        </HeaderWrapper>
    )
}