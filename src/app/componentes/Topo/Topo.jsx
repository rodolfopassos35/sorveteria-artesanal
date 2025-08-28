import estilos from './Topo.module.css'
import Logo from '../../../../public/assets/logo.png'
import Link from 'next/link'
import Image from 'next/image'

export default function Topo() {
    return (

        <div className={estilos.containerTopo}>
            <div className={estilos.conteudoTopo}>
                <Image src={Logo}
                    alt='Logo'
                    priority
                    width={100}
                    height={100}
                />
                <nav className={estilos.caixaLinks}>
                    <Link href="/">Home</Link>
                    <Link href="/Sabores">Sabores</Link>
                    <Link href="/Sobre">Sobre</Link>
                </nav>

            </div>

        </div>
    )
}