import CollectionPage from './CollectionPage';

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'focusArea', label: 'Focus' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'equipment', label: 'Equipment' },
  { key: 'suggestedForGoal', label: 'Suggested Goal' },
];

export default function Workouts() {
  return (
    <CollectionPage
      resource="workouts"
      title="Workouts"
      description="Suggested workouts aligned to member goals."
      columns={columns}
    />
  );
}
