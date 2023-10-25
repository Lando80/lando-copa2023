/* eslint-disable react/prop-types */
import styles from './ExtraInfoComponent.module.css'

function ExtraInfoComponent({ jogo }) {
    return (
        <div className={styles.centralizar}>
            {
                jogo.prorrogacao === "Sim" &&
                <div>
                    Prorrogação? {jogo.prorrogacao} |
                    Placar Prorrogação: {jogo.placar_prorrogacao}
                </div>
            }
            {
                jogo.penaltis === "Sim" &&
                <div>
                    Pênaltis? {jogo.penaltis} |
                    Placar Pênaltis: {jogo.placar_penaltis}
                </div>
            }
        </div>
    )
}

export default ExtraInfoComponent