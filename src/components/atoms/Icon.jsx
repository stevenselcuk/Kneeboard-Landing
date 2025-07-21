import PropTypes from 'prop-types'
import { memo } from 'react'

// https://featherstyles.com
// import * as Feather from 'react-feather'
import {
  ArrowDownCircle,
  Award,
  BookOpen,
  Briefcase,
  Compass,
  Dribbble,
  Edit,
  FileText,
  GitHub,
  Globe,
  Image,
  Info,
  Key,
  Mail,
  MapPin,
  Moon,
  Rss,
  Star,
  Sun,
  Twitter
} from 'react-feather'
import * as styles from './Icon.module.css'

const Icon = memo(({ name, ...props }) => {
  const components = {
    Dribbble,
    Email: Mail,
    Link: Compass,
    Download: ArrowDownCircle,
    'Info & Download': ArrowDownCircle,
    Styleguide: FileText,
    Blog: Edit,
    Keybase: Key,
    ArrowDownCircle,
    Edit,
    GitHub,
    Twitter,
    Rss,
    Sun,
    Moon,
    Compass,
    FileText,
    Key,
    Image,
    Mail,
    MapPin,
    Globe,
    Briefcase,
    Award,
    BookOpen,
    Star,
    Info
  }

  const IconMapped = components[name]
  // const IconComp = Feather[name]
  if (!IconMapped) return null

  return <IconMapped className={styles.icon} {...props} />
})

Icon.displayName = 'Icon'

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

export default Icon
