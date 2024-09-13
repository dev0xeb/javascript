let id = '1'
let available = 'true'
let count = '6'
let name = 'Mystery'
let author = 'Miracle'

let new_id = Number(id)
let new_count = Number(count)
let new_available = Boolean(available)

const ans = {
}

ans.id = new_id
ans.available = new_available
ans.count = new_count
ans.name = name
ans.author = author

console.log(ans)
