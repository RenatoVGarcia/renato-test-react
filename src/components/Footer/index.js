import styles from "./Footer.module.css";

function Footer(){
    return(
        <footer className={styles.footer}>
            <h2> Inscrita no CNPJ: XX.XXX.XXX/XXXX-XX, &copy; Desenvolvido por Renato Garcia 2024.</h2>
        </footer>
    );
}

export default Footer;