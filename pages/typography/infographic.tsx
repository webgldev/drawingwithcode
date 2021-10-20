import st from '@styles/typography/infographic.module.scss'
import Page from '@components/seopage'
import Header from '@components/header'
import Footer from '@components/footer'

export default function infographic() {
  return (
    <Page meta={{
      title: 'infographic',
      description: 'infographic page'
    }}>
    <Header />
    <section className={st.infographic}>
    <div className={st.poster}>
      <div className={st.distraction}>
        <p className={st.distraction_title}>- Distraction of attention is Infographic a poster</p>
        <div className={st.distraction_infographic}>
          <div className={st.distraction_infographic_circleChart}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p>Youtube</p>
            <p>Social <br/> network</p>
            <p>View other <br/> books</p>
            <p>Drawing <br/> and painting</p>
            <p>Clean <br/> the desk</p>
            <p>View other <br/> browsers</p>
            <span className={st.dotCircle}></span>
          </div>
          <div className={st.distraction_infographic_circleChart_top3}>
            <p>top3</p>
            <p>75<span>%</span></p>
            <p><span>45%</span>Youtube</p>
            <p><span>15%</span>View other browsers</p>
            <p><span>15%</span>Social network</p>
          </div>
        </div>
      </div>
      <div className={st.details}>
        <p className={st.details_title}>- Details</p>
        <div className={st.details_infographic}>
          <div className={st.details_infographic_bar}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={st.details_infographic_text}>
            <li><span></span><p>Youtube</p><span></span><p className={st.pdt}>Economy, Invest, Marketing, Development</p></li>
            <li><span></span><p>View other browsers</p><span></span><p>Issue, News, Github</p></li>
            <li><span></span><p>Social network</p><span></span><p>Instagram, Facebook</p></li>
            <li><span></span><p>Clean the desk</p><span></span><p>miscellaneous</p></li>
            <li><span></span><p>Drawing and painting</p><span></span><p>Flower painting</p></li>
            <li><span></span><p>View other books</p><span></span><p>CSS, JS, Design</p></li>
          </div>
        </div>
      </div>
      <div className={st.improve}>
        <p className={st.improve_title}>- How to improve it?</p>
        <div className={st.improve_infographic}>
          <div className={st.improve_infographic_horizontalBar}>
            <p>75</p>
            <span></span>
            <p>25</p>
            <div className={st.improve_infographic_horizontalBar_text}>
              <p>Focus on what you can control</p>
              <p>Focus on daily life</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    <Footer />
    </Page>
  )
}