// Step 1: Set options for the neural network
var options = {
  dataUrl: "animals.csv",
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
  outputs: ["type"],
  task: "classification",
  debug: "true"
};

// Step 2: Make a neural network with the options
const neuralNetwork = ml5.neuralNetwork(options, modelLoaded);

function modelLoaded() {
  // Step 3: Normalize the data
  neuralNetwork.data.normalize();

  // Step 4: Set training options
  const trainingOptions = {
    epochs: 100,
    batchSize: 12
  };

  // Step 5: Train the model
  neuralNetwork.train(trainingOptions, finishedTraining);
}

// Step 6: Save the trained data
function finishedTraining() {
  neuralNetwork.save(finishedSaving);
}

// Step 7: We're done!
function finishedSaving() {
  console.log("Done!");
}
