import express from 'express'
import path from 'path'

const app = express()
const port = 3000

app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/scheduler.html'))
})

app.get('/', (req, res) => {
  res.render('index', {
    mois: mois,
    jours: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
    firstMonday: date,
    students: {
      1: "Robert",
      4: "Edmond",
      8: "Bernard",
      11: "René",
      15: "Germaine",
      18: "Enguerrand",
      22: "Fernand",
      25: "Henry"
    } 
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})











let date = new Date(Date.now())
let options: any = { month: 'long'};
let mois = new Intl.DateTimeFormat('fr-FR', options).format(date)
mois = mois.charAt(0).toUpperCase() + mois.slice(1);

function getFirstMonday(date: Date) {
  let day = date.getDay()  
  let monthDay = date.getDate()
  let firstMonday = (monthDay + 1) % 7 - day

  return firstMonday
}

getFirstMonday(date)
