//Arrays of Sounds
var keySounds = [new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_M09FWVRmcTNUcmc'), new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_bHpVZDB2UG1HaDg'), new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_V2V1UkJDUTMwLW8'), new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_WUZHbURaWVJOUEE'), new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_S1FDVGY4Tl9EMGM'), new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_NEMta19jZnd1WmM'), new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_SGpfQlV0WnpmMFk'), new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_SHZQemdWQy1pX0U'), new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_b3oyZV9LNW1TcnM'), new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_d056bGxZQkN6VjQ'), new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_VGd6LWpWMm0zaG8'), new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_a1hkZUE0dGdtRFU')] 

var uiSounds = [new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_cVJyWlZ5X0s2dHc'), new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_ZWx1ZzFQZnJYU2M'), new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_XzhUTHkwZlVocjg'), new Audio('https://drive.google.com/uc?export=download&id=0Bw2029NKQAh_dDJtNVNaYVExNnM')]

//Variables that control the setting
var songNumber = 0
var playing = false
var on = false
var playerPiano = false

//Song notes and note durations
var hotCrossBuns = [6, 5, 4, 6, 5, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 5, 4]
var hcbTimes = [0.75, 0.75, 1.5, 0.75, 0.75, 1.5, 0.375, 0.375, 0.375, 0.375, 0.375, 0.375, 0.375, 0.375, 0.75, 0.75, 1.5]

var oldMacDonald = [4, 4, 4, 1, 2, 2, 1, 6, 6, 5, 5, 4, 1, 4, 4, 4, 1, 2, 2, 1, 6, 6, 5, 5, 4, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 2, 2, 1, 6, 6, 5, 5, 4]
var omTimes = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 1.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 1.5, 0.25, 0.25, 0.5, 0.5, 0.5, 0.25, 0.25, 0.5, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 2]

var blackSheep = [0, 0, 4, 4, 5, 5, 5, 5, 4, 3, 3, 2, 2, 1, 1, 0, 4, 4, 4, 3, 3, 2, 2, 2, 1, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 1, 0, 0, 4, 4, 5, 5, 5, 5, 4, 3, 3, 2, 2, 1, 1, 0]
var bsTimes = [0.5, 0.5, 0.5, 0.5, 0.25, 0.25, 0.25, 0.25, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.25, 0.25, 0.5, 0.5, 0.5, 0.25, 0.25, 1, 0.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.25, 0.25, 1, 0.5, 0.5, 0.5, 0.5, 0.25, 0.25, 0.25, 0.25, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1]

var jingleBells = [2, 2, 2, 2, 2, 2, 2, 4, 0, 1, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 2, 1, 4, 2, 2, 2, 2, 2, 2, 2, 4, 0, 1, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 4, 4, 3, 1, 0]
var jbTimes = [0.5, 0.5, 1, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 2, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 1, 1, 0.5, 0.5, 1, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 2, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 2]

var allThroughTheNight = [6, 5, 5, 4, 4, 6, 6, 5, 5, 4, 4, 4, 5, 5, 6, 6, 5, 4, 4, 5, 5, 6, 6, 5, 6, 5, 5, 4]
var attnTimes = [1, 0.5, 0.5, 1.5, 0.5, 0.5, 0.5, 0.5, 0.5, 2, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 1, 0.5, 0.5, 2]

//Song Info
var songTitleArray = ['Hot Cross Buns', 'Old MacDonald', 'Black Sheep', 'Jingle Bells', 'All Through The Ni.']
var songInfoArray = [[hotCrossBuns, hcbTimes], [oldMacDonald, omTimes], [blackSheep, bsTimes], [jingleBells, jbTimes], [allThroughTheNight, attnTimes]]

//Function that automatically plays piano. Recursive Function
function playNotes(notes, durations, i){
  if (i < notes.length && on == true){
      keySounds[notes[i]].play()
      keyAnimation(notes[i])
      var counter = i;
      (function (notes, durations, i, counter) {
        keySounds[notes[i]].ontimeupdate = function(){
          if (keySounds[notes[i]].currentTime > durations[i]){
            endKeyAnimation(notes[i])
            keySounds[notes[counter]].currentTime = 0
            keySounds[notes[counter]].pause()
            counter = counter + 1
            playNotes(notes, durations, counter)
          }
        }
      })(notes, durations, i, counter)
  }else {
    $('#bottom').text('')
    playing = false
  }
}

//Key animation when pressed
function keyAnimation(number){
  var $element = $('[data-number = ' + number + ']')
  
  if (parseInt(number) <= 6){
    $element.addClass('whiteActive')
  } else{
    $element.addClass('blackActive')
  }
}

//End key animation when released
function endKeyAnimation(number){
  var $element = $('[data-number = ' + number + ']')
  
  if (parseInt(number) <= 6){
    $element.removeClass('whiteActive')
  }else {
    $element.removeClass('blackActive')
  }
}

//Power button event handler
$('#powerButton').on('click', function(){
  uiSounds[2].play()
  if (on == true){
    on = false
    $('#top > h3').text('')
    $('#bottom').text('')
    $('#sideScreen').text('') 
  } else{
    on = true
    uiSounds[0].play()
    $('#top > h3').text('Keyboard App')
    if (playerPiano == true){
      $('#sideScreen').text(songTitleArray[songNumber])
      $('#bottom').text('Player Piano Mode is on')
      setTimeout(function(){
        $('#bottom').text('')
      }, 1000)
    }
  }
})

//Toggle Song Selection
$('.songButton').on('click', function(){
  uiSounds[2].play()
  if (on == true){
    var id = $(this).attr('id')
    if (id == 'up'){
      if (songNumber == songTitleArray.length - 1){
        songNumber = 0
      }else {
        songNumber++
      }
    } else if(songNumber == 0){
        songNumber = songTitleArray.length - 1;
      }else{
        songNumber--;
      }
    $('#sideScreen').text(songTitleArray[songNumber])
  }
})

//Plays keysound when key is pressed
$('.whiteKey, .blackKey').on('mousedown', function(){
  if (on == true){
    if (playerPiano == false){
      var number = $(this).attr('data-number')
      keySounds[number].play()

      $(this).on('mouseup', function(){
        keySounds[number].currentTime = 0
        keySounds[number].pause()
      })
    }else {
      alert('If you want to play the piano normally turn off player piano mode')
    }
  }
})

//Starts playing a song
$('#startButton').on('click', function(){
  if (on == true && playerPiano == true && playing == false){
    playing = true
    playNotes(songInfoArray[songNumber][0], songInfoArray[songNumber][1], 0)  
    $('#bottom').text('Playing ' + songTitleArray[songNumber])
  }
  uiSounds[2].play()
})

//Turn on/off
$('input[value="pianoSwitch"]').on('change', function(){
  uiSounds[2].play()
  if (on == true){
  if ($(this).is('input:checked')){
    playerPiano = true
    $('#sideScreen').text(songTitleArray[songNumber])
    $('#bottom').text('Player Piano Mode has been turned on')
    setTimeout(function(){
      $('#bottom').text('')}, 1000
    )
  } else{
    playerPiano = false
    $('#bottom').text('Player Piano Mode has been turned off')
    $('#sideScreen').text('')
    setTimeout(function(){
      $('#bottom').text('')}, 1000
    )
  }
  }
})
