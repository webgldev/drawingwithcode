import cn from 'classnames'

import st from '@styles/typography/mixblend.module.scss'
import Page from '@components/seopage'
import Header from '@components/header'
import Footer from '@components/footer'

export default function Mixblend() {
  return (
    <Page meta={{
      title: 'mixblend',
      description: 'mixblend page'
    }}>
    <Header />
    <section className={st.mixblend}>
      <div className={st.box}>
        <p><span>Curiosity</span></p>
        <p><span>Research</span></p>
        <p><span>Observation</span></p>
        <div className={cn(st.rect, st.shape1)}></div>
        <div className={cn(st.rect, st.shape2)}></div>
      </div>
    </section>
    <Footer />
    </Page>
  )
}