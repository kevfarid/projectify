import HelloWorld from './helloworld.model'

export const showMessage = (_, res) => {
  const newHelloWorld = new HelloWorld('Hello World')
  return res.status(200).json(newHelloWorld)
}
