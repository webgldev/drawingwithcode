import Image from 'next/image'
import Link from 'next/link'

import st from '@styles/cardlayout.module.scss'
import Page from '@components/seopage'
import Header from '@components/header'
import Footer from '@components/footer'
import Card from '@components/card'

export default function Typographic() {
  return (
    <Page meta={{
      title: 'Typographic',
      description: 'Typographic page'
    }}>
      <Header />
      <section className={st.cardlayout}>
        <div className={st.inner}>
          <Card>
            <Link href="/typographic/pantone2021" >
              <a>
                <Image src="/images/typo/typo-2.png" alt="pantone color of 2021 image" layout="fill" />
                <span className={st.sr}>pantone color of 2021 image</span>
              </a>
            </Link>
          </Card>
          <Card>
            <Link href="/typographic/infographic" >
              <a>
                <Image src="/images/typo/typo-1.png" alt="Infographic image" layout="fill" />
                <span className={st.sr}>Infographic image</span>
              </a>
            </Link>
          </Card>
          <Card>
            <Link href="/typographic/blurtext" >
              <a>
                <Image src="/images/typo/typo-3.png" alt="Blur text image" layout="fill" />
                <span className={st.sr}>Blur text image</span>
              </a>
            </Link>
          </Card>
          <Card>
            <Link href="/typographic/spelling" >
              <a>
                <Image src="/images/typo/typo-4.png" alt="Spelling image" layout="fill" />
                <span className={st.sr}>Spelling image</span>
              </a>
            </Link>
          </Card>
          <Card>
            <Link href="/typographic/tape" >
              <a>
                <Image src="/images/typo/typo-5.png" alt="Tape animation image" layout="fill" />
                <span className={st.sr}>Tape animation image</span>
              </a>
            </Link>
          </Card>
          <Card>
            <Link href="/typographic/circlerotate" >
              <a>
                <Image src="/images/typo/typo-6.png" alt="Circle path image" layout="fill" />
                <span className={st.sr}>Circle path image</span>
              </a>
            </Link>
          </Card>
          <Card>
            <Link href="/typographic/mixblend" >
              <a>
                <Image src="/images/typo/typo-7.png" alt="Mixblend text image" layout="fill" />
                <span className={st.sr}>Mixblend text image</span>
              </a>
            </Link>
          </Card>
          <Card>
            <Link href="/typographic/stairs" >
              <a>
                <Image src="/images/typo/typo-8.png" alt="Stairs image" layout="fill" />
                <span className={st.sr}>Stairs image</span>
              </a>
            </Link>
          </Card>
          <Card>
            <Link href="/typographic/number" >
              <a>
                <Image src="/images/typo/typo-9.png" alt="Number image" layout="fill" />
                <span className={st.sr}>Number image</span>
              </a>
            </Link>
          </Card>
          <Card>
            <Link href="/typographic/scaletext" >
              <a>
                <Image src="/images/typo/typo-10.png" alt="Scale text image" layout="fill" />
                <span className={st.sr}>Scale text image</span>
              </a>
            </Link>
          </Card>
          <Card>
            <Link href="/typographic/changecolor" >
              <a>
                <Image src="/images/typo/typo-11.png" alt="Moves center the circle image" layout="fill" />
                <span className={st.sr}>Moves center the circle image</span>
              </a>
            </Link>
          </Card>
          <Card>
            <Link href="/typographic/textgradation" >
              <a>
                <Image src="/images/typo/typo-12.png" alt="Text gradation image" layout="fill" />
                <span className={st.sr}>Text gradation image</span>
              </a>
            </Link>
          </Card>
        </div>
      </section>
      <Footer />
    </Page>
  )
}