import st from '@styles/typography/circlerotate.module.scss'
import Page from '@components/seopage'
import Header from '@components/header'
import Footer from '@components/footer'

export default function Circlerotate() {
  return (
    <Page meta={{
      title: 'circlerotate',
      description: 'circlerotate page'
    }}>
    <Header />
    <section className={st.circlerotate}>
      <div className={st.box}>
        <p>CURIOSITY<br/>OBSERVATION</p>
        <p>RESEARCH</p>
        <p>2021</p>
        <div className={st.circle}></div>
        <svg width="500" height="500" viewBox="0 0 205 206" fill="none">
          <path id='textMove' className={st.path} d="M103.55 0.5C28.2 0.5 0.5 66.27 0.5 102.53C0.5 142.77 29.72 204.53 102.5 204.53C173.18 204.53 204.5 141.74 204.5 102.53C204.5 60.79 171.14 0.53 104.4 0.53" stroke="#231815" strokeMiterlimit="10"/>
          <defs>
            <path id='textMove' className={st.path} d="M103.55 0.5C28.2 0.5 0.5 66.27 0.5 102.53C0.5 142.77 29.72 204.53 102.5 204.53C173.18 204.53 204.5 141.74 204.5 102.53C204.5 60.79 171.14 0.53 104.4 0.53" stroke="#231815" strokeMiterlimit="10"/>
          </defs>
          <text>
            <textPath href="#textMove">
            If you can not <tspan>measure,</tspan> you can not manage. If you can not <tspan>measure,</tspan> you can not manage. If you can not <tspan>measure,</tspan> you can not manage.
              <animate
                attributeName="startOffset"
                from="100%" to="0%"
                begin="0s" dur="5s"
                repeatCount="indefinite"
                keyTimes="0;1"
                calcMode="spline"
                keySplines=".9 .7 .22 .5"/>
            </textPath>
        </text>
        </svg>
      </div>
    </section>
    <Footer />
    </Page>
  )
}