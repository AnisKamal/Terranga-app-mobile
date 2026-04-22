import { useQuery } from "@tanstack/react-query";

const endpoint = "http://192.168.11.218:8099/" 

type API = {
    'api/v1/matchs' : [ {
        date: string, 
        homeName: string,
        homeLogo: string, 
        awayName: string,
        awayLogo: string
    } ]
}; 

export function useFetchQuery<T extends keyof API>(
  path: T, 
  params?: Record<string, string | number>
){
    const localUrl = endpoint + Object.entries(params ?? {}).reduce(
        (acc, [key, value]) => acc.replaceAll(`[${key}]`, String(value)), 
        path as string
    )
    console.log("valeur de url : " + localUrl)
    return useQuery({
        queryKey: [localUrl],
         queryFn: async () => {
            return fetch(localUrl).then(r => r.json() as Promise<API[T]>)
        }
    })
}
