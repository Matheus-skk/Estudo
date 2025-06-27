import styles from './Sobremim.module.css'
import fotoCapa from "assets/sobre_mim_capa.png"
import PostModelo from "components/PostModelo";
import fotoSobreMim from "assets/foto_perfil.jpg"

export default function SobreMim() {
    return (
      <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
        <h3 className={styles.subtitulo}>Olá, eu sou Matheus</h3>

        <img
          src={fotoSobreMim}
          alt="foto sobre mim"
          className={styles.fotoSobreMim}
        />
        <p className={styles.paragrafo}>
          Sou Matheus de Sousa Silva, estudante de Análise e Desenvolvimento de
          Sistemas e técnico em tecnologia da informação na Universidade Federal
          do Norte do Tocantins (UFNT). Atuo na área de TI com foco em suporte e
          infraestrutura, mas estou em transição para o desenvolvimento
          Front-End, onde tenho me dedicado cada vez mais a aprender e evoluir.
        </p>
        <p className={styles.paragrafo}>
          Minha trajetória começou no suporte técnico, onde adquiri experiência
          com manutenção de equipamentos, redes, atendimento ao usuário e
          soluções de problemas cotidianos. Esse período me deu uma base sólida
          e uma visão prática dos desafios enfrentados por quem utiliza a
          tecnologia no dia a dia.
        </p>
        <p className={styles.paragrafo}>
          Com o tempo, desenvolvi interesse pelo desenvolvimento de sistemas,
          especialmente na criação de interfaces. Gosto da ideia de transformar
          problemas reais em soluções visuais e funcionais, por isso comecei a
          estudar HTML, CSS, JavaScript, React e outras ferramentas do universo
          Front-End.
        </p>
        <p className={styles.paragrafo}>
          Na UFNT, continuo atuando na área técnica, mas já participo de
          projetos onde posso aplicar meus conhecimentos em desenvolvimento.
          Isso tem me ajudado a unir teoria e prática, além de colaborar com
          outros profissionais e aprender em equipe.
        </p>
        <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
      </PostModelo>
    );
}