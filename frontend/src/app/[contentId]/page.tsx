import styles from './page.module.css'
import HomePage from '@/components/pages'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomePage />
      </main>
    </div>
  )
}
