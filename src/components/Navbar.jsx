import { HiMenuAlt4 } from 'react-icons/hi'
import {AiOutlineClose } from 'react-icons/ai'
import React from 'react'

const NavbarItem = ({title, classProps})=> {
    return (
        <li className = {`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}
const Navbar = () => {
    const [ toggleMenue, setToggleMenue] = React.useState(false);
    return (
        <nav className = "w-full flex md:justify-centre justify-centre p-4">
            <div className= "md:flex-[0.5] flex-initial justify-centre items-centre">
                <img src= "../../images/logo.png" alt="logo" className="w-32 cursor-pointer" />
            </div>
            <ul className = "text-white md:flex hidden flex-row justify-between items-centre flex-initial">
                {["Markets", "Exchange", "Tutorials", "Wallets"].map((item, index)=>(
                    <NavbarItem key={item + index} title = {item} />
                ))}
                <li className='px-7 py-2 mx-4 rounded-full bg-[#2952e3] cursor-pointer hover:bg-[#2546bd]'>
                    Login
                </li>
            </ul>
            <div className = "flex relative">
                {toggleMenue
                    ? <AiOutlineClose  fontSize = {28} className= "text-white md:hidden  cursor-pointer" onClick={ () => setToggleMenue(false)}/> 
                    : <HiMenuAlt4 fontSize = {28} className= "text-white md:hidden cursor-pointer" onClick={ () => setToggleMenue(true)}/>  
                } 
                {toggleMenue &&
                <ul>
                    <li>
                        <AiOutlineClose/>
                        <li className = "text-white flex-centre text-center ">                       
                            {["Markets", "Exchange", "Tutorials", "Wallets"].map((item, index)=>(
                            <NavbarItem key={item + index} title = {item} />
                            ))}
                        </li>                

                        <li className='px-7 py-0 mx-3 rounded-full text-white bg-[#2952e3] cursor-pointer hover:bg-[#2546bd]'>
                            Login
                        </li>
                    </li>
                </ul>
                }
            </div>
        </nav>
    );
}

export default Navbar;