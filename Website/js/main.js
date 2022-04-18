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
    }
});

//Check Ex. Challenge Answer
function checkAns() {
  ans = document.f1.ans.value;
  if (ans.length == 0) {
    alert("Please enter an answer before submitting.");
    return false;
  }

  if (ans === "255.67.8.12") {
    let myModal = new bootstrap.Modal(document.getElementById('ansModal'), {});
    myModal.show();
  } else {
    alert("Good guess, but not quite right!");
    return false;
  }
}