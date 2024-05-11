import {useQuery} from "@tanstack/react-query";
import {gallery} from '../utils/siteData/texts.json'

export const useGallery = () => {
    return useQuery({
        queryKey: ['gallery'],
        queryFn: (): Promise<string[]> => new Promise((resolve, reject) => {
            fetch(gallery,
                {
                    method: 'GET',
                    credentials: "same-origin"
                })
                .then(result => result.json())
                .then((result: { items: [{ url: string }] }) => resolve(result.items.map(r => r.url)))
                .catch(err => reject(err))
        }),
        placeholderData: ["", "", "", "", ""],
        staleTime: 7200000,
    });
}

