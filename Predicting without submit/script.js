var options = {
  type: "regression",
  debug: true,
};

var modelDetails = {
  model: "model/model.json",
  metadata: "model/model_meta.json",
  weights: "model/model.weights.bin",
}

var neuralNetwork = ml5.neuralNetwork(options);
neuralNetwork.load(modelDetails, ready);

function ready() {
  console.log("Model loaded successfully!");
}

function predict() {
  var active = document.querySelector("[name='Active']").value;
  var rest = document.querySelector("[name='Rest']").value;
  var exercise = document.querySelector("[name='Exercise']").value;
  var hgt = document.querySelector("[name='Height']").value;
  var smoke = document.querySelector("[name='Smoke']:checked").value;
  var gender = document.querySelector("[name='Gender']:checked").value;

  var inputs = {
    Active: parseInt(active),
    Rest: parseInt(rest),
    Exercise: parseInt(exercise),
    Hgt: parseInt(hgt),
    Smoke: parseInt(smoke),
    Gender: parseInt(gender)
  };

  console.log(inputs);

  neuralNetwork.predict(inputs, function (error, results) {
    if (error) {
      console.log(error);
      return;
    }

    console.log(results[0]);

    document.querySelector("#result").innerHTML =
      'We predict a weight of ' + results[0].Wgt.toFixed(2) + ' lbs';

  });
}