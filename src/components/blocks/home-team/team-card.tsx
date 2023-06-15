import Image from 'next/image';
import styles from './team-card.module.scss';
interface ITeamCardProps {
  name: string;
  position: string;
  avatar: string;
}
export default function TeamCard({
  name,
  position,
  avatar,
}: ITeamCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.position}>{position}</p>
      <div className={styles.avatar}>
        <Image src={avatar} alt={name} fill />
      </div>
    </div>
  );
}
