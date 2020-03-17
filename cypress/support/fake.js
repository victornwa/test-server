import f from 'faker'

export default () =>
  `${f.random.word()} ${f.commerce.product()} ${f.random.number()}`