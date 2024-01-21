import scores from './scores.json'

function getScore(ingredients) {
  // Simply find average of all scores, ignore ingredient not in scores.json
  // ingredients is a list of strings
  let totalScore = 0
  let count = 0
  for (let i = 0; i < ingredients.length; i++) {
    const ingredient = ingredients[i]
    if (ingredient in scores) {
      totalScore += scores[ingredient]
      count++
    }
  }

  return totalScore / count
}

export default getScore
