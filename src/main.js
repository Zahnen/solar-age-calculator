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
    $('#planetResults').show();
    $('.userName').append(name)
  });
});