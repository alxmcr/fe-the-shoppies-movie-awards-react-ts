import styles from './HeroApp.module.css';

export function HeroApp() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.heroTitle}>The Shoppies</h1>
            <p className={styles.heroDescription}>Movie awards for entrepreneurs</p>
        </section>
    )
}