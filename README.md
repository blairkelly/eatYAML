# eatYAML
Turn YAML into JSON. 

I needed the YAML output of imagemagick processes in JSON format. The YAML parsers I found on NPM kek'd on the regular.

So... I wrote eatYAML.

I'm not sure this is to spec. 

It does what I need it to do.

So there.

EatYAML.

# ex:
(untested example written from brain)

var yamlString = '
hi:
  i: "like"
  you: true
  nice:
    mangos: "ya got"
    there: "gary"
  harassment: false
';

var newJsonObject = eatYAML(yamlString);

console.log(newJsonObject['nice']['there']);  // gary
