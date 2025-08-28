import estilos from './Sabores.module.css'
import Image from 'next/image'
import BannerSabores from '../../../public/assets/banner-sabores.jpg'
import SaborCookies from '../../../public/assets/sabor-cookies-avela.png'
import SaborOreo from '../../../public/assets/sabor-oreo.png'
import SaborPistache from '../../../public/assets/sabor-pistache.png'
import SaborKiwi from '../../../public/assets/sorbet-kiwi.png'
import SaborLimao from '../../../public/assets/sorbet-limao.png'
import SaborMorango from '../../../public/assets/sorbet-morango.png'

export default function Sabores() {
    return (
        <section className={estilos.sacaoSabores}>
            <div className={estilos.bannerSabores}>
                <Image
                    src={BannerSabores}
                    alt='Banner da seção sabores com a imagem de sorvetes variados'
                />
                <h1>NOSSOS SABORES</h1>
            </div>
            <section className={estilos.NossosSabores}>
                <h2>SABORES DE SORVETE</h2>
                <div className={estilos.caixaCards}>
                    <div className="card">
                        <Image
                            src={SaborOreo}
                            width={100}
                            alt='foto sorvete Oreo'
                        />
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>
                    <div className="card">
                        <Image
                            src={SaborPistache}
                            width={100}
                            alt='foto sorvete Pistache'
                        />
                        <h3>Sorvete Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>
                    <div className="card">
                        <Image
                            src={SaborCookies}
                            width={100}
                            alt='foto sorvete Cookies-Avelã'
                        />
                        <h3>Sorvete Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div className="card">
                        <Image
                            src={SaborKiwi}
                            width={100}
                            alt='foto sorvete Kiwi'
                        />
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                    <div className="card">
                        <Image
                            src={SaborMorango}
                            width={100}
                            alt='foto sorvete Morango'
                        />
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div className="card">
                        <Image
                            src={SaborLimao}
                            width={100}
                            alt='foto sorvete Limão Siciliano'
                        />
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </section>
        </section>
    )
}