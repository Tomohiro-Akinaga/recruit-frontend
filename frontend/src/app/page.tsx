import styles from './page.module.css'
import HomeTemplate from '@/components/templates/Home'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeTemplate />
      </main>
    </div>
  )
}
