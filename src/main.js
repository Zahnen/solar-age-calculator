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
    $('#planetResults').show();
    $('.userName').append(name);
    $('#mercAge').append(mercAge);
    $('#mercExpAge').append(mercExpAge);
    $('#venusAge').append(venusAge);
    $('#venusExpAge').append(venusExpAge);
    $('#marsAge').append(marsAge);
    $('#marsExpAge').append(marsExpAge);
    $('#jupAge').append(jupAge);
    $('#jupExpAge').append(jupExpAge);
  });
});