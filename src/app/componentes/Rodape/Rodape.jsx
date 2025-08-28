import estilos from './Rodape.module.css'
import logoRodape from '../../../../public/assets/logo.png'
import Image from 'next/image'

export default function Rodape() {
    return (
        <div className={estilos.containerRodape}>
            <div className={estilos.conteudoPrincipalRodape}>
                <div className={estilos.logo}>
                    <Image src={logoRodape}
                        width={100}
                        height={100}
                        alt="Logo do Rodape"
                    />

                </div>

                <div className={estilos.caixaEndereco}>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>

                <div className={estilos.caixaContato}>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>

                <div className={estilos.caixaHorarios}>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className={estilos.paragrafoRodape}>
                <p>Gelateria. Orgulhosamente desenvolvido por "Rodolfo Passos"</p>
            </div>
        </div>
    )
}