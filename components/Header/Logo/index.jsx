import Image from "next/image";
import { Logo } from './styled'
import chadLogo from '../../../public/logo.svg'

export default function HeaderLogo() {
  return (
    <Logo>
      <a href="/">
        <Image src={chadLogo} alt="Chadscan logo" />
      </a>
    </Logo>
  )
}