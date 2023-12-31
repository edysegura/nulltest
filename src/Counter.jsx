import Nullstack from 'nullstack'

import fs from 'fs'
import path from 'path'

class Counter extends Nullstack {
  count = 0

  static async getDatabaseFile({ environment }) {
    const folder = environment.production ? '.production' : '.development'
    return path.join(process.cwd(), folder, 'count.json')
  }

  static async getCount() {
    const response = await fetch('https://ipapi.co/json')
    const ipAPIjson = await response.json()
    console.log('ipAPIjson', ipAPIjson, this)
    const databaseFile = await this.getDatabaseFile()
    if (fs.existsSync(databaseFile)) {
      const json = fs.readFileSync(databaseFile, 'utf-8')
      console.log('json', json)
      return JSON.parse(json).count
    }
    return 0
  }

  async initiate() {
    console.log('initiate on example', this)
    this.count = await this.getCount()
  }

  async hydrate() {
    console.log('hydrate on example', this)
  }

  static async setCount({ count }) {
    // const databaseFile = await this.getDatabaseFile()
    // const json = JSON.stringify({ count })
    // return fs.writeFileSync(databaseFile, json)
    const response = await fetch('https://ipapi.co/json')
    const ipAPIjson = await response.json()
    console.log('ipAPIjson', ipAPIjson)
    console.log('count', count)
  }

  increment() {
    this.count++
    this.setCount({ count: this.count })
  }

  render() {
    return (
      <button onclick={this.increment} class="bg-pink-700 text-white py-4 w-full mt-4">
        this.count = {this.count}
      </button>
    )
  }
}

export default Counter
