export default function getGradientCSSValue(gradient) {
  const gradientValues = gradient.colors.reduce((acc, obj, index) => acc + `${obj.value} ${obj.position}%${index + 1 !== gradient.colors.length ? "," : ""}`, "")

  return `linear-gradient(${gradient.angle}deg,${gradientValues});`
}