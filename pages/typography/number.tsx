import st from '@styles/typography/number.module.scss'
import Page from '@components/seopage'
import Header from '@components/header'
import Footer from '@components/footer'

export default function Number() {
  return (
    <Page meta={{
      title: 'number',
      description: 'number page'
    }}>
    <Header />
    <section className={st.number}>
      <div className={st.box}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div>
    </section>
    <Footer />
    </Page>
  )
}