import estilos from './Sobre.module.css'
import Image from 'next/image'
import BannerSobre from '../../../public/assets/banner-sobre.png'
import SobreImg from '../../../public/assets/sobre-image.jpg'
import Sorveteria from '../../../public/assets/sorveteria.jpg'

export default function Sobre() {
    return (
        <section className={estilos.secaoSobre}>
            <div className={estilos.bannerSobre}>
                <Image
                    src={BannerSobre}
                    alt='Banner da seção Sobre com imagem de sabores de sorvete'
                />
                <h1>A GELATERIA</h1>
            </div>
            <section className={estilos.conteudoSobre}>
                <div className={estilos.linhaSobre}>
                    <div className={estilos.caixaConteudoSobre}>
                        <h2>Sobre Nós</h2>
                        <span>Nós simplesmente amamos sorvete!</span>
                        <p className={estilos.primeiroParagrafo}>
                            Nós simplesmente amamos sorvete!
                            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
                        </p>
                        <p>
                            Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                        </p>
                    </div>
                </div>
                <div className={estilos.imagensSobre}>
                    <Image
                        src={SobreImg}
                        alt='Imagem de pessoas em momento descontraido saboreando sorvete '
                    />

                    <Image
                        src={Sorveteria}
                        alt='Imagem do balcão de uma sorveteria'
                    />
                </div>

            </section>
        </section >
    )
}