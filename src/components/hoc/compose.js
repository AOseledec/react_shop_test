export const compose = (...funcs) => (comp) => {
  return funcs.reduceRight((prev, f) => f(prev), comp)
}