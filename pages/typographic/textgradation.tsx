import st from '@styles/typographic/textgradation.module.scss'
import Page from '@components/seopage'
import Header from '@components/header'
import Footer from '@components/footer'

export default function Textgradation() {
  return (
    <Page meta={{
      title: 'textgradation',
      description: 'textgradation page'
    }}>
    <Header />
    <section className={st.textgradation}>
      <div className={st.box}>
        <ul className={st.gradient}>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>

          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>

          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
          <li className={st.gradient_text}>Observation</li>
        </ul>
      </div>
    </section>
    <Footer />
    </Page>
  )
}