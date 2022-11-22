import Generator from 'react-router-sitemap-generator'
import Router from './src/App.js'

const generator = new Generator(
  'https://mern-todos-app-adn-client.netlify.app',
  Router(),
  {
    lastmod: new Date().toISOString().slice(0, 10),
    changefreq: 'monthly',
    priority: 0.8,
  }
)
generator.save('public/sitemap.xml')
