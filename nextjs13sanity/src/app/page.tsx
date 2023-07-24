import Image from 'next/image'
import styles from './page.module.css'
import OctoTodo from './components/octotodo/octotodo'
export default function Home() {
  return (
    <main className={styles.main}>
      <OctoTodo />
    </main>
  )
}
