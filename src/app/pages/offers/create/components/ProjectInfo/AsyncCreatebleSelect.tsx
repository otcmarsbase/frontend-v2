import React, {FC} from 'react';
import {Controller} from "react-hook-form";

import {FormControl} from "@chakra-ui/react";
import {AsyncCreatableSelect, GroupBase} from "chakra-react-select";
import lodash from 'lodash'

const colourOptions:any = [
    {
        label: 'USDT',
        value: 'USDT',
        id: 1
    },
    {
        label: 'Layer Zero',
        value: 'Layer Zero',
        id: 2
    },
    {
        label: 'Solana',
        value: 'Solana',
        id: 3
    },
    {
        label: 'Union',
        value: 'Union',
        id: 3
    }
]

interface ISelect {
    //todo
    control: any,
    name: string,
    url:string,
    placeholder: string
}
export function Selector<T>({control, name, url, placeholder}: ISelect){
    function filterItems<T>(inputValue: string) {
        let result = colourOptions.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        console.log('typeof result', typeof result)
        return result
    }

    const promiseOptions = lodash.throttle((inputValue: string):Promise<T[]> =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(filterItems(inputValue));
            }, 1000);
        }), 1000)

    return (
        <Controller
            control={control}
            name={name}
            rules={{ required: "Please enter at least one project." }}
            render={({
                         field: { onChange, onBlur, value, name, ref },
                         fieldState: { error }
                     }) => (
                <FormControl py={4} isInvalid={!!error} id={name}>
                    <AsyncCreatableSelect<T, true, GroupBase<T>>
                        cacheOptions
                        defaultOptions
                        name={name}
                        ref={ref}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder={placeholder}
                        loadOptions={promiseOptions}
                        chakraStyles={
                            {
                                dropdownIndicator: () => ({
                                    display:'none'
                                }),
                                indicatorSeparator: ()=>({
                                    display:'none'
                                })
                            }
                        }
                    />
                </FormControl>
            )}
        />
    )

}
