import { ISubmitter, parseHttpError } from "@meshsdk/core";
import axios, { AxiosInstance } from "axios";

export class YaciProvider implements ISubmitter {
  private readonly _axiosInstance: AxiosInstance;

  constructor() {
    this._axiosInstance = axios.create({
      baseURL: "http://localhost:8080/api/v1",
    });
  }

  async submitTx(txHex: string): Promise<string> {
    try {
      const headers = { "Content-Type": "text/plain" };
      const { status, data } = await this._axiosInstance.post(
        "/tx/submit",
        txHex,
        {
          headers,
        }
      );

      if (status === 202) {
        return data;
      }

      throw parseHttpError(data);
    } catch (error) {
      console.log("error", error);
      throw parseHttpError(error);
    }
  }
}
