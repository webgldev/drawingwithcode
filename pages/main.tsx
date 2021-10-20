import Image from 'next/image'
import Link from 'next/link'

import st from '@styles/main.module.scss'
import Page from '@components/seopage'

export default function Main() {
  return (
    <Page meta={{
      title: 'main',
      description: 'main page'
    }}>
      <main className={st.main}>
        <div className={st.area}>
          <Link href="/#">
            <a>
              <p>3D GRAPHICS</p>
              <Image src="/images/main/card_graphics.png" alt="card image" layout="fill" />
              <span className={st.sr}>3D Graphics Card image</span>
            </a>
          </Link>
          <Link href="/#">
            <a>
              <p>UI & VISUALIZATION</p>
              <Image src="/images/main/card_ui.png" alt="card image" layout="fill" />
              <span className={st.sr}>UI Card image</span>
            </a>
          </Link>
          <Link href="/typography">
            <a>
              <p>TYPOGRAPHY</p>
              <Image src="/images/main/card_typo.png" alt="card image" layout="fill" />
              <span className={st.sr}>Typo Card image</span>
            </a>
          </Link>
        </div>
      </main>
    </Page>
  )
}