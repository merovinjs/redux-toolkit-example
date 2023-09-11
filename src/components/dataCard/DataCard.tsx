import styles from "./styles.module.css";
import { useState } from "react";
interface Props {
  data: any;
}
const DataCard = ({ data }: Props) => {
  const [openedit, setOpenedit] = useState(false);
  console.log({ data });
  return (
    <div className={styles.baseContainer}>
      <div className={styles.container}>
        <img className={styles.image} src={data.url} alt="image" />
        <div>{data.price}</div>
        <div onClick={() => setOpenedit(!openedit)} className={styles.edit}>
          X
        </div>
      </div>
      <div>
        {openedit && (
          <div className={styles.editcontainer}>
            <div>Edit</div>
            <div>delete</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataCard;
