import PropTypes from 'prop-types'
import { memo } from 'react'
import * as styles from './LogoUnit.module.css'

LogoUnit.propTypes = {
  minimal: PropTypes.bool,
  isResume: PropTypes.bool
}

function LogoUnit({ minimal }) {
  return (
    <div className={minimal ? styles.minimal : styles.logounit}>
      {/*
            <p className={`p-job-title ${styles.description}`}>Find👋🏻</p>
          */}
    </div>
  )
}

export default memo(LogoUnit)
