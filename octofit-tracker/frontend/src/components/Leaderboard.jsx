import CollectionPage from './CollectionPage';

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'username', label: 'User' },
  { key: 'teamName', label: 'Team' },
  { key: 'totalPoints', label: 'Points' },
  { key: 'totalMinutes', label: 'Minutes' },
];

export default function Leaderboard() {
  return (
    <CollectionPage
      resource="leaderboard"
      title="Leaderboard"
      description="Current standings across teams and athletes."
      columns={columns}
    />
  );
}
