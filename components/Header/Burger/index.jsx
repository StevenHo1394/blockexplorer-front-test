import { BurgerNavContainer, BurgerNavLinks, BurgerSearchBar } from "./styled";
import Case from '../../../public/case.png'
import SearchButton from "../../../assets/search.button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

export default function Burger () {
  const router = useRouter()

  return (
        <BurgerNavContainer>
            <BurgerNavLinks>
              <ul>
                <li>
                  <BurgerSearchBar>
                    <input
                      type="text"
                      placeholder="Search your transaction, an address or a block"
                    ></input>
                    <SearchButton/>
                  </BurgerSearchBar>
                </li>
                <li>
                  <Link href="/">
                    <Image src={Case} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                      <a>Explorers</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                      <a>Features</a>
                  </Link>
                </li>
                
                {
                  router.pathname !== '/voting' ? 
                  <li>
                    <Link href="/voting">
                      <a>Voting</a>
                    </Link>
                  </li> 
                : null
                }
              </ul>
            </BurgerNavLinks>
        </BurgerNavContainer>
    )
}