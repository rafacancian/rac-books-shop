
import { useParams } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CategoryTitle from "../../components/CategoryTitle";
import CategoryBooks from "../../components/CategoryBooks";
import axios from "axios";
import { ICategory } from "../../interfaces/ICategory";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import http from "../../http";

const Categories = () => {

    const [category, setCategory] = useState<ICategory>();
    const params = useParams()

    useEffect(() => {
        http.get<ICategory>("public/categories", {
            params: {
                slug: params.slug
            }
        }).then(response => {
            setCategory(response.data)
        })
    }, [params.slug])

    /*const getCategoryBySlug = async (slug: string) => {
        console.log("getCategoryBySlug")
        let response = http.get<ICategory>("public/categories", {
            params: {
                slug
            }
        })

        const myObject: ICategory = response.data as ICategory;
        return myObject;
    }


    //const { data: category, isLoading } = useQuery(['getCategoryBySlug', params.slug], () => getCategoryBySlug(params.slug || ''))

    if (isLoading) {
        return (<>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </>)
    }*/

    return (<section>
        <CategoryTitle title={category?.name ?? ''} />
        <CategoryBooks category={category!} />
    </section>)
}

export default Categories