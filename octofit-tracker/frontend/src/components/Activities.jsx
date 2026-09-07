import CollectionPage from './CollectionPage';

const columns = [
  { key: 'activityDate', label: 'Date' },
  { key: 'username', label: 'User' },
  { key: 'activityType', label: 'Activity' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'caloriesBurned', label: 'Calories' },
  { key: 'notes', label: 'Notes' },
];

export default function Activities() {
  return (
    <CollectionPage
      resource="activities"
      title="Activities"
      description="Recent training sessions logged by OctoFit members."
      columns={columns}
    />
  );
}
