const express = require('express')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())


const logic = [
  {
    "id": 85,
    "path": ">:\\Er_UA:\\x1",
    "value": false,
    "quality": 28,
    "time": "2023-06-05T23:58:12.7074563+03:00",
    "type": "Boolean",
    "mode": "W"
  },
  {
    "id": 86,
    "path": ">:\\Er_UA:\\x2",
    "value": false,
    "quality": 28,
    "time": "2023-06-05T23:58:21.2642394+03:00",
    "type": "Boolean",
    "mode": "W"
  },
  {
    "id": 87,
    "path": ">:\\Er_UA:\\y",
    "value": false,
    "quality": 28,
    "time": "2023-06-05T23:58:21.2642394+03:00",
    "type": "Boolean",
    "mode": "U"
  },
  {
    "id": 91,
    "path": ">:\\Er_UA:\\x1",
    "value": false,
    "quality": 28,
    "time": "2023-06-05T23:58:21.2642394+03:00",
    "type": "Boolean",
    "mode": "W"
  },
  {
    "id": 92,
    "path": ">:\\Er_UC:\\x2",
    "value": false,
    "quality": 28,
    "time": "2023-06-05T23:58:21.2642394+03:00",
    "type": "Boolean",
    "mode": "W"
  },
  {
    "id": 93,
    "path": ">:\\Er_UA:\\y",
    "value": false,
    "quality": 28,
    "time": "2023-06-05T23:58:21.2642394+03:00",
    "type": "Boolean",
    "mode": "U"
  },
  {
    "id": 97,
    "path": ">:\\Er_UA:\\x1",
    "value": false,
    "quality": 28,
    "time": "2023-06-05T23:58:21.2642394+03:00",
    "type": "Boolean",
    "mode": "W"
  },
  {
    "id": 98,
    "path": ">:\\Er_UC:\\x2",
    "value": false,
    "quality": 28,
    "time": "2023-06-05T23:58:21.2642394+03:00",
    "type": "Boolean",
    "mode": "W"
  },
  {
    "id": 99,
    "path": ">:\\Er_UA:\\y",
    "value": false,
    "quality": 28,
    "time": "2023-06-05T23:58:21.2642394+03:00",
    "type": "Boolean",
    "mode": "U"
  }
]



app.get('/', (req, res) => {

  res.json(logic)
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))