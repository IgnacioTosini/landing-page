import ContactNav from "./ContactNav";
import Logo from "./Logo";
import '../../styles/components/header/_header.scss'

export default function Header() {
  return (
    <header>
        <Logo />
        <ContactNav />
    </header>
  )
}
