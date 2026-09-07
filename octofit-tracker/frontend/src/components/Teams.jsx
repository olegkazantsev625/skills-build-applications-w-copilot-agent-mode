import CollectionPage from './CollectionPage';

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'city', label: 'City' },
  { key: 'mascot', label: 'Mascot' },
  { key: 'memberUsernames', label: 'Members' },
  { key: 'weeklyGoalMinutes', label: 'Weekly Goal' },
];

export default function Teams() {
  return (
    <CollectionPage
      resource="teams"
      title="Teams"
      description="Team rosters, cities, and weekly activity goals."
      columns={columns}
    />
  );
}
