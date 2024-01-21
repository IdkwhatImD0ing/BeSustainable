import scores from './scores.json'

function getScore(ingredient) {
  // Simply find average of all scores, ignore ingredient not in scores.json
  let totalScore = 0
  let count = 0
  for (const key in ingredient) {
    if (scores[key]) {
      totalScore += scores[key]
      count++
    }
  }
  return totalScore / count
}

export default getScore
