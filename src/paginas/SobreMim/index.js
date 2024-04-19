import PostModelo from "componentes/PostModelo";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/minha_foto_2.png";
import fotoCapa from "assets/sobre_mim_capa.png";

function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Rafael!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Rafael sorrindo"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo
        vel eros ullamcorper tempor. Mauris vestibulum vestibulum ligula non
        posuere. Donec posuere metus id nisi varius, ac malesuada quam
        scelerisque.
      </p>
      <p className={styles.paragrafo}>
        Curabitur id metus arcu. Integer euismod odio non nunc laoreet, quis
        feugiat nisi tristique. Sed eu turpis magna. Integer eget fringilla mi.
        Mauris in luctus urna. Nam ac varius odio.
      </p>
      <p className={styles.paragrafo}>
        Phasellus nec risus eget justo malesuada consectetur. Nullam varius
        felis et nulla ultricies, vitae vehicula arcu tristique. Fusce nec nisl
        sit amet tortor aliquet commodo nec eu leo.
      </p>
      <p className={styles.paragrafo}>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Aenean non enim tincidunt, sodales odio ac, convallis
        tellus. Proin ut risus ut libero fermentum convallis.
      </p>
      <p className={styles.paragrafo}>
        Nunc eget libero consectetur, eleifend dui sit amet, malesuada libero.
        Sed quis fermentum ex. Nullam vitae odio justo. Proin nec velit at enim
        faucibus vehicula nec sit amet quam.
      </p>
    </PostModelo>
  );
}

export default SobreMim;
