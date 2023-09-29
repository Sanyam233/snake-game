interface IScoreCardProps {
  header: string;
  score: number;
}

export const ScoreCard = (props: IScoreCardProps) => {
  return (
    <div className="score-card">
      <h3 className="score-card-header">{props.header}</h3>
      <h1 className="score-card-score">{props.score}</h1>
    </div>
  );
};
