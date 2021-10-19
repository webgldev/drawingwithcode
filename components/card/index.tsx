import st from './style.module.scss'

interface LayoutProps {
  children: React.ReactNode;
}

const Card = ({ children }: LayoutProps) => (
  <div className={st.card}>
    {children}
  </div>
)

export default Card