import { HiMenuAlt4 } from 'react-icons/hi'
import {AiOutlineClose } from 'react-icons/ai'

const NavbarItem = ({title, classProps})=> {
    return (
        <li className = {`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}
const Navbar = () => {
    return (
        <nav className = "w-full flex md:justify-centre justify-centre p-4">
            <div className= "md:flex-[0.5] flex-initial justify-centre items-centre">
            <img src= "../../images/logo.png" alt="logo" className="w-32 cursor-pointer" />
            </div>
            <ul className = "text-white md:flex hiddent flex-row justify-between items-centre flex-initial">
                {["Markets", "Exchange", "Tutorials", "Wallets"].map((item, index)=>(
                    <NavbarItem key={item + index} title = {item} />
                ))}
                <li className='px-7 py-2 mx-4 rounded-full bg-[#2952e3] cursor-pointer hover:bg-[#2546bd]'>
                    Login
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;