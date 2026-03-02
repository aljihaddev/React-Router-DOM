import { Link } from "react-router-dom"
import Button from "../common/Button"
import Container from "../common/container"
import Flex from "../common/Flex"
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full backdrop-blur-md border-b border-white/25 py-5">
      <Container>
        <Flex className={'justify-between'}>
          <div className="text-2xl text-white font-bold italic">
            <Link to={'/'}>Logo</Link>
          </div>

          <div>
            <ul className="flex items-center justify-between gap-x-10">
              <li className="text-white font-bold text-base">
                <Link to={'/'}>Home</Link>
              </li>
              <li className="text-white font-bold text-base">
                <Link to={'services'}>Services</Link>
              </li>
              <li className="text-white font-bold text-base">
                <Link to={'contact'}>Contact</Link>
              </li>
              <li className="text-white font-bold text-base">
                <Link to={'about'}>About</Link>
              </li>
              <li className="text-white font-bold text-base">
                <Link to={'error'}>Error</Link>
              </li>
            </ul>
          </div>

          <div>
            <Button className={'text-white font-bold text-base duration-200 hover:bg-[#8200db]'} btnTxt={'Call Us'} />
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Header