import st from '@styles/typography/pantone2021.module.scss'
import Page from '@components/seopage'
import Header from '@components/header'
import Footer from '@components/footer'

export default function Pantone2021() {
  return (
    <Page meta={{
      title: 'pantone2021',
      description: 'pantone2021 page'
    }}>
    <Header />
    <section className={st.pantone2021}>
      <div className={st.box}>
        <div className={st.animated_title}>
          <div className={st.text_top}>
            <div>
              <span>Illuminating</span>
              <span>Ultimate-gray</span>
            </div>
          </div>
          <div className={st.text_bottom}>
            <div>Pantone color of 2021</div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </Page>
  )
}