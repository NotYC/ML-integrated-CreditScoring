export function getScoreColor(score) {
  if (score < 300 || score > 850) return 'text-gray-500';
  else if (score >= 800) return 'text-green-800';
  else if (score >= 740) return 'text-green-700';
  else if (score >= 670) return 'text-green-600';
  else if (score >= 580) return 'text-yellow-800';
  else return 'text-red-600';
}