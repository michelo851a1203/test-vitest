import { BasicType, basicValidator } from "../datatype";
import fetch from 'cross-fetch';

export default function TestApi() {
  const testApiService = async (): Promise<BasicType> => {
    const response = await fetch('http://localhost:8080', {
      method: 'GET',
      redirect: 'follow',
    });
    if (response.status !== 200) throw Error('not statuscode 200');
    const data = await response.json();
    return basicValidator.parse(data);
  }

  return {
    testApiService,
  }
}
