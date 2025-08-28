import estilos from './Sabores-Home.module.css'
import BannerSabores from '../../../../public/assets/banner-sabores.jpg'
import EventosImagem from '../../../../public/assets/eventos-image.jpg'
import SobreImagem from '../../../../public/assets/sobre-image.jpg'
import Image from 'next/image'

export default function SaboresHome() {
    return (
        <div className={estilos.container_sabores_home}>
            <div className={estilos.conteudo_sabores}>
                <div>
                    <Image className={estilos.primeira_imagem} src={BannerSabores} alt="imagem de sabores de sorvete" />
                </div>
                <div className={estilos.caixa_apoio_primeira_imagem}>
                    <h2>Nossos produtos</h2>
                    <span>Novos e deliciosos!</span>
                    <p>
                        Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                    </p>
                </div>
                <div>
                    <Image className={estilos.segunda_imagem} src={EventosImagem} alt="imagem de sabores de sorvete" />
                </div>
                <div className={estilos.caixa_apoio_primeira_imagem}>
                    <h2>NOSSOS EVENTOS</h2>
                    <span>Delicias com sorvete!</span>
                    <p>
                        Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                    </p>
                </div>
                <div>
                    <Image className={estilos.terceira_imagem} src={SobreImagem} alt="imagem de sabores de sorvete" />
                </div>
                <div className={estilos.caixa_apoio_primeira_imagem}>
                    <h2>SOBRE NÓS</h2>
                    <span>Alegria em cada casquinha!</span>
                    <p>
                        Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                    </p>
                </div>
            </div>
        </div>
    )
}