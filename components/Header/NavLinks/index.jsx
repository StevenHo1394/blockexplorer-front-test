import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import Case from '../../../public/case.png'
import { NavLinks } from './styled'
import Link from 'next/link'

export default function HeaderNavLinks() {
  const router = useRouter()

  return (
    <NavLinks>
      <ul>
        <li>
          <Link href="/">
            <div className="wrapper">
              <Image src={Case} alt="Cash logo" />
            </div>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Explorers</a>
          </Link>
        </li>

        {
          router.pathname !== '/voting' ?
            <li>
              <Link href="/validators">
                <a>Validators</a>
              </Link>
            </li>
            : null
        }

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
    </NavLinks>
  )
}