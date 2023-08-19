import {useEffect, useState} from "react";

import {useForm} from "@shared/ui-kit";

const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
};
export const useViewControl = ({schema, defaultValues, url = 'https://api.github.com/users'}) => {

    const [state, setState] = useState({data: [], loading:false,error:null});

    const form = useForm({
        schema: schema,
        defaultValues: defaultValues,
    });

    useEffect(() => {
        const {unsubscribe} = form.watch((formState) => {
            setState(prev => {
                return {...prev, loading: true}
            });
            fetchJson(url)
                .then((data) => {
                    setState(prev => {
                        return {...prev, data: data}
                    });
                })
                .catch((error) =>
                    setState(prev => {
                        return {...prev, error}
                    })
                )
                .finally(() => setState(prev => {
                    return {...prev, loading:false}
                }))
        });
        return () => unsubscribe();
    }, [form])

    return {
        data: state.data,
        loading: state.loading,
        error: state.error,
        form
    }
}
