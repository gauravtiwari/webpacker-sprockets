/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import '../../stylesheets/pages.scss'
import 'bootstrap/dist/css/bootstrap.css'

console.log('I am from pages pack')

document.addEventListener('DOMContentLoaded', () => {
  const element = document.body.appendChild(document.createElement('p'))
  element.setAttribute('class', 'page-bar alert alert-success')
  const content = document.createTextNode("Hi there and welcome to webpacker!");
  element.appendChild(content); //add the text node to the newly created div.
})
