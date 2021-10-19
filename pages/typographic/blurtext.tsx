import st from '@styles/typographic/blurtext.module.scss'
import Page from '@components/seopage'
import Header from '@components/header'
import Footer from '@components/footer'

export default function Blurtext() {
  return (
    <Page meta={{
      title: 'Blurtext',
      description: 'Blurtext page'
    }}>
    <Header />
    <section className={st.blurtext}>
      <div className={st.box}>
        <p>Do<span>n't</span></p>
        <p><span>qu</span>it.</p>
      </div>
    </section>
    <Footer />
    </Page>
  )
}