import estilos from './Banner.module.css'
import ImageBanner from '../../../../public/assets/banner-home.png'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className={estilos.secaoBanner}>
            <div className={estilos.caixaImagem}>
                <Image
                    src={ImageBanner}
                    width={380}
                    height={380}
                    alt="Imagem de um Sorvete de Casquinha"
                />
            </div>

            <div className={estilos.tituloBanner}>
                <h1>SORVETE ARTESANAL</h1>
            </div>
        </div>
    )
}