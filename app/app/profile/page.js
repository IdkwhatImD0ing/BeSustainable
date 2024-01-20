import styles from "./profile.module.css";
import RootLayout from "../layout";

export default function Profile() {
  return (
    <main>
      <RootLayout>
        <h1 className={styles.text}> Welcome to the Profile Page </h1>
      </RootLayout>
    </main>
  );
}
