//Create Ex. Challenge Visualization
var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['192.168.0.0', 30, 20, 50, 40, 50, 25, 50, 24, 10, 40, 15, 25, 5, 60, 12, 4, 12, 4, 5, 10, 20, 32, 21],
        ['178.16.0.0', 50, 24, 100, 40, 15, 25, 10, 20, 100, 30, 10, 15, 25, 50, 10, 10, 40, 15, 25, 20, 10,23, 43],
        ['179.16.0.0', 50, 10, 100, 40, 15, 25, 50, 100, 10, 40, 15, 25, 20, 100, 30, 100, 15, 50, 20, 100, 40, 50, 45],
        ['255.67.8.12', 10, 20, 10, 30, 10, 15, 50, 20, 10, 4, 50, 5, 20, 10, 4, 150, 50, 6, 12, 43, 12, 4, 5],
        ['8.8.8.8', 50, 20, 10, 40, 30, 50, 60, 12, 43, 12, 40, 5, 50, 6, 12, 43, 12, 4, 5, 6, 5, 43, 23]
      ]
    },
    axis: {
      x: {
          label: 'Time Elapsed (24hr-Clock)'
      },
      y: {
          label: 'Packets/Hr'
      },
  }
});

//Filter by Category for all_challenges
function filterCategory(fltr) {
  var fltrLst;
  fltrLst = document.getElementsByClassName("challenge");
  
  for (i = 0; i < fltrLst.length; i++) {
    let cat = fltrLst[i].firstElementChild.lastElementChild.previousElementSibling.innerHTML;

    if (fltr === cat) {
      fltrLst[i].style.display = 'block';
    } else {
      fltrLst[i].style.display = 'none';
    }
  }
  shiftCards(fltrLst);
  colorCards();
}

//Filter by Difficulty for all_challenges
function filterDifficulty(fltr) {
  var fltrLst;
  fltrLst = document.getElementsByClassName("challenge");
  
  for (i = 0; i < fltrLst.length; i++) {
    let dif = fltrLst[i].firstElementChild.lastElementChild.firstElementChild.innerHTML;
    if (dif.includes(fltr)) {
      fltrLst[i].style.display = 'block';
    } else {
      fltrLst[i].style.display = 'none';
    }
  }
  shiftCards2(fltrLst, fltr);
  colorCards();
}

//Colors cards post shifting
function colorCards() {
  var fltrLst, fltrLst2;
  fltrLst = document.getElementsByClassName("wip");
  fltrLst2 = document.getElementsByClassName("fin");


  for (i = 0; i < fltrLst.length; i++) {
    fltrLst[i].parentElement.style.backgroundColor = 'lightgrey';
  }
  for (i = 0; i < fltrLst2.length; i++) {
    fltrLst2[i].parentElement.style.backgroundColor = 'white';
  }
}

//Clear Filters for all_challenges
function clearFilter() {
  var fltrLst;
  fltrLst = document.getElementsByClassName("challenge");
  
  for (i = 0; i < fltrLst.length; i++) {
    fltrLst[i].style.display = 'block';
  }
}

function shiftCards(fltrLst) {
  let cNum = "chlng";
  for (i = 0; i < fltrLst.length; i++) {
    if (fltrLst[i].style.display === 'block') {
      for (j = 0; j < fltrLst.length; j++) {
        if (fltrLst[j].style.display === 'none' && fltrLst[i].firstElementChild.firstElementChild != fltrLst[j].firstElementChild.firstElementChild) {
          let shift = document.getElementById(cNum + i);
          let old = document.getElementById(cNum + j);
          let oldVal = old.firstElementChild;

          old.replaceChild(shift.firstElementChild, oldVal);
          old.style.display = 'block';
          shift.style.display = 'none';
          shift.appendChild(oldVal);
          break;
        } else if (fltrLst[i].firstElementChild.lastElementChild.previousElementSibling.innerHTML === fltrLst[j].firstElementChild.lastElementChild.previousElementSibling.innerHTML && fltrLst[i].firstElementChild.lastElementChild.previousElementSibling != fltrLst[j].firstElementChild.lastElementChild.previousElementSibling) {
        } else {
          break;
        }
      }
    }
  }
}

