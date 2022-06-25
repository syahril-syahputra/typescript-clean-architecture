
import useBaseUrl from "./useBaseUrl";
/**
 *
 * @param url Url Untuk Mendapatkan Data contoh http://api.lucy.test/user
 * @param option parameter
 * @method fetchData() untuk perintah eksekusi.
 * @returns hasil dari data yang di dapat
 */
export default function (url: string, option: object) {

    let callback: any;

    const fetchData = async () => {
        try {
            const result = await fetch(`${useBaseUrl}${url}`, option);
            const json = await result.json();
            callback = json
        } catch (error: any | null) {
            callback = error;
        }
    };
    fetchData();
    return callback;
}
