import st from '@styles/typographic/changecolor.module.scss'
import Page from '@components/seopage'
import Header from '@components/header'
import Footer from '@components/footer'

export default function Changecolor() {
  return (
    <Page meta={{
      title: 'changecolor',
      description: 'changecolor page'
    }}>
    <Header />
    <section className={st.changecolor}>
      <div className={st.box}>
        <p>
          <span>CURIOSITY</span>
          <span>RESEARCH</span>
          <span>OBSERVATION</span>
        </p>
        <div className={st.transparency}></div>
        <svg>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </svg>
        <div className={st.hooks_main1}>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
    <Footer />
    </Page>
  )
}