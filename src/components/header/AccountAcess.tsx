import Image from "next/image"
import IconUser from '@/assets/icon-user.svg';



export default function AccountAcess() {
    return (
        <>
            <div className="absolute flex justify-center items-center  top-0 right-0 w-[19%]  h-full bg-primary-blue" >
                <button className="flex  items-center gap-4">
                    <Image src={IconUser} alt="Icon User" />
                    <span className="text-white font-bold">Acessar Conta</span>

                </button>
            </div>
        </>
    );
}