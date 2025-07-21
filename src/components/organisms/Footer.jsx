import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useMeta } from '../../hooks/use-meta'
import * as styles from './Footer.module.css'

const activeClassName = 'active'
const FooterMarkup = ({ meta, year }) => {
  React.useEffect(() => {}, [])

  return (
    <footer className={`h-card ${styles.footer}`}>
      <div className={styles.links}>
        <Link to="/privacy-policy/" activeClassName={activeClassName}>
          Privacy Policy
        </Link>
        <Link to="/disclaimer/" activeClassName={activeClassName}>
          Disclaimer
        </Link>
      </div>

      <p className={styles.copyright}>
        <small>
          &copy; {year}{' '}
          <a className="u-url" href={meta.url}>
            {meta.title}
          </a>{' '}
          &mdash; Steven J. Selcuk
        </small>
      </p>
    </footer>
  )
}

FooterMarkup.propTypes = {
  meta: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired
}

function Footer() {
  const metaYaml = useMeta()
  const year = new Date().getFullYear()

  return <FooterMarkup year={year} meta={metaYaml} />
}

export default memo(Footer)
