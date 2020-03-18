// Step 1: Set the options for the neural network
const options = {
  inputs: [
    "hair",
    "feathers",
    "eggs",
    "milk",
    "airborne",
    "aquatic",
    "predator",
    "toothed",
    "backbone",
    "breathes",
    "venomous",
    "fins",
    "legs",
    "tail"
  ],
  task: "classification"
};

// Step 2: Set the details of the trained model
const modelDetails = {
  model: "model/model.json",
  metadata: "model/model_meta.json",
  weights: "model/model.weights.bin"
};

// Step 3: Make a neural network with the options
const neuralNetwork = ml5.neuralNetwork(options);

// Step 4: Load the trained model
neuralNetwork.load(modelDetails);

function predict() {
  // Step 5: Set the inputs
  const inputs = {
    hair: document.querySelector("#hair").checked ? 1 : 0,
    feathers: document.querySelector("#feathers").checked ? 1 : 0,
    eggs: document.querySelector("#eggs").checked ? 1 : 0,
    milk: document.querySelector("#milk").checked ? 1 : 0,
    airborne: document.querySelector("#airborne").checked ? 1 : 0,
    aquatic: document.querySelector("#aquatic").checked ? 1 : 0,
    predator: document.querySelector("#predator").checked ? 1 : 0,
    toothed: document.querySelector("#toothed").checked ? 1 : 0,
    backbone: document.querySelector("#backbone").checked ? 1 : 0,
    breathes: document.querySelector("#breathes").checked ? 1 : 0,
    venomous: document.querySelector("#venomous").checked ? 1 : 0,
    fins: document.querySelector("#fins").checked ? 1 : 0,
    tail: document.querySelector("#tail").checked ? 1 : 0,
    legs: document.querySelector("#legs").value
  };

  // Step 6: Classify the output
  neuralNetwork.classify(inputs, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }

    // Step 7: Display the classification
    console.log(results[0]);
    document.querySelector("#results").innerHTML =
      "I'm " +
      Math.round(results[0].confidence * 100) +
      "% sure it's a " +
      results[0].label;
  });
}
