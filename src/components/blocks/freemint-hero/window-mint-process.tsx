import ButtonMint from '@/components/elements/button-mint/button-mint';
import styles from './window-mint-process.module.scss';
interface IWindowMintProcessProps {
  className?: string;
}
export default function WindowMintProcess({
  className,
}: IWindowMintProcessProps) {
  return (
    <div className={styles['window-mint-process']}>
      <div className={styles.header}>
        <p className={styles['header-text']}>OG /</p>
        <h1 className={styles['header-title']}>Free mint</h1>
      </div>
      <h2 className={styles.title}>
        UNKWN
        <br />
        BONES genesis
      </h2>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Remaining:</th>
            <td>633 / 888 NFTs</td>
          </tr>
          <tr>
            <th>Price:</th>
            <td>free</td>
          </tr>
          <tr>
            <th>Total:</th>
            <td>Gas fee</td>
          </tr>
          <tr>
            <th>quantity to buy:</th>
            <td>10 nfts</td>
          </tr>
        </tbody>
      </table>
      <ButtonMint className={styles.button} />
    </div>
  );
}
