import Image from 'next/image'

import st from '@styles/typographic/stairs.module.scss'
import Page from '@components/seopage'
import Header from '@components/header'
import Footer from '@components/footer'

export default function Stairs() {
  return (
    <Page meta={{
      title: 'stairs',
      description: 'stairs page'
    }}>
    <Header />
    <section className={st.stairs}>
    <div className={st.box}>
      <h1><p className={st.text_flicker_in_glow}>Erin</p><span></span></h1>
      <div className={st.perspective_text}>
        <div className={st.perspective_line}>
          <p></p>
          <p>RESEARCH</p>
          <Image src="/images/typo/img/stairs-2.jpg" alt="image" layout="fill" />
        </div>
        <div className={st.perspective_line}>
          <p>RESEARCH</p>
          <p>CURIOSITY</p>
        </div>
        <div className={st.perspective_line}>
          <p>CURIOSITY</p>
          <p>OBSERVATION</p>
        </div>
        <div className={st.perspective_line}>
          <p>OBSERVATION</p>
          <p>Development</p>
        </div>
        <div className={st.perspective_line}>
          <p>Development</p>
          <p></p>
        </div>
      </div>
        <div className={st.img}>
          <Image src="/images/typo/img/stairs-1.png" alt="image" layout="fill" />
        </div>
    </div>
    </section>
    <Footer />
    </Page>
  )
}