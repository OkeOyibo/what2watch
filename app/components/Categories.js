import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker'
import { getCategories } from '../services/MovieService'

function Categories ({ getValues }) {
    let controller;
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await getCategories();
                let genres = await response.genres;
                setData(genres);
            }
            catch(error){ console.log(error); }
        };
        if (!data.length > 0) {
            fetchData();
        }
    }, [])

    return(
        <DropDownPicker
            placeholder={"Select category"}
            min={0}
            max={1}
            style={{
                backgroundColor: 'red',
                borderColor: 'red',
                flexDirection: 'row',
            }}           
            containerStyle={{
                height: 60, width: '100%',
            }}
            labelStyle={{
                color: 'black',
                fontSize: 20
            }}
            itemStyle={{
                color: 'black'
            }}
            dropDownStyle={{

            }}
            dropDownMaxHeight={225}
            arrowColor={'white'}
            items={
                data.map((item) => {
                return {
                    label: item.name,
                    value: item.id
                }})
            }
            defaultValue={''}
            controller={instance => controller = instance}
            onChangeItem={item => getValues(item.value)}
        />
    );  

}

export default Categories;