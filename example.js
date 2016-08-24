var yamlString = '\n\
hi:\n\
  i: like\n\
  you: true\n\
  nice:\n\
    mangos: ya got\n\
    there: gary\n\
  harassment: false\n\
';

var newJsonObject = eatYAML(yamlString);
console.log(newJsonObject['hi']['nice']['there']);  // gary
