import CollectionPage from './CollectionPage';

const columns = [
  { key: 'displayName', label: 'Name' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'fitnessGoal', label: 'Goal' },
  { key: 'preferredWorkout', label: 'Preferred Workout' },
];

export default function Users() {
  return (
    <CollectionPage
      resource="users"
      title="Users"
      description="Member profiles and training preferences."
      columns={columns}
    />
  );
}
