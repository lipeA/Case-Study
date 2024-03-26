import Image from "next/image";
import Logo from '@/assets/logo.svg';

import { ButtonHeader } from "./ButtonHeader";
import Search from "./Search";
import AccountAcess from "./AccountAcess";



export default function Header(){
    return(
        <>
            <header className=" relative flex items-center w-full h-20 bg-primary-orange"> 
                <div className="  flex items-center justify-between  w-full max-w-[1246px] px-[15px] mx-auto">
                    <div className=" flex flex-1 justify-between">
                        <div className="flex items-center gap-14">
                            <Image src={Logo} alt="logo" />
                            <ul className="flex items-center gap-12">
                                <li>
                                    <ButtonHeader name="Para você" />
                                </li>
                                <li>
                                    <ButtonHeader name="Para empresas" />
                                </li>
                                <li>
                                    <ButtonHeader name="Serviços" />
                                </li>
                                <li>
                                    <ButtonHeader name="Ajuda" />
                                </li>
                            </ul>
                        </div>
                        <Search/>
                    </div>
                    <AccountAcess/>
                </div>
            </header>
        
        </>
    )
}