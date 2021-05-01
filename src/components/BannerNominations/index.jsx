import { faMedal } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./BannerNominations.module.css"

export function BannerNominations({ maxNominations = 5 }) {
    return (
        <div className={styles.banner}>
            <i className={styles.bannerIcon}>
                <FontAwesomeIcon icon={faMedal} />
            </i>
            <div>
                <h2 className={styles.bannerTitle}>Congratulations!</h2>
                <p className={styles.bannerMessage}>
                    You have already nominated <span className={styles.bannerEmphasis}>{` ${maxNominations} movies`}</span>.
                </p>
                <p className={styles.bannerMessage}>
                    Thank you so much for your support and help!
                </p>
            </div>
        </div>
    )
}