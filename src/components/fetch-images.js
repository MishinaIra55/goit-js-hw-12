import axios from 'axios'
export { fetchImages }

axios.defaults.baseURL = 'https://pixabay.com/api/'
const KEY = '31487728-a23d010ad4dc914c660c439a4'

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
  )
  return response
}