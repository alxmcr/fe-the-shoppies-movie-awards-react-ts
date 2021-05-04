import { faMedal } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./BannerNominations.module.css"

export function BannerNominations({ maxNominations = 5, setShowBanner }) {
    const closeBanner = () => { setShowBanner(false) }
    return (
        <div className={styles.banner} role="banner">
            <div className={styles.bannerText}>
                <i className={styles.bannerIcon}>
                    <FontAwesomeIcon icon={faMedal} />
                </i>
                <p className="bannerMessage">
                    You have already nominated <span className={styles.bannerEmphasis}>{`${maxNominations} movies`} </span>.
                    <br />
                    Thank you so much for your support and help!
                </p>
            </div>
            <div className={styles.bannerActions}>
                <button
                    className={styles.bannerButton}
                    onClick={closeBanner}>
                    CLOSE
                </button>
            </div>
        </div>
    )
}