// const dailyBtn = document.getElementById("daily-button")
// const weeklyBtn = document.getElementById("weekly-button")
// const monthlyBtn = document.getElementById("monthly-button")
const daily = document.querySelectorAll(".daily")
const weekly = document.querySelectorAll(".weekly")
const monthly = document.querySelectorAll(".monthly")
const currentWork = document.querySelectorAll(".current_work")
const previousWork = document.querySelectorAll(".previous_work")
const currentPlay = document.querySelectorAll(".current_play")
const previousPlay = document.querySelectorAll(".previous_play")
const currentStudy = document.querySelectorAll(".current_study")
const previousStudy = document.querySelectorAll(".previous_study")
const currentExercise = document.querySelectorAll(".current_exercise")
const previousExercise = document.querySelectorAll(".previous_exercise")
const currentSocial = document.querySelectorAll(".current_social")
const previousSocial = document.querySelectorAll(".previous_social")
const currentSelf = document.querySelectorAll(".current_self")
const previousSelf = document.querySelectorAll(".previous_self")


let data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

const buttons = document.querySelectorAll('.activity-tracker_option')


const activeTime = (button) => {
  buttons.forEach(b => b.classList.remove('active'))
  button.classList.add('active')
}

const renderCards = (clickedOption) => {

  const calcTimeFrame = (option) => {
    if (option === 'daily') {
      return 'Yesterday'
    }
    else if (option === 'weekly') {
      return 'Last week'
    }
    else if (option === 'monthly') {
      return 'Last month'
    }

  }

  data.forEach(activity => {
    const name = activity.title
    const activityClass = name.toLowerCase().replace(' ', '-')
    const timeframeData = activity.timeframes[clickedOption]
    const previousTimeframe = calcTimeFrame(clickedOption)
    console.log(timeframeData)    
    switch(name) {
      case 'Work':
        currentWork[0].innerHTML = `${timeframeData.current}`;
        previousWork[0].innerHTML = `${previousTimeframe}: ${timeframeData.previous}`;
        break;
      case 'Play':
        currentPlay[0].innerHTML = `${timeframeData.current}`;
        previousPlay[0].innerHTML = `${previousTimeframe}: ${timeframeData.previous}`;
        break;
      case 'Study':
        currentStudy[0].innerHTML = `${timeframeData.current}`;
        previousStudy[0].innerHTML = `${previousTimeframe}: ${timeframeData.previous}`;
        break;
      case 'Exercise':
        console.log('Updating Exercise...');
        currentExercise[0].innerHTML = `${timeframeData.current}`;
        previousExercise[0].innerHTML = `${previousTimeframe}: ${timeframeData.previous}`;
        break;
      case 'Social':
        currentSocial[0].innerHTML = `${timeframeData.current}`;
        previousSocial[0].innerHTML = `${previousTimeframe}: ${timeframeData.previous}`;
        break;
      case 'Self Care':
        currentSelf[0].innerHTML = `${timeframeData.current}`;
        previousSelf[0].innerHTML = `${previousTimeframe}: ${timeframeData.previous}`;
        break;
    }


  }
  )
}





buttons.forEach(button => {
  button.addEventListener('click', () => { activeTime(button)
    const clickedOption = button.dataset.option 
    renderCards(clickedOption)
    
})
  
})

// function dailyView() {
//     daily.forEach(el => {
//         el.classList.remove('hide');
//     });
//     weekly.forEach(el => {
//         el.classList.add('hide')
//     });
//     monthly.forEach(el => {
//         el.classList.add('hide')
//     });
// }
// dailyBtn.onclick = dailyView;

// function weeklyView() {
//     weekly.forEach(el => {
//         el.classList.remove('hide')
//     })
//     daily.forEach(el => {
//         el.classList.add('hide')
//     })
//     monthly.forEach(el => {
//         el.classList.add('hide')
//     })
// }
// weeklyBtn.onclick = weeklyView;

// function monthlyView() {
//     monthly.forEach(el => {
//         el.classList.remove('hide')
//     })
//     daily.forEach(el => {
//         el.classList.add('hide')
//     })
//     weekly.forEach(el => {
//         el.classList.add('hide')
//     })
// }
// monthlyBtn.onclick = monthlyView;


/*fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })*/

  
