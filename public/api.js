const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const url = form.action
  const formData = new FormData(form)
  const data = {}

  formData.forEach((value, key) => { data[key] = value })
  console.log(data)
  axios.post(url, data)
})
