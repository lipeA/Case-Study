import Image from "next/image";
import Container from "./Container";
import PhoneIcon from '@/assets/icon-phone.svg';
import SoluctionIcon from '@/assets/icon-solutions.svg';
import OptionsIcon from '@/assets/icon-options.svg';
import CardIcon from '@/assets/icon-card.svg';
import Phone from '@/assets/phone.png'




export default function SectionService() {
    return (
        <>
            <section className="relative w-full h-[965px]">
                <Container>
                    <div className="flex-1 max-w-[594px] pt-32">
                        <span className="block text-primary-orange text-sm font-bold uppercase mb-9">Serviços exclusivos </span>
                        <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6"> Gerencie suas finanças sem sair de casa</h2>
                        <p className="text-lg max-w-[554] mb-16 text-second-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida, e o melhor, no conforto da sua casa.</p>
                        <ul className="flex flex-col items-start gap-7">

                            <li className="flex items-center gap-9 pb-5 mb-12 border-b-[1px]">
                                <div className="w-7 h-7 flex items-center justify-center ">
                                    <Image src={PhoneIcon} alt="Icon Phone" />
                                </div>
                                <p className="flex-1 text-text-gray pr-2"> Acompanhar sua conta, fazer transferência e pagamentos de onde estiver </p>
                            </li>

                            <li className="flex items-center  gap-9 pb-5 mb-12 border-b-[1px]  border-opacity-gray">
                                <div className="w-7 h-7 flex items-center justify-center  ">
                                    <Image src={SoluctionIcon} alt="Icon Phone" />
                                </div>
                                <p className="flex-1 text-text-gray pr-2"> Soluções de empréstimos e renegociação para organizar suas finanças</p>
                            </li>

                            <li className="flex items-center gap-9  pb-5 mb-12 border-b-[1px]  border-opacity-gray">
                                <div className="w-7 h-7 flex items-center justify-center ">
                                    <Image src={OptionsIcon} alt="Icon Phone" />
                                </div>
                                <p className="flex-1 text-text-gray pr-2"> Diversas opções de invertimento, de acordo com o seu perfil de investidor </p>
                            </li>

                            <li className="flex items-center gap-9  pb-5 mb-12 border-b-[1px]  border-opacity-gray">
                                <div className="w-7 h-7 flex items-center justify-center ">
                                    <Image src={CardIcon} alt="Icon Phone" />
                                </div>
                                <p className="flex-1 text-text-gray pr-2"> Acompanhar a fatura do seu cartão de crédito e faça compras online com o seu cartão virtual </p>
                            </li>

                        </ul>

                    </div>
                </Container>

                <div className="absolute top-0 right-0 h-full w-[32%] bg-phone-gray flex items-center ">
                    <Image src={Phone} alt="Phone" className="translate-x-[-50%]"/>
                </div>

            </section>
        </>
    );
}






