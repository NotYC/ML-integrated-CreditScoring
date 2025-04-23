export function getScoreColor(score) {
  if (score < 300 || score > 850) return 'text-gray-500';
  else if (score >= 800) return 'text-green-800';
  else if (score >= 740) return 'text-green-700';
  else if (score >= 670) return 'text-green-600';
  else if (score >= 580) return 'text-yellow-800';
  else return 'text-red-600';
}

export function getRatingBadge(score) {
  if (score < 300 || score > 850) return { text: "Invalid", bg: 'bg-gray-100', textColor: 'text-gray-600' };
  else if (score >= 800) return { text: "Exceptional", bg: 'bg-green-200', textColor: 'text-green-900' };
  else if (score >= 740) return { text: "Very Good", bg: 'bg-green-100', textColor: 'text-green-800' };
  else if (score >= 670) return { text: "Good", bg: 'bg-yellow-100', textColor: 'text-green-700' };
  else if (score >= 580) return { text: "Fair", bg: 'bg-orange-100', textColor: 'text-orange-700' };
  else return { text: "Poor", bg: 'bg-red-100', textColor: 'text-red-700' };
}