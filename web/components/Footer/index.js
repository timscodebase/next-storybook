import PropTypes from 'prop-types'
import styles from './Footer.module.css'

export default function Footer({ page }) {
  return (
    <div className={styles.footer}>
      {!page ? <h3>You may want tissues</h3> : <h3>Page {page}</h3>}
    </div>
  )
}

Footer.propTypes = {
  page: PropTypes.number,
}
