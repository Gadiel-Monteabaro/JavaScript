function translatePigLatin(str) {
  const reg = /^[aeiou]/.test(str);

  if (reg) {
    return str.concat("way");
  }

  const consonant = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonant.length) + consonant + "ay";
}

translatePigLatin("tsdeight");
