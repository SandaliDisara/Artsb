import { useRouter } from 'next/router';
import { artworks } from '@/data/artworks';
import styles from '@/styles/artDetails.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ArtDetails() {
  const router = useRouter();
  const { id } = router.query;

  const art = artworks.find((art) => art.id === id);

  if (!art) return <p>Loading...</p>;

  return (
    <>
      {/* Back link centered at the top */}
      <div className={styles.backWrapper}>
        <Link href="/" className={styles.backLink}>Back Home</Link>
      </div>

      <section className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={art.image}
            alt={art.title}
            className={styles.image}
            width={600}
            height={800}
          />
        </div>

        <div className={styles.detailsWrapper}>
          <div className={styles.infoTable}>
            <div className={styles.infoRow}><span>MEDIUM</span><span>{art.medium}</span></div>
            <div className={styles.infoRow}><span>SIZE</span><span>{art.size}</span></div>
            <div className={styles.infoRow}><span>COMPLETED</span><span>{art.completed}</span></div>
            <div className={styles.infoRow}><span>STATUS</span><span>{art.status}</span></div>
          </div>

          <h2 className={styles.artTitle}>{art.title}</h2>
          <p className={styles.artDescription}>{art.description}</p>
        </div>
      </section>
    </>
  );
}
