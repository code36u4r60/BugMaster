import path from 'node:path'
import express from 'express'
import hbs from 'hbs'
import { GetActivityParams } from './core/Activity/ListActivityParams.js'
import { CreateActivity } from './core/Activity/CreateActivity.js';
import { FetchActivity } from './core/Activity/FetchActivity.js';
import { FetchAllAnalytics } from './core/Analytics/FetchAllAnalytics.js';
import { ListAnalytics } from './core/Analytics/ListAnalytics.js';


const app = express()
app.use(express.json());

// Define paths for Express config
const publicDirectoryPath = path.join(import.meta.dirname, '../public')
const viewsPath = path.join(import.meta.dirname, '../templates/views')
const partialsPath = path.join(import.meta.dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index')
})

app.get('/activity-configuration', (req, res) => {
    res.render('config')
})

// Server API 
/**
 *  json_params_url: URL para um Web service que devolve uma lista em formato JSON,
 * identificando os elementos dessa página de configuração onde a
 * Inven!RA pode recolher os valores de configuração nela definidos;
 */
app.get('/json-params', GetActivityParams)

// ------- Activity -------

/** user_url: URL para um Web service que permite efetuar o
 * deploy da atividade, recebendo como parâmetro uma
 * identificação da instância na Inven!RA;
 */
app.post('/create-activity', CreateActivity);
app.get('/create-activity',  (req, res) => {res.render('create_activity')});
app.get('/fetch-activity/:activityID', FetchActivity);
app.get('/fetch-activity/*', FetchActivity);


// ------- Analytics -------
/** analytics_url: URL para um Web service que devolve os valores
 * dos analytics de todos os utilizadores de uma instância da
 * atividade na Inven!RA, fornecida como parâmetro;
 */
app.get('/analytics', (req, res) => {res.render('analytics')})
app.get('/analytics/:activityID', FetchAllAnalytics)
app.get('/analytics/*', FetchAllAnalytics)

/** analytics_list_url: URL para um Web service que devolve
 * a lista de analytics que o Activity Provider recolherá;
 */
app.get('/list-analytics', ListAnalytics)


// 404 
app.get('*', (req, res) => { res.render('404') })





app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})