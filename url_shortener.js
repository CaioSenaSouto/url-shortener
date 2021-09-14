function makeid(length) {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

var urls = {
  UsbHj: 'linkedin.com'
}

function shorten_url(url) {
  var new_id = makeid(5)
  urls[new_id] = url
  return new_id
}

var id1 = shorten_url('google.com')
shorten_url('amazon.com')

console.log(urls[id1])
console.log()
console.log(urls)
