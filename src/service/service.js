import { getData } from ".";

export async function getWords() {
  return getData().then(function (data) {
    const wordsInfos = data.volume.contribution;
    return wordsInfos;
  });
}
