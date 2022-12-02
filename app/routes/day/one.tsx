import { useLoaderData } from '@remix-run/react';
import data from '~/data/one.txt';

export async function loader() {
  const calorieTotals = getCalorieTotals();

  const result = {
    partOne: dayOneChallengeOne(calorieTotals),
    partTwo: dayOneChallengeTwo(calorieTotals),
  };

  return result;
}

export default function One() {
  const result = useLoaderData();
  console.log(result);

  return (
    <div>
      <h1>Day 1</h1>
      <h2>Challenge 1</h2>
      <p>Answer: {result.partOne}</p>
      <h2>Challenge 2</h2>
      <p>Answer: {result.partTwo}</p>
    </div>
  );
}

function getCalorieTotals() {
  const calorieStringGroups: string[] = data.split('\n\n');

  const calorieGroups = calorieStringGroups.map((stringGroup) =>
    stringGroup.split('\n').map(Number)
  );

  const calorieTotals = calorieGroups.map((calories) =>
    calories.reduce((sum, current) => sum + current)
  );

  return calorieTotals;
}

function dayOneChallengeOne(calorieTotals: number[]) {
  return Math.max(...calorieTotals);
}

function dayOneChallengeTwo(calorieTotals: number[]) {
  const sortedTotals = [...calorieTotals].sort((a, b) => a - b);

  const topThreeTotals = sortedTotals.slice(-3);

  return topThreeTotals.reduce((sum, current) => sum + current);
}
