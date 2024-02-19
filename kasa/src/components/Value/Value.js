import styles from './Value.module.scss';

function Value({ title, text }) {
    return (
        <div className={styles.value}>
            <p className={styles.valueTitle}>{title}</p>
        </div>
    )
}

export default Value;