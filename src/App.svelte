<script>
  import { get } from 'axios'
  let response = 'No response yet'
  async function init() {
    const { data } = await get('/api')
    response = data
    console.log('got', data)
  }
  init()

</script>

<style>

</style>

<h1>
  { response }
</h1>