function shiftCards2(fltrLst, fltr) {
  let cNum = "chlng";
  for (i = 0; i < fltrLst.length; i++) {
    if (fltrLst[i].style.display === 'block') {
      for (j = 0; j < fltrLst.length; j++) {
        if (fltrLst[j].style.display === 'none' && fltrLst[i].firstElementChild.firstElementChild != fltrLst[j].firstElementChild.firstElementChild) {
          let shift = document.getElementById(cNum + i);
          let old = document.getElementById(cNum + j);
          let oldVal = old.firstElementChild;

          old.replaceChild(shift.firstElementChild, oldVal);
          old.style.display = 'block';
          shift.style.display = 'none';
          shift.appendChild(oldVal);

          break;
        } else if (fltrLst[i].firstElementChild.lastElementChild.firstElementChild.innerHTML.includes(fltr)) {
        } else {
          break;
        }
      }
    }
  }
}

//Check Ex. Challenge Answer
function checkAns1() {
  ans = document.f1.ans.value;
  if (ans.length == 0) {
    alert("Please enter an answer before submitting.");
    return false;
  }

  if (ans === "255.67.8.12" || ans === "RDP") {
    let myModal = new bootstrap.Modal(document.getElementById('ansModal'), {});
    myModal.show();
  } else {
    alert("Good guess, but not quite right!");
    return false;
  }
}

//WIP, pressing Enter in answer box is valid
document.getElementById("ansForm")
  .onsubmit(function(event) {
    event.preventDefault();
    console.log("check");
    checkAns();
  });

//Next Question
function nxtQ1() {
  //Changing Question
  document.getElementById("qNum").innerHTML = "Question 2 of 2";
  document.getElementById("qTxt1").innerHTML = "Now with the source IP found, we can focus on gaining more information on the adversary.";
  document.getElementById("qTxt2").innerHTML = "What <b>protocol</b> is the traffic coming from?";
  document.getElementById("ansTxt").setAttribute("placeholder", "Protocol");
  document.getElementById("ansTxt").value = "";
  
  //Changing Modal for Finishing Challenge
  document.getElementById("mdlTxt").innerHTML = "Exquisite work! Click the 'Finish' to collect your points and return to the challenges page.";
  document.getElementById("mdlNxt").innerHTML = "Finish";
  document.getElementById("mdlNxt").setAttribute("onclick", "window.location.href='all_challenges.html'");
}

//Back Button, Finished Challenge


// Change Visualization
function changeViz1() {
  let viz_button = document.getElementById('change_viz_button');
  let viz_num = document.getElementById('viz_number');
  // Visualizations
  let chart_1 = document.getElementById('chart');
  let chart_2 = document.getElementById('chart2');

  if (viz_button.innerText === "Next") {
    viz_button.innerText = "Prev";
    viz_num.innerText = "2 out of 2";
    chart_1.style.display = "none";
    chart_2.style.display = "flex";
  } else {
    viz_button.innerText = "Next";
    viz_num.innerText = "1 out of 2";
    chart_1.style.display = "flex";
    chart_2.style.display = "none";
  }
  
}

// Check DHCP answer
function checkAns2() {
  ans = document.f1.ans.value;
  if (ans.length == 0) {
    alert("Please enter an answer before submitting.");
    return false;
  }

  if (ans === "7776000" || ans === "7200") {
    let myModal = new bootstrap.Modal(document.getElementById('ansModal'), {});
    myModal.show();
  } else {
    alert("Good guess, but not quite right!");
    return false;
  }
}

// Next Question for DHCP challenge
function nxtQ2() {
  //Changing Question
  document.getElementById("qNum").innerHTML = "Question 2 of 2";
  document.getElementById("qTxt1").innerHTML = "With the requested lease time discovered, we need to see what the DHCP server granted us.";
  document.getElementById("qTxt2").innerHTML = "How long is the lease (in seconds) that the server granted us?";
  document.getElementById("ansTxt").setAttribute("placeholder", "Lease length (seconds)");
  document.getElementById("ansTxt").value = "";
  
  //Changing Modal for Finishing Challenge
  document.getElementById("mdlTxt").innerHTML = "Exquisite work! Click the 'Finish' to collect your points and return to the challenges page.";
  document.getElementById("mdlNxt").innerHTML = "Finish";
  document.getElementById("mdlNxt").setAttribute("onclick", "window.location.href='all_challenges.html'");
}

// Change Visualization for DHCP challenge
function changeViz2() {
  let viz_button = document.getElementById('change_viz_button');
  let viz_num = document.getElementById('viz_number');
  let chart_1 = document.getElementById('chart3');
  let chart_2 = document.getElementById('chart4');

  if (viz_button.innerText === "Next") {
    viz_button.innerText = "Prev";
    viz_num.innerText = "2 out of 2";
    chart_1.style.display = "none";
    chart_2.style.display = "flex";
  } else {
    viz_button.innerText = "Next";
    viz_num.innerText = "1 out of 2";
    chart_1.style.display = "flex";
    chart_2.style.display = "none";
  }
  
}