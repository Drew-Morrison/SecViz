//Create Ex. Challenge Visualization
var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['192.168.0.0', 30, 20, 50, 40, 50, 25, 50, 24, 10, 40, 15, 25, 5, 6, 12, 43, 12, 4, 5],
        ['178.16.0.0', 50, 24, 10, 40, 15, 25, 10, 20, 10, 30, 10, 15, 25, 50, 10, 10, 40, 15, 25, 20, 10],
        ['179.16.0.0', 50, 10, 100, 40, 15, 25, 50, 10, 10, 40, 15, 25, 20, 10, 30, 10, 15, 50, 20, 10, 4, 5],
        ['255.67.8.12', 10, 20, 10, 30, 10, 15, 50, 20, 10, 4, 5, 5, 20, 10, 4, 300, 5, 6, 12, 43, 12, 4, 5],
        ['8.8.8.8', 5, 20, 10, 4, 30, 5, 6, 12, 43, 12, 4, 5, 5, 6, 12, 43, 12, 4, 5]
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

//Check Ex. Challenge Answer
function checkAns() {
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
function nxtQ() {
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
function changeViz() {
  let viz_button = document.getElementById('change_viz_button');
  let viz_num = document.getElementById('viz_number');
  let chart_1 = document.getElementById('chart');
  let chart_2 = document.getElementById('chart2');

  if (viz_button.innerText === "Next") {
    viz_button.innerText = "Prev";
    viz_num.innerText = "2 out of 2";
    chart_1.style.display = "none";
    chart_2.style.display = "block";
  } else {
    viz_button.innerText = "Next";
    viz_num.innerText = "1 out of 2";
    chart_1.style.display = "block";
    chart_2.style.display = "none";
  }
  
}