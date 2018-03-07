function countdownFrom(val) {
  if (val < 0) {
    return;
  }
  console.log(val);
  countdownFrom(val - 1);
}

countdownFrom(10);
