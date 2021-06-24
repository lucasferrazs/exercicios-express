const express = require ('express')
const app = express()
const saudacao = require ('./saudacaoMid')

require('./api/produto') (app, 'com param!')


app.use(saudacao )
app.use('/opa',(req,res) => {
  
     res.json({
        name: 'iPad 32Gb',
        price: 1899.00,
        discount: 0.12
    })
    res.send ('Deu Boa carai' )
})

app.listen(3000, () =>{
    console.log('BackEnd Deu Boa')
})
app.post('/corpo', (req,res) => {
    let corpo = ''
    req.on('data',function(parte){
        corpo += parte
    })

    req.on('end', function (){
        res.send(corpo)
    })
}