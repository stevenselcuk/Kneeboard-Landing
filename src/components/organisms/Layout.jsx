import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Footer from './Footer'
import * as styles from './Layout.module.css'
import Navbar from './Navbar'

export default function Layout({ children, location }) {
  // Animasyon süresi (milisaniye cinsinden)
  const transitionDuration = 0.3 // 0.3 saniye

  // Framer Motion için animasyon varyantları oluşturuyoruz.
  // Bu, eski `fadeIn` ve `moveInBottom` geçişlerinizin yerini alır.
  const pageVariants = {
    // Sayfa ilk yüklendiğinde veya yeni sayfa geldiğinde
    initial: {
      opacity: 0,
      y: 20 // Aşağıdan gelme efekti için
    },
    // Sayfa ekrana geldiğinde
    in: {
      opacity: 1,
      y: 0
    },
    // Sayfa ekrandan ayrılırken
    out: {
      opacity: 0,
      y: -20 // Yukarı doğru kaybolma efekti için
    }
  }

  // Animasyon geçiş ayarları
  const pageTransition = {
    type: 'tween', // Yumuşak bir geçiş türü
    ease: 'anticipate', // Biraz daha dinamik bir ease efekti
    duration: transitionDuration
  }

  React.useEffect(() => {
    // hook
    // ...
  }, [])
  return (
    <>
      <Navbar />
      {/* 
        AnimatePresence, bileşenler DOM'dan kaldırılırken animasyonların 
        çalışmasını sağlar. 'mode="wait"' ise yeni sayfanın gelmeden önce
        eski sayfanın çıkış animasyonunu tamamlamasını bekler.
      */}
      <AnimatePresence mode="wait">
        {/*
          'motion.div', animasyon ekleyebileceğimiz bir div elemanıdır.
          'key' prop'u, Framer Motion'a hangi bileşenin değiştiğini söyler.
          Sayfa değişimlerinde location.pathname kullanmak en iyi pratiktir.
        */}
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className={styles.screen}
        >
          <div className={styles.wrapper}>{children}</div>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  )
}
