import styles from "./HangmanDrawing.module.css";

const HEAD = <div className={styles.head} />;

const BODY = <div className={styles.body} />;

const RIGHT_ARM = <div className={styles.rightArm} />;

const LEFT_ARM = <div className={styles.leftArm} />;

const RIGHT_LEG = <div className={styles.rightLeg} />;

const LEFT_LEG = <div className={styles.leftLeg} />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div className={styles.hangmanDrawing}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={styles.hangmanDrawingPart1} />
      <div className={styles.hangmanDrawingPart2} />
      <div className={styles.hangmanDrawingPart3} />
      <div className={styles.hangmanDrawingPart4} />
    </div>
  );
}
