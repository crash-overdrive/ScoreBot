function getRandomIntExclusive(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * max); // The maximum is inclusive and the minimum is inclusive
}

const dict = {0 : 0, 1:0, 2:0, 3:0, 4:0, 5:0}
for (let index=1; index <= 100000000 ; ++index) {
  dict[getRandomIntExclusive(5)] += 1
}
console.log(dict);