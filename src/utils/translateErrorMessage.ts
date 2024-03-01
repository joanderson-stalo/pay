import axios from "axios";

export async function TranslateErrorMessage(errorMessage: string): Promise<string> {
  try {
    const response = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=${encodeURI(errorMessage)}`);
    const translatedText = response.data[0][0][0];
    return translatedText;
  } catch (error) {
    return 'Ocorreu um erro.';
  }
}
