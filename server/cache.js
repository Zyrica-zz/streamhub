export default function createCache(getter, duration) {
  let data = []
  let lastCall = new Date().getTime()

  updateData()

  async function updateData() {
    data = await getter()
  }

  function get() {
    const now = new Date().getTime()
    if (now - lastCall >= duration) {
      lastCall = now
      updateData()
    }
    return data
  }

  return get
}
