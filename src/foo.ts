export type Foo = { foo: string; bar: string }

export function foo<T>(input: T) {
  console.log("bar", input)
}
