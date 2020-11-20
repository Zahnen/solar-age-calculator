import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import User from './js/ageCalc.js';

$(document).ready(function() {
  $('#userForm').submit(function(event) {
    event.preventDefault();
    const name = $('#name').val();
    const age = $('#age').val();
    const user = new User(name, age);
    const mercAge = (user.mercCalc());
    const mercExpAge = (user.mercExpCalc());
    const venusAge = (user.venusCalc());
    const venusExpAge = (user.venusExpCalc());
    const marsAge = (user.marsCalc());
    const marsExpAge = (user.marsExpCalc());
    const jupAge = (user.jupCalc());
    const jupExpAge = (user.jupExpCalc());
    const mercOldAge = (user.mercExpCalc() * -1);
    const venusOldAge = (user.venusExpCalc() * -1);
    const marsOldAge = (user.marsExpCalc() * -1);
    const jupOldAge = (user.jupExpCalc() * -1);
    if (age < 72.2) {
      $('#planetResults').fadeIn();
      $('#tooOldResults').hide();
      $('.userName').html(` ${name}`);
      $('.mercAge').html(` ${mercAge}`);
      $('#mercExpAge').html(` ${mercExpAge}`);
      $('.venusAge').html(` ${venusAge}`);
      $('#venusExpAge').html(` ${venusExpAge}`);
      $('.marsAge').html(` ${marsAge}`);
      $('#marsExpAge').html(` ${marsExpAge}`);
      $('.jupAge').html(` ${jupAge}`);
      $('#jupExpAge').html(` ${jupExpAge}`);
    } else {
      $('#tooOldResults').fadeIn();
      $('#planetResults').hide();
      $('.userName').html(` ${name}`);
      $('.mercAge').html(` ${mercAge}`);
      $('#mercOldAge').html(` ${mercOldAge}`);
      $('.venusAge').html(` ${venusAge}`);
      $('#venusOldAge').html(` ${venusOldAge}`);
      $('.marsAge').html(` ${marsAge}`);
      $('#marsOldAge').html(` ${marsOldAge}`);
      $('.jupAge').html(` ${jupAge}`);
      $('#jupOldAge').html(` ${jupOldAge}`);
    }
  });
});