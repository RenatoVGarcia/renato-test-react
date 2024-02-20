import styles from "./Header.module.css";

function Header(){
    return (
        <header className={styles.header}>
            <span>Renato Garcia</span>
            <nav>
                <a href="#">Login</a>
                <a href="#">Carrinho</a>
            </nav>
        </header>
    );
}

export default Header;