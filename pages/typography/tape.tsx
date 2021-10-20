import st from '@styles/typography/tape.module.scss'
import Page from '@components/seopage'
import Header from '@components/header'
import Footer from '@components/footer'

export default function Tape() {
  return (
    <Page meta={{
      title: 'tape',
      description: 'tape page'
    }}>
    <Header />
    <section className={st.tape}>
      <div className={st.box}>
        <p><span>tapetapetapetapetapetapetapetapetapetapetapetape</span></p>
        <p><span>tapetapetapetapetapetapetapetapetapetapetapetape</span></p>
        <p><span>tapetapetapetapetapetapetapetapetapetapetapetape</span></p>
        <p><span>tapetapetapetapetapetapetapetapetapetapetapetape</span></p>
      </div>
    </section>
    <Footer />
    </Page>
  )
}