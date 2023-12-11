export namespace Time {
  export function format(time: string[]) {
    return time.join('-')
  }
  export let name: string = 'coder'
}

export namespace Price {
  export function format(price: number) {
    return price.toFixed(2)
  }
}
