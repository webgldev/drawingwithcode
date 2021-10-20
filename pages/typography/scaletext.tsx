import st from '@styles/typography/scaletext.module.scss'
import Page from '@components/seopage'
import Header from '@components/header'
import Footer from '@components/footer'

export default function Scaletext() {
  return (
    <Page meta={{
      title: 'scaletext',
      description: 'scaletext page'
    }}>
    <Header />
    <section className={st.scaletext}>
      <div className={st.box}>
        <p>
          <span>CURIOSITY</span>
          <span> & </span>
          <span>RESEARCH</span>
          <span> & </span>
          <span>OBSERVATION</span>
        </p>
      </div>
    </section>
    <Footer />
    </Page>
  )
}