import styles from "../styles/infoBoxContent.module.css";
import Image from "next/image";

export default function Content({
  title = "Placeholder title",
  content = "Placeholder content",
  image = "https://via.placeholder.com/600",
}) {
  return (
    <>
      <div className={styles.header}>{title}</div>
      <hr className={styles.hrStyle} />
      <div className={styles.body}>{content}</div>
      <br />
      <div className={styles.infoImage}>
        <Image src={image} alt={title} width={600} height={600} layout="responsive"/>
      </div>
    </>
  );
}
