// src/components/organisms/Navbar.jsx

import { motion } from 'framer-motion' // 'posed' yerine 'motion' import ediyoruz
import { Link } from 'gatsby'
import React, { useRef, useState } from 'react' // useEffect vs. kullanıldığı için React import'u GEREKLİ!
import { useApp } from '../../hooks/use-app'
import Logo from '../../images/AppIcon.png'
import * as styles from './Navbar.module.css'

const activeClassName = styles.active // 'active' string'i yerine CSS modülünden gelen sınıfı kullanmak daha güvenlidir

const Navbar = () => {
  const { basics } = useApp()

  // 'react-pose' yerine 'framer-motion' için animasyon varyantları
  // Bu, eski `moveInBottom` geçişinizin karşılığıdır.
  const navbarVariants = {
    hidden: {
      opacity: 0,
      y: -20 // Yukarıdan gelsin
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2, // Hafif bir gecikme
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  // Bu bölüm (isSticky logiği) aynı kalıyor, zaten doğru çalışıyor.
  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // DÜZELTME: removeEventListener içindeki fonksiyonun referansı
    // addEventListener'daki ile aynı olmalı.
    return () => {
      window.removeEventListener('scroll', handleScroll) // <-- DÜZELTİLDİ
    }
  }, []) // Boş dizi doğru, sadece component mount olduğunda çalışır.

  return (
    // 'posed.div' yerine 'motion.header' veya 'motion.nav' kullanmak
    // anlamsal olarak daha doğrudur.
    <motion.header
      ref={ref}
      className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}
      variants={navbarVariants}
      initial="hidden" // Başlangıç durumu
      animate="visible" // Ekrana geldiğindeki durum
    >
      <Link
        to="/"
        className={styles.logolink}
        activeClassName={activeClassName}
      >
        <img className={styles.logo} src={Logo} alt={basics.label} />
        <span className={styles.logotitle}>{basics.label.toLowerCase()}</span>
      </Link>
      <div className={styles.menu}>
        <Link to="/how-to/" activeClassName={activeClassName}>
          How to
        </Link>
        <Link to="/support/" activeClassName={activeClassName}>
          Support
        </Link>
        <Link to="/roadmap/" activeClassName={activeClassName}>
          Roadmap
        </Link>
        <Link to="/changelog/" activeClassName={activeClassName}>
          Changelog
        </Link>
        <Link
          to={basics.storeUrl}
          activeClassName={activeClassName}
          className={styles.ctaButton}
        >
          {basics.ctaText}
        </Link>
      </div>
    </motion.header>
  )
}

export default Navbar
